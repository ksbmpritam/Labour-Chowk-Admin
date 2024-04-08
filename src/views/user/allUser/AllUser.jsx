
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
import pictureIcon from "../../../assets/images/avatars/4.jpg";

const AllUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { allUserData: userData } = useSelector((state) => state?.userReducer);
    console.log("All User Data :: ", userData);

    //! All User DataTable Columns
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
            selector: row => <div style={{ textTransform: "capitalize", color: row?.isVerified == 'verified' ? 'green' : 'red' }}>{row?.isVerified?.toLowerCase()}</div>,
        },
        {
            name: 'Status',
            selector: row => <div style={{ textTransform: "capitalize", color: row?.isActive == 'active' ? 'green' : 'red' }}>{row?.isActive?.toLowerCase()}</div>,
        },
        {
            name: 'Action',
            cell: row => <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Edit" icon={icon.cilPencil} size="sm" onClick={() => handleEdit(row)} />
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Delete" icon={icon.cilBan} size="sm" />
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" style={{ cursor: "pointer" }} onClick={() => navigate(`/user/${row?._id}`)} icon={icon.cilTouchApp} size="sm" />
            </div>,
            width: '180px'
        },
    ]

    useEffect(function () {
        //! Dispatching API for Getting Active user
        dispatch(UserActions.getAllUser())
    }, []);





    const handleEdit = (data) => {
        setVisible(!visible)
        console.log("Edit Data ::: ", data)

        setUserDetail({
            name: data.name || '',
            email: data.email || '',
            contact: data.contact || '',
        });
        setProfileImage({ file: data?.profileImage, bytes: '' })
        setAadharCard({ file: data?.aadhar, bytes: '' })
    }

    const [visible, setVisible] = useState(false)

    const [validated, setValidated] = useState(false)
    const [userDetail, setUserDetail] = useState({ name: '', email: '', contact: '' });
    const [profileImage, setProfileImage] = useState({ file: null, bytes: "" });
    const [aadharCard, setAadharCard] = useState({ file: null, bytes: "" });
    const [error, setError] = useState({ name: "Please Provide Name", email: "Please Provide Email" })

    const handleError = (input, value) => {
        setError((prev) => ({ ...prev, [input]: value }))
    }

    const handleInputField = (e) => {
        const { name, value } = e.target;
        setUserDetail({ ...userDetail, [name]: value });
    };

    const handleProfileImage = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setProfileImage({
                file: URL.createObjectURL(e.target.files[0]),
                bytes: e.target.files[0],
            });
        }
    };

    const handleAadharcard = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setAadharCard({
                file: URL.createObjectURL(e.target.files[0]),
                bytes: e.target.files[0],
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.stopPropagation()
        } else {
            var formData = new FormData()

            formData.append("name", userDetail?.name)
            formData.append("email", userDetail?.email)
            formData.append("conact", userDetail?.contact)
            formData.append("profileImage", profileImage.bytes);
            formData.append("aadharCard", aadharCard.bytes);

            console.log({ name: userDetail?.name, email: userDetail?.email, contact: userDetail?.contact, profileImage: profileImage?.bytes, aadharCard: aadharCard?.bytes })

            console.log('Form data:', formData);
        }
        setValidated(true)
    }

    return (
        <>
            {
                userData &&
                <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                    <DataTableHeader title={'All Users'} data={userData} />
                    <DataTable
                        columns={userColumns}
                        data={userData}
                        pagination
                        customStyles={DataTableCustomStyles}
                    />
                </div>
            }

            {/* Edit Modal */}
            <CModal
                backdrop="static"
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="LiveDemoExampleLabel"
            >
                <CModalHeader onClose={() => setVisible(false)}>
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
                                feedbackInvalid={error?.name}
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
                                feedbackInvalid={error?.email}
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
                        <CCol md={12}>
                            <div>Aadhar card</div>
                            <CRow className='align-items-center'>
                                <CCol xs={2}>
                                    <img src={aadharCard?.file} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                                </CCol>
                                <CCol xs={10}>
                                    <CFormInput
                                        type="file"
                                        name="aadharCard"
                                        id="validationCustom05"
                                        required
                                        feedbackValid="Looks good!"
                                        feedbackInvalid="Please Provide Aadhar Card"
                                        aria-label="file example"
                                        onChange={handleAadharcard}
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