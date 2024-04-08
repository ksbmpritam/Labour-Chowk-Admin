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
import * as PartnerActions from '../../../redux/actions/partnerAction';
import MainLoader from '../../../components/loader/MainLoader';

const AllPartner = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { allPartnerData: partnerData } = useSelector((state) => state?.partnerReducer);

    const [partnerModalVisible, setPartnerModalVisible] = useState(false)
    const [partnerDetail, setPartnerDetail] = useState({ partnerID: '', name: '', contact: '' });
    const [profileImage, setProfileImage] = useState({ file: null, bytes: "" });
    const [aadharCard, setAadharCard] = useState({ file: null, bytes: "" });
    const [validated, setValidated] = useState(false)
    const [inputFieldError, setInputFieldError] = useState({ name: "Please Provide Name", email: "Please Provide Email" })

    //* Handle Input Field : Error
    const handleInputFieldError = (input, value) => {
        setInputFieldError((prev) => ({ ...prev, [input]: value }))
    }

    //* Handle Input Field : Data
    const handleInputField = (e) => {
        const { name, value } = e.target;
        setPartnerDetail({ ...partnerDetail, [name]: value });
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

    //* Handle User Aadhar Card
    const handleAadharcard = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setAadharCard({
                file: URL.createObjectURL(e.target.files[0]),
                bytes: e.target.files[0],
            });
        }
    };

    //! Handle Status - Active/Banned : Partner
    const handleActiveBannedStatus = (data) => {
        const { _id: partnerId, isActive: status } = data
        console.log("Active-Banned", { partnerId, status })

        if (status === 'active') {
            console.log("active")
            dispatch(PartnerActions.changePartnerStatus({ labourID: partnerId, isActive: "inActive" }))
        }
        if (status === 'inActive') {
            console.log("inActive")
            dispatch(PartnerActions.changePartnerStatus({ labourID: partnerId, isActive: "active" }))
        }
    }

    //! Handle Kyc Status : Partner 
    const handleKycStatus = (data) => {
        const { _id: partnerId, isVerified: status } = data
        console.log("Kyc Status", { partnerId, status })

        if (status === 'verified') {
            console.log("verified")
            dispatch(PartnerActions.changePartnerKycStatus({ labourID: partnerId, isVerified: "unVerified" }))
        }
        if (status === 'unVerified') {
            console.log("unVerified")
            dispatch(PartnerActions.changePartnerKycStatus({ labourID: partnerId, isVerified: "verified" }))
        }
    }

    //! Handle Edit - Setting Partner Data To Field : User 
    const handleEditPartner = (data) => {
        setPartnerModalVisible(!partnerModalVisible)
        console.log("Edit Data ::: ", data)

        setPartnerDetail({
            name: data.labourName || '',
            contact: data.phoneNo || '',
            partnerID: data._id || ''
        });
        setProfileImage({ file: api_urls + data?.profileImage, bytes: '' })
    }

    //! Handle Update : Partner
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.stopPropagation()
        } else {
            console.log({ labourID: partnerDetail?.partnerID, labourName: partnerDetail?.name, phoneNo: partnerDetail?.contact, profile: profileImage?.bytes })

            let formData = new FormData()
            formData.append("labourID", partnerDetail?.partnerID)
            formData.append("labourName", partnerDetail?.name)
            formData.append("phoneNo", partnerDetail?.contact)
            formData.append("profile", profileImage.bytes);

            console.log("payload Data :: ", formData)

            const payload = {
                data: formData,
                onComplete: () => setPartnerModalVisible(!partnerModalVisible)
            }

            // //! Dispatching API for Updating Parter
            dispatch(PartnerActions.updatePartner(payload))
        }
        setValidated(true)
    }

    //* All Partner DataTable Columns
    const partnerColumns = [
        {
            name: 'S.No',
            selector: (row, index) => index + 1,
        },
        {
            name: 'Name',
            selector: row => row?.labourName,
        },
        {
            name: 'Mobile',
            selector: row => row?.phoneNo,
        },
        {
            name: 'Profile Image',
            cell: row => <img src={api_urls + row?.profileImage} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />,
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
            selector: row => <div style={{ cursor: "pointer", textTransform: "capitalize", color: row?.isActive == 'active' ? 'green' : 'red' }} onClick={() => handleActiveBannedStatus(row)}>{row?.isActive?.toLowerCase()}</div>,
        },
        {
            name: 'Action',
            cell: row => <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Edit" icon={icon.cilPencil} style={{ cursor: "pointer" }} size="sm" onClick={() => handleEditPartner(row)} />
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Delete" icon={icon.cilDelete} size="sm" onClick={() => dispatch(PartnerActions.deletePartner({ labour_ID: row?._id }))} />
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" icon={icon.cilTouchApp} size="sm" style={{ cursor: "pointer" }} onClick={() => navigate(`/partner/${row?._id}`)} />
            </div>,
            width: '180px'
        },
    ]

    useEffect(function () {
        //! Dispatching API for Getting All Partner
        dispatch(PartnerActions.getAllPartner())
    }, []);

    return (
        <>
            <MainLoader />
            {
                partnerData &&
                <div style={{ padding: "20px", backgroundColor: "#fff", marginBottom: "20px" }}>
                    <DataTableHeader title={'All Partner'} data={partnerData} />
                    <DataTable
                        columns={partnerColumns}
                        data={partnerData}
                        pagination
                        customStyles={DataTableCustomStyles}
                        paginationPerPage={5}
                        paginationRowsPerPageOptions={[5, 10, 15, 20]}
                        paginationComponentOptions={{ rowsPerPageText: 'Rows Per Page :' }}
                    />
                </div>
            }

            {/* Edit Modal */}
            <CModal
                backdrop="static"
                visible={partnerModalVisible}
                onClose={() => setPartnerModalVisible(false)}
                aria-labelledby="LiveDemoExampleLabel"
            >
                <CModalHeader onClose={() => setPartnerModalVisible(false)}>
                    <CModalTitle id="LiveDemoExampleLabel">Edit Partner</CModalTitle>
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
                                value={partnerDetail.name}
                                id="validationCustom01"
                                required
                                feedbackValid="Looks good!"
                                feedbackInvalid={inputFieldError?.name}
                                onChange={handleInputField}
                            />
                        </CCol>
                        {/* <CCol md={6}>
                            <CFormInput
                                label="Email"
                                type="text"
                                name="email"
                                value={partnerDetail.email}
                                id="validationCustom02"
                                required
                                feedbackValid="Looks good!"
                                feedbackInvalid={inputFieldError?.email}
                                onChange={handleInputField}
                            />
                        </CCol> */}
                        <CCol md={6}>
                            <CFormInput
                                label="Mobile No."
                                type="text"
                                name="contact"
                                value={partnerDetail.contact}
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
                        {/* <CCol md={12}>
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
                        </CCol> */}
                        <CCol xs={12}>
                            <CButton type="submit" style={{ backgroundColor: "#212631", color: "#fff", fontSize: "14px", padding: "5px 10px" }}>
                                Edit Partner
                            </CButton>
                        </CCol>
                    </CForm>
                </CModalBody>
            </CModal>
        </>
    )
}

export default AllPartner

