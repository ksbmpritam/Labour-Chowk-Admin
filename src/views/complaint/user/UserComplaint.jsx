import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import * as icon from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import DataTableHeader from '../../../components/common/DataTableHeader';
import { CButton, CCol, CForm, CModal, CModalBody, CModalHeader, CModalTitle } from '@coreui/react';
import {  CFormInput,  CRow } from '@coreui/react';
import { DataTableCustomStyles } from '../../../styles';



const UserComplaint = () => {


    const [selectedViewRow, setSelectedViewRow] = useState({});
    const [viewVisible, setViewVisible] = useState(false);
    const [replyVisible, setReplyVisible] = useState(false);
    const [subject, setSubject] = useState(false);
    const [discription, setDiscription] = useState(false);
    const [validated, setValidated] = useState(false)

    const handleView = (row) => {
        setSelectedViewRow(row);
        setViewVisible(true);
    };
    
    
    const handleReply = (row) => {
        setSelectedViewRow(row);
        setReplyVisible(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.stopPropagation()
        } else {
            var formData = new FormData()
            console.log("Subject:", subject);
            console.log("Discription:", discription);

        }
        setValidated(true)
    };

    const handleSubjectChange = (e) => {
        const { name, value } = e.target;
        setSubject({ [name]: value });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDiscription ({ [name]: value });
    };



    const userComplaintColumns = [
        {
            name: 'S.No',
            selector: (row, index) => index + 1,
        },
       
        {
            name: 'Created by',
            selector: row => row.Sentby,
        },
        {
            name: 'Category ',
            selector: row => row.category,
        },
        {
            name: 'Complaint',
            selector: row => row.complaint,
        },
        {
            name: 'Date ',
            selector: row => row.date,
        },
        {
            name: 'Time ',
            selector: row => row.time,
        },
        {
            name: 'Action',
            cell: row => (
                <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
                    <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" style={{ cursor: "pointer" }} onClick={() => handleView(row)} icon={icon.cilTouchApp} size="sm" />
                    <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Reply" style={{ cursor: "pointer" }} onClick={() => handleReply(row)} icon={icon.cilShortText} size="sm" />
                </div>
            ),
            width: '180px'
        },
    ];

    const userComplaintData = [
        {
            id: 1,
            complaint: 'This page was last edited on 9 January 2024, at 23:54 (UTC).',
            Sentby: 'User one',
            category:' Category 1',
            date:'2-04-2024',
            time:'10:00 pm'
        },
        {
            id: 2,
            complaint: 'This page was last edited on 9 January 2024, at 23:54 (UTC).',
            Sentby: 'User one',
            category:' Category 5',
            date:'2-04-2024',
            time:'10:00 pm'
        },
        {
            id: 3,
            complaint: 'This page was last edited on 9 January 2024, at 23:54 (UTC).',
            Sentby: 'User one',
            category:' Category 4',
            date:'2-04-2024',
            time:'10:00 pm'
        },
    ]

    return (
        <>
            <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                <DataTableHeader title={" User Complaints "} data={userComplaintData} />
                <DataTable
                    columns={userComplaintColumns}
                    data={userComplaintData}
                    pagination
                    customStyles={DataTableCustomStyles}
                />

                {/* view modal */}
                <CModal
                    alignment="center"
                    visible={viewVisible}
                    onClose={() => setViewVisible(false)}
                    aria-labelledby="ViewModal"
                >
                    <CModalHeader>
                        <CModalTitle id="VerticallyCenteredExample">View Complaint</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm className="row g-3 needs-validation">
                            <CCol md={12}>
                                <p><span style={{ fontWeight: 'bold', fontSize: '18px' }}>Complaint:</span> {selectedViewRow.complaint} </p>
                            </CCol>
                            <CCol md={12}>
                                <p><span style={{ fontWeight: 'bold', fontSize: '18px' }}>Created by:</span> {selectedViewRow.Sentby} </p>
                            </CCol>
                            <CCol md={12}>
                                <p><span style={{ fontWeight: 'bold', fontSize: '18px' }}>Category:</span> {selectedViewRow.category} </p>
                            </CCol>
                            <CCol md={12}>
                                <p><span style={{ fontWeight: 'bold', fontSize: '18px' }}>Date:</span> {selectedViewRow.date} </p>
                            </CCol>
                            <CCol md={12}>
                                <p><span style={{ fontWeight: 'bold', fontSize: '18px' }}>Time:</span> {selectedViewRow.time} </p>
                            </CCol>
                            <CCol xs={2} className="text-center">
                                <CButton style={{ backgroundColor: "#212631", color: "#fff", fontSize: "14px", padding: "5px 10px" }} onClick={() => setViewVisible(false)}>
                                    Close
                                </CButton>
                            </CCol>
                        </CForm>
                    </CModalBody>
                </CModal>

                {/* Reply modal */}
                <CModal
                    alignment="center"
                    visible={replyVisible} 
                    onClose={() => setReplyVisible(false)} 
                    aria-labelledby="ReplyModal" 
                >
                    <CModalHeader>
                        <CModalTitle id="VerticallyCenteredExample">Reply to Complaint</CModalTitle> 
                    </CModalHeader>

                    <CModalBody>
                    <CForm
                        className="row g-3 needs-validation"
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <CCol md={12}>
                            <CFormInput
                                label="Subject"
                                type="text"
                                name="subject"
                                id="validationCustom01"
                                required
                                feedbackValid="Looks good!"
                                feedbackInvalid=" Please add subject"
                                onChange={handleSubjectChange}
                            />
                        </CCol>

                        <CCol md={12}>
                            <CFormInput
                                label="Discription"
                                type="text"
                                name="discription"
                                id="validationCustom01"
                                required
                                feedbackValid="Looks good!"
                                feedbackInvalid=" Please add Discription"
                                onChange={handleInputChange}
                            />
                        </CCol>
                        
                       

                        <CCol xs={12}>
                            <CButton type="submit" style={{ backgroundColor: "#212631", color: "#fff", fontSize: "14px", padding: "5px 10px" }}>
                                Send
                            </CButton>
                        </CCol>
                    </CForm>
                </CModalBody>
                    
                </CModal>
            </div>
        </>
    )
}

export default UserComplaint

