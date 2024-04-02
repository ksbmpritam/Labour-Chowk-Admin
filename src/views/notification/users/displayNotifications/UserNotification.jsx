import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import * as icon from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import DataTableHeaderWithAdd from '../../../../components/common/DataTableHeaderWithAdd';
import { CButton, CCol, CForm, CModal, CModalBody, CModalHeader, CModalTitle } from '@coreui/react';



const UserNotification = () => {
     

    const [selectedViewRow, setSelectedViewRow] = useState({});
    const [viewVisible, setViewVisible] = useState(false); // Define viewVisible state

    const handleView = (row) => {
        setSelectedViewRow(row);
        setViewVisible(true);
    };



    const columns = [
        {
            name: 'S.No',
            selector: (row, index) => index + 1,
        },
        {
            name: 'Notification',
            selector: row => row.notification,
        },
        {
            name: 'Sent to',
            selector: row => row.Sentto,
        },
        {
            name: 'Action',
            cell: row => (
                <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
                    <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" style={{ cursor: "pointer" }} onClick={() => handleView(row)} icon={icon.cilTouchApp} size="xl" />
                </div>
            ),
            width: '180px'
        },
    ];
    
    const data = [
        {
            id: 1,
            notification: 'This page was last edited on 9 January 2024, at 23:54 (UTC).',
            Sentto: 'All'
        },
        {
            id: 2,
            notification: 'This page was last edited on 9 January 2024, at 23:54 (UTC).',
            Sentto: 'All Users'
        },
    ]
    const dataTableCustomStyles = {
        cells: {
            style: {
                textAlign: "center",
                color: "rgba(0, 0, 0, 0.6)", whiteSpace: "nowrap",
            },
        },
        rows: {
            style: {
                backgroundColor: "#fff"
            },
        },
        headRow: {
            style: {
                whiteSpace: 'nowrap',
                fontSize: "14px",
                fontWeight: "600", color: "#fff",
                backgroundColor: "#212631"
            }
        }
    };
    
    return (
        <>
            <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                <DataTableHeaderWithAdd title={'User Notifications'} data={data} url={'add-user-notification'} />
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    customStyles={dataTableCustomStyles}
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
                                <p><span style={{ fontWeight: 'bold', fontSize: '18px' }}>Notification:</span> {selectedViewRow.notification} </p>
                            </CCol>
                            <CCol md={12}>
                                <p><span style={{ fontWeight: 'bold', fontSize: '18px' }}>Sent to:</span> {selectedViewRow.Sentto} </p>
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

export default UserNotification
