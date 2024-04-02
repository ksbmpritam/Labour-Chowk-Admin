import CIcon from '@coreui/icons-react';
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import * as icon from '@coreui/icons';
import DataTableHeader from '../../components/common/DataTableHeader';
import { CButton, CCol, CForm, CFormInput, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react';

const Jobs = () => {
    const [selectedViewRow, setSelectedViewRow] = useState(null);
    const [viewVisible, setViewVisible] = useState(false); // Define viewVisible state

    const handleView = (row) => {
        setSelectedViewRow(row);
        setViewVisible(true);
    };

    const data = [
        {
            id: 1,
            title: "Plumber",
            skills: "abc",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
            status: "Open",
        },
        {
            id: 2,
            title: "Carpainter",
            skills: "def",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
            status: "expired",
        }
    ];

    const columns = [
        {
            name: 'S.No',
            selector: (row, index) => index + 1,
            maxWidth: '150px',
        },
        {
            name: 'Title',
            selector: row => row.title,
            maxWidth: '150px',
        },
        {
            name: 'Skills',
            selector: row => row.skills,
            maxWidth: '150px',
        },
        {
            name: 'Description',
            selector: row => row.description,
            minWidth: '900px',
        },
        {
            name: 'Status',
            selector: row => row.status,
            maxWidth: '150px',
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

    const dataTableCustomStyles = {
        headRow: {
            style: {
                backgroundColor: "#212631",
                color: "#fff",
            }
        },
        cells: {
            style: {
                whiteSpace: 'nowrap',
            }
        },
    };

    return (
        <>
            <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                <DataTableHeader title={'Job Uploaded'} data={data} />
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    customStyles={dataTableCustomStyles}
                />
            </div>
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
                            <p><span style={{ fontWeight: 'bold', fontSize: '18px' }}>Title:</span> {selectedViewRow.title} </p>
                        </CCol>
                        <CCol md={12}>
                            <p><span style={{ fontWeight: 'bold', fontSize: '18px' }}>Skills:</span> {selectedViewRow.skills} </p>
                        </CCol>

                        <CCol md={12}>
                            <p><span style={{ fontWeight: 'bold', fontSize: '18px' }}>Description:</span> {selectedViewRow.description}  </p>
                        </CCol>
                        <CCol md={12}>
                            <p><span style={{ fontWeight: 'bold', fontSize: '18px' }}>Status:</span> {selectedViewRow.status}  </p>
                        </CCol>

                        <CCol xs={2} className="text-center">
                            <CButton style={{ backgroundColor: "#212631", color: "#fff", fontSize: "14px", padding: "5px 10px" }} onClick={() => setViewVisible(false)}>
                                Close
                            </CButton>
                        </CCol>
                    </CForm>
                </CModalBody>



            </CModal>
        </>
    )
}

export default Jobs;
