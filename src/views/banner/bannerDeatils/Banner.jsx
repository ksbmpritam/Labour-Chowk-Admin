import CIcon from '@coreui/icons-react';
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';
import * as icon from '@coreui/icons';
import DataTableHeaderWithAdd from '../../../components/common/DataTableHeaderWithAdd';

const Banner = () => {
    const [editVisible, setEditVisible] = useState(false);
    const [viewVisible, setViewVisible] = useState(false);
    const [selectedEditRow, setSelectedEditRow] = useState(null);
    const [selectedViewRow, setSelectedViewRow] = useState(null);

    const handleEdit = (row) => {
        setSelectedEditRow(row);
        setEditVisible(true);
    };

    const handleView = (row) => {
        setSelectedViewRow(row);
        setViewVisible(true);
    };

    const data = [
        {
            id: 1,
            title: "Plumber",
            banner: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
        },
        {
            id: 2,
            title: "Carpainter",
            banner: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
        }
    ]

    const columns = [
        {
            name: 'S.No',
            selector: (row, index) => index + 1,
        },
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Banners',
            cell: row => <img src={row.banner} alt="Banner" style={{ width: '50px', height: '50px' }} />,
        },
        {
            name: 'Action',
            cell: row => (
                <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
                    <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Edit" icon={icon.cilPencil} size="lg" onClick={() => handleEdit(row)} />
                    <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Delete" icon={icon.cilDelete} size="lg" />
                    <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" style={{ cursor: "pointer" }} onClick={() => handleView(row)} icon={icon.cilTouchApp} size="lg" />
                </div>
            ),
            width: '180px'
        },
    ];

    const dataTableCustomStyles = {
        cells: {
            style: {
                textAlign: "center",
                color: "rgba(0, 0, 0, 0.6)",
                whiteSpace: "nowrap",
            },
        },
        rows: {
            style: {
                minHeight: '65px',
                backgroundColor: "#fff"
            },
        },
        headRow: {
            style: {
                whiteSpace: 'nowrap',
                fontSize: "14px",
                fontWeight: "600",
                color: "#fff",
                backgroundColor: "#212631"
            }
        }
    };



    return (
        <>
                <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                <DataTableHeaderWithAdd title={'Banners'} data={data} url={'addBanner'}/>
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    customStyles={dataTableCustomStyles}
                />
                </div>
            

            {/* Edit Modal */}

            <CModal
                alignment="center"
                visible={editVisible}
                onClose={() => setEditVisible(false)}
                aria-labelledby="EditModal"
            >
                <CModal
                    alignment="center"
                    visible={editVisible}
                    onClose={() => setEditVisible(false)}
                    aria-labelledby="EditModal"
                >
                    <CModalHeader>
                        <CModalTitle id="VerticallyCenteredExample">Edit Banner</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <div className='m-2' >
                            <label htmlFor="title">Title:</label>
                            <input className='form-control' id="title" type="text" defaultValue={selectedEditRow?.title} />
                        </div>
                        <div className='m-2' >
                            <label htmlFor="file">Choose File:</label>
                            <input className='form-control' id="file" type="file" />
                        </div>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => setEditVisible(false)}>
                            Close
                        </CButton>
                        <CButton style={{ backgroundColor: '#212631' }} color="primary" onClick={() => handleSaveChanges(selectedEditRow)}>
                            Save changes
                        </CButton>
                    </CModalFooter>
                </CModal>
            </CModal>

            {/* View Modal */}
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
                    <div className='m-2' >
                        <label htmlFor="title">Title:</label>
                        <input className='form-control' id="title" type="text" defaultValue={selectedViewRow?.title} readOnly />
                    </div>
                    <div className='m-2' >
                        <label htmlFor="file">Banner:</label>
                        <img src={selectedViewRow?.banner} alt="Banner" style={{ width: '100%', height: 'auto' }} />
                    </div>
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setViewVisible(false)}>
                        Close
                    </CButton>
                </CModalFooter>

            </CModal>
        </>
    )
}

export default Banner