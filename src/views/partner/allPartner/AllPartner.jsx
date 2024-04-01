import CIcon from '@coreui/icons-react';
import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import * as icon from '@coreui/icons';
import { DataTableCustomStyles } from '../../../styles';
import { useNavigate } from 'react-router-dom';
import { CButton, CCol, CForm, CFormCheck, CFormFeedback, CFormInput, CFormLabel, CFormSelect, CInputGroup, CInputGroupText, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react';
import DataTableHeader from '../../../components/common/DataTableHeader';
// import logo_icon from "../../assets/images/logo_icon.png";
import pictureIcon from "../../../assets/images/avatars/4.jpg";

const AllPartner = () => {
    //! Partner Start
    const partnerData = [
        {
            id: 1,
            name: "Partner One",
            email: "partnerone@gmail.com",
            contact: "8757858745",
            profileImage: pictureIcon,
            aadhar: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/800px-Aadhaar_Logo.svg.png",
        },
        {
            id: 2,
            name: "Partner Two",
            email: "partnertwo@gmail.com",
            contact: "8709858745",
            profileImage: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
            aadhar: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/800px-Aadhaar_Logo.svg.png",
        }
    ]

    const partnerColumns = [
        {
            name: 'S.No',
            selector: (row, index) => index + 1,
        },
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Profile Image',
            cell: row => <img src={row.profileImage} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />,
        },
        {
            name: 'Aadhar',
            cell: row => <img src={row.aadhar} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />,
        },
        {
            name: 'Mobile',
            selector: row => row.contact,
        },
        {
            name: 'Action',
            cell: row => <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Edit" icon={icon.cilPencil} style={{ cursor: "pointer" }} size="sm" onClick={() => handleEdit(row)} />
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Delete" icon={icon.cilDelete} size="sm" />
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Ban-Unban" icon={icon.cilBan} size="sm" />
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Verify" icon={icon.cilCheckCircle} size="sm" />
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" icon={icon.cilTouchApp} size="sm" style={{ cursor: "pointer" }} onClick={() => handleView(row)} />
            </div>,
            width: '180px'
        },
    ]
    //! partner End
    const handleView = (data) => {
        console.log("View Data ::: ", data)
        navigate(`/partner/${data?.id}`);
    }

    const handleEdit = (data) => {
        setVisible(!visible)
        console.log("Edit Data ::: ", data)

        setPartnerDetail({
            name: data.name || '',
            email: data.email || '',
            contact: data.contact || '',
        });
        setProfileImage({ file: data?.profileImage, bytes: '' })
        setAadharCard({ file: data?.aadhar, bytes: '' })
    }

    const navigate = useNavigate();
    const [visible, setVisible] = useState(false)

    const [validated, setValidated] = useState(false)
    const [partnerDetail, setPartnerDetail] = useState({ name: '', email: '', contact: '' });
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
            formData.append("email", partnerDetail?.email)
            formData.append("conact", partnerDetail?.contact)
            formData.append("profileImage", profileImage.bytes);
            formData.append("aadharCard", aadharCard.bytes);

            console.log({ name: partnerDetail?.name, email: partnerDetail?.email, contact: partnerDetail?.contact, profileImage: profileImage?.bytes, aadharCard: aadharCard?.bytes })

            console.log('Form data:', formData);
        }
        setValidated(true)
    }

    return (
        <>
            <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                <DataTableHeader title={'Partner'} data={partnerData} />
                <DataTable
                    columns={partnerColumns}
                    data={partnerData}
                    pagination
                    customStyles={DataTableCustomStyles}
                />
            </div>

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
                        <CCol md={6}>
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
                        </CCol>
                        <CCol md={12}>
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
                            <CButton color="primary" type="submit">
                                Submit
                            </CButton>
                        </CCol>
                    </CForm>
                </CModalBody>
            </CModal>
        </>
    )
}

export default AllPartner