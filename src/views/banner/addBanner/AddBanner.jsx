import CIcon from '@coreui/icons-react';
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';
import * as icon from '@coreui/icons';
import DataTableButton from '../../../components/common/DataTableButton';

const AddBanner = () => {
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
                <DataTableButton title={'Add'} url={'banner'} />
                <div>
                    <div className='m-2' >
                        <label htmlFor="title">Title:</label>
                        <input className='form-control' id="title" type="text" defaultValue={selectedEditRow?.title} />
                    </div>
                    <div className='m-2' >
                        <label htmlFor="file">Choose File:</label>
                        <input className='form-control' id="file" type="file" />
                    </div>
                    <CModalFooter style={{ justifyContent: "flex-end" }}>
                        <CButton style={{ backgroundColor: '#212631' }}  className="mt-3" color="primary" onClick={() => handleSaveChanges(selectedEditRow)}>
                            Save
                        </CButton>
                    </CModalFooter>
                </div>
               
            </div>




        </>
    )
}

export default AddBanner