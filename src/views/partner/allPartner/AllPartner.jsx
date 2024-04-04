import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { CButton, CCol, CForm, CFormCheck, CFormFeedback, CFormInput, CFormLabel, CFormSelect, CInputGroup, CInputGroupText, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react';
import DataTable from 'react-data-table-component';
import { DataTableCustomStyles } from '../../../styles';
import DataTableHeader from '../../../components/common/DataTableHeader';
import { useNavigate } from 'react-router-dom';
import * as PartnerActions from '../../../redux/actions/partnerAction';
import { api_urls } from '../../../utils/apiUrls';

const AllPartner = () => {
    const dispatch = useDispatch()
    const { allPartnerData: partnerData } = useSelector((state) => state?.partnerReducer);
    // console.log("Partner Data :: ", partnerData)

    useEffect(function () {
        //! Dispatching API for Getting All partner
        dispatch(PartnerActions.getAllPartner())
    }, []);

    //! Partner DataTable Columns
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
            cell: row => <img src={api_urls + row?.aadharBack} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />,
        },
        {
            name: 'Aadhar',
            cell: row => <img src={api_urls + row?.aadharFront} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />,
        },
        {
            name: 'Kyc Status',
            selector: row => <div style={{ cursor: "pointer" }}>{row?.isVerified}</div>,
        },
        {
            name: 'Status',
            selector: row => <div style={{ cursor: "pointer" }} onClick={() => handleActiveBannedStatus(row)}>{row?.isActive}</div>,
        },
        {
            name: 'Action',
            cell: row => <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Edit" icon={icon.cilPencil} style={{ cursor: "pointer" }} size="sm" onClick={() => handleEdit(row)} />
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Delete" icon={icon.cilDelete} size="sm" />
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" icon={icon.cilTouchApp} size="sm" style={{ cursor: "pointer" }} onClick={() => navigate(`/partner/${row?._id}`)} />
            </div>,
            width: '180px'
        },
    ]


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

    const handleEdit = (data) => {
        setVisible(!visible)
        console.log("Edit Data ::: ", data)

        setPartnerDetail({
            name: data.name || '',
            contact: data.contact || '',
        });
        setProfileImage({ file: data?.profileImage, bytes: '' })
        setAadharCard({ file: data?.aadhar, bytes: '' })
    }

    const navigate = useNavigate();
    const [visible, setVisible] = useState(false)
    const [validated, setValidated] = useState(false)
    const [partnerDetail, setPartnerDetail] = useState({ name: '', contact: '' });
    const [profileImage, setProfileImage] = useState({ file: null, bytes: "" });
    const [aadharCard, setAadharCard] = useState({ file: null, bytes: "" });
    const [error, setError] = useState({ name: "Please Provide Name", email: "Please Provide Email" })

    const handleError = (input, value) => {
        setError((prev) => ({ ...prev, [input]: value }))
    }

    const handleInputField = (e) => {
        const { name, value } = e.target;
        setPartnerDetail({ ...partnerDetail, [name]: value });
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

            formData.append("name", partnerDetail?.name)
            formData.append("contact", partnerDetail?.contact)
            formData.append("profileImage", profileImage.bytes);

            console.log({ name: partnerDetail?.name, contact: partnerDetail?.contact, profileImage: profileImage?.bytes })

            console.log('Form data:', formData);
        }
        setValidated(true)
    }

    return (
        <>
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
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="LiveDemoExampleLabel"
            >
                <CModalHeader onClose={() => setVisible(false)}>
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
                                feedbackInvalid={error?.name}
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
                                feedbackInvalid={error?.email}
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

