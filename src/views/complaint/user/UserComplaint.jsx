import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import * as icon from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import DataTableHeader from '../../../components/common/DataTableHeader';
import { CButton, CCol, CForm, CModal, CModalBody, CModalHeader, CModalTitle } from '@coreui/react';
import { DataTableCustomStyles } from '../../../styles';



const UserComplaint = () => {


    const [selectedViewRow, setSelectedViewRow] = useState({});
    const [viewVisible, setViewVisible] = useState(false); // Define viewVisible state

    const handleView = (row) => {
        setSelectedViewRow(row);
        setViewVisible(true);
    };



    const userComplaintColumns = [
        {
            name: 'S.No',
            selector: (row, index) => index + 1,
        },
        {
            name: 'Complaint',
            selector: row => row.complaint,
        },
        {
            name: 'Sent by',
            selector: row => row.Sentby,
        },
        {
            name: 'Action',
            cell: row => (
                <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
                    <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" style={{ cursor: "pointer" }} onClick={() => handleView(row)} icon={icon.cilTouchApp} size="sm" />
                </div>
            ),
            width: '180px'
        },
    ];

    const userComplaintData = [
        {
            id: 1,
            complaint: 'This page was last edited on 9 January 2024, at 23:54 (UTC).',
            Sentby: 'User one'
        },
        {
            id: 2,
            complaint: 'This page was last edited on 9 January 2024, at 23:54 (UTC).',
            Sentby: 'User two'
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
                        <CModalTitle id="VerticallyCenteredExample">View Banner</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CForm className="row g-3 needs-validation">
                            <CCol md={12}>
                                <p><span style={{ fontWeight: 'bold', fontSize: '18px' }}>Complaint:</span> {selectedViewRow.complaint} </p>
                            </CCol>
                            <CCol md={12}>
                                <p><span style={{ fontWeight: 'bold', fontSize: '18px' }}>Sent by:</span> {selectedViewRow.Sentby} </p>
                            </CCol>
                            <CCol xs={2} className="text-center">
                                <CButton style={{ backgroundColor: "#212631", color: "#fff", fontSize: "14px", padding: "5px 10px" }} onClick={() => setViewVisible(false)}>
                                    Close
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
