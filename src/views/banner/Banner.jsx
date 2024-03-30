import CIcon from '@coreui/icons-react';
import React from 'react'
import DataTable from 'react-data-table-component';
import * as icon from '@coreui/icons';

const Banner = () => {

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
            cell: row => <img src={row.banner} alt="Banner" style={{ width: '50px', height: '50px'}} />,
        },
       
        {
            name: 'Action',
            cell: row => <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
                 <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Edit" icon={icon.cilPencil} size="lg" onClick={() => handleEdit(row)} />
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Delete" icon={icon.cilDelete} size="lg" />
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" style={{ cursor: "pointer" }} onClick={() => handleView()} icon={icon.cilTouchApp} size="lg" />
            </div>,
            width: '180px'
        },
    ];

    const dataTableCustomStyles = {
        cells: {
            style: {
                // fontSize: '14px',
                // padding: "10px 0",
                textAlign: "center",
                color: "rgba(0, 0, 0, 0.6)", whiteSpace: "nowrap",
            },
        },
        rows: {
            style: {
                minHeight: '65px', // override the row height,
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

    const handleView = () => {
        console.log("Clicked")
    }

    return (
        <>
            <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", }}>
                    <div style={{ fontSize: "20px", fontWeight: "600" }}>Banners</div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                            <div style={{ fontSize: "16px", fontWeight: "600" }}>Download</div>
                            <CIcon icon={icon.cilDataTransferDown} size="sm" />
                        </div>
                    </div>
                </div>
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    customStyles={dataTableCustomStyles}
                />
            </div>
        </>
    )
}

export default Banner