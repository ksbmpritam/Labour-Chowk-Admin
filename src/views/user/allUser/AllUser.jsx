
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { CButton, CCol, CForm, CFormCheck, CFormFeedback, CFormInput, CFormLabel, CFormSelect, CInputGroup, CInputGroupText, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react';
import DataTable from 'react-data-table-component';
import { DataTableCustomStyles } from '../../../styles';
import DataTableHeader from '../../../components/common/DataTableHeader';
import { api_urls } from '../../../utils/apiUrls';
import * as UserActions from '../../../redux/actions/userAction';
import MainLoader from '../../../components/loader/MainLoader';
import { SwitchOffSvg, SwitchOnSvg } from '../../../utils/svg';
import MainDataTable from '../../../components/common/MainDataTable';

const AllUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { allUserData: userData } = useSelector((state) => state?.userReducer);
    console.log("All User Data :: ", userData);

    const [userModalVisible, setUserModalVisible] = useState(false)
    const [userDetail, setUserDetail] = useState({ userID: '', name: '', email: '', contact: '' });
    const [profileImage, setProfileImage] = useState({ file: null, bytes: "" });
    const [validated, setValidated] = useState(false)
    const [inputFieldError, setInputFieldError] = useState({ name: "Please Provide Name", email: "Please Provide Email" })

    //* Handle Input Field : Error
    const handleInputFieldError = (input, value) => {
        setInputFieldError((prev) => ({ ...prev, [input]: value }))
    }

    //* Handle Input Field : Data
    const handleInputField = (e) => {
        const { name, value } = e.target;
        setUserDetail({ ...userDetail, [name]: value });
    };

    //* Handle User Profile Image
    const handleProfileImage = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setProfileImage({
                file: URL.createObjectURL(e.target.files[0]),
                bytes: e.target.files[0],
            });
        }
    };

    //! Handle Status - Active/Banned : User
    const handleActiveBannedStatus = (data) => {
        const { _id: userId, isActive: status } = data
        console.log("Active-Banned", { userId, status })

        if (status === 'active') {
            console.log("active")
            dispatch(UserActions.changeUserStatus({ userID: userId, isActive: "inActive" }))
        }
        if (status === 'inActive') {
            console.log("inActive")
            dispatch(UserActions.changeUserStatus({ userID: userId, isActive: "active" }))
        }
    }

    //! Handle Kyc Status : User 
    const handleKycStatus = (data) => {
        const { _id: userId, isVerified: status } = data
        console.log("Kyc Status", { userId, status })

        if (status === 'verified') {
            console.log("verified")
            dispatch(UserActions.changeUserKycStatus({ userID: userId, isVerified: "unVerified" }))
        }
        if (status === 'unVerified') {
            console.log("unVerified")
            dispatch(UserActions.changeUserKycStatus({ userID: userId, isVerified: "verified" }))
        }
    }

    //! Handle Edit - Setting User Data To Field : User 
    const handleEditUser = (data) => {
        setUserModalVisible(!userModalVisible)
        console.log("Edit Data ::: ", data)

        setUserDetail({
            userID: data._id || '',
            name: data.userName || '',
            email: data.email || '',
            contact: data.phoneNo || ''
        });
        setProfileImage({ file: api_urls + data?.profile, bytes: '' })
    }

    //! Handle Update : User
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.stopPropagation()
        } else {
            console.log({ userID: userDetail?.userID, userName: userDetail?.name, email: userDetail?.email, phoneNo: userDetail?.contact, profile: profileImage })

            let formData = new FormData()
            formData.append("userID", userDetail?.userID)
            formData.append("userName", userDetail?.name)
            formData.append("email", userDetail?.name)
            formData.append("phoneNo", userDetail?.contact)
            formData.append("profile", profileImage?.bytes);

            console.log("payload Data :: ", formData)

            const payload = {
                data: formData,
                onComplete: () => setUserModalVisible(!userModalVisible)
            }

            //! Dispatching API for Updating User
            dispatch(UserActions.updateUser(payload))
        }
        setValidated(true)
    }

    //* All User DataTable Columns
    const userColumns = [
        { name: 'S.No.', selector: row => userData.indexOf(row) + 1, style: { backGroundColor: "#000", paddingLeft: "20px" } },
        { name: 'Name', selector: row => row.userName },
        { name: 'Mobile', selector: row => row.phoneNo },
        { name: 'Email', selector: row => row.email },
        {
            name: 'Profile Image',
            cell: row => <img src={api_urls + row?.profile} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />,
        },
        {
            name: 'Aadhar',
            cell: row => <img src={api_urls + row?.aadharFront} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />,
        },
        {
            name: 'Kyc Status',
            selector: row => <div style={{ cursor: "pointer", textTransform: "capitalize", color: row?.isVerified == 'verified' ? 'green' : 'red' }} onClick={() => handleKycStatus(row)}>{row?.isVerified?.toLowerCase()}</div>,
        },
        {
            name: 'Status',
            selector: row => <div style={{ cursor: "pointer", textTransform: "capitalize" }} onClick={() => handleActiveBannedStatus(row)}>
                {row?.isActive == 'active' ? <div data-tooltip-id="my-tooltip" data-tooltip-content="Active"><SwitchOnSvg /></div> : <div data-tooltip-id="my-tooltip" data-tooltip-content="Banned"><SwitchOffSvg /></div>}
            </div>,
        },
        {
            name: 'Action',
            cell: row => <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Edit" icon={icon.cilPencil} size="sm" onClick={() => handleEditUser(row)} />
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Delete" icon={icon.cilBan} size="sm" onClick={() => dispatch(UserActions.deleteUser({ userID: row?._id }))} />
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" style={{ cursor: "pointer" }} onClick={() => navigate(`/user/${row?._id}`)} icon={icon.cilTouchApp} size="sm" />
            </div>,
            width: '180px'
        },
    ]

    useEffect(function () {
        //! Dispatching API for Getting All User
        dispatch(UserActions.getAllUser())
    }, []);

    return (
        <>
            <MainDataTable title={'All Users'} columns={userColumns} data={userData} />


            {/* Edit Modal */}
            <CModal
                backdrop="static"
                visible={userModalVisible}
                onClose={() => setUserModalVisible(false)}
                aria-labelledby="LiveDemoExampleLabel"
            >
                <CModalHeader onClose={() => setUserModalVisible(false)}>
                    <CModalTitle id="LiveDemoExampleLabel">Edit User</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm
                        className="row g-3 needs-validation"
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <CCol md={6}>
                            <CFormInput
                                label="Name"
                                type="text"
                                name="name"
                                value={userDetail.name}
                                id="validationCustom01"
                                required
                                feedbackValid="Looks good!"
                                feedbackInvalid={inputFieldError?.name}
                                onChange={handleInputField}
                            />
                        </CCol>
                        <CCol md={6}>
                            <CFormInput
                                label="Email"
                                type="text"
                                name="email"
                                value={userDetail.email}
                                id="validationCustom02"
                                required
                                feedbackValid="Looks good!"
                                feedbackInvalid={inputFieldError?.email}
                                onChange={handleInputField}
                            />
                        </CCol>
                        <CCol md={12}>
                            <CFormInput
                                label="Mobile No."
                                type="text"
                                name="contact"
                                value={userDetail.contact}
                                id="validationCustom03"
                                required
                                feedbackValid="Looks good!"
                                feedbackInvalid="Please Provide Contact Number"
                                onChange={handleInputField}
                            />
                        </CCol>
                        <CCol md={12}>
                            <div>Profile Image</div>
                            <CRow className='align-items-center'>
                                <CCol xs={2}>
                                    <img src={profileImage?.file} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                                </CCol>
                                <CCol xs={10}>
                                    <CFormInput
                                        type="file"
                                        name="profileImage"
                                        id="validationCustom04"
                                        required
                                        feedbackValid="Looks good!"
                                        feedbackInvalid="Please Provide Profile Image"
                                        aria-label="file example"
                                        onChange={handleProfileImage}
                                    />
                                </CCol>
                            </CRow>
                        </CCol>
                        <CCol xs={12}>
                            <CButton type="submit" style={{ backgroundColor: "#212631", color: "#fff", fontSize: "14px", padding: "5px 10px" }}>
                                Edit User
                            </CButton>
                        </CCol>
                    </CForm>
                </CModalBody>
            </CModal>
        </>
    )
}

export default AllUser