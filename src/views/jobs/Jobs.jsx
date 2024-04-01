import CIcon from '@coreui/icons-react';
import React from 'react'
import DataTable from 'react-data-table-component';
import * as icon from '@coreui/icons';
import DataTableHeader from '../../components/common/DataTableHeader';

const Jobs = () => {

    const data = [
        {
            id: 1,
            title: "Plumber",
            skills: "abc",
            discription: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
            status: "Open",
        },
        {
            id: 2,
            title: "Carpainter",
            skills: "def",
            discription: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
            status: "expired",
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
            name: 'Skills',
            selector: row => row.skills,
        },
        {
            name: 'Discription',
            selector: row => row.discription,
        },
        {
            name: 'Status',
            selector: row => row.status,
        },
        {
            name: 'Action',
            cell: row => <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
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
                {/* <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", }}>
                    <div style={{ fontSize: "20px", fontWeight: "600" }}>Job Uploaded</div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                            <div style={{ fontSize: "16px", fontWeight: "600" }}>Download</div>
                            <CIcon icon={icon.cilDataTransferDown} size="sm" />
                        </div>
                    </div>
                </div> */}
                <DataTableHeader title={'Job Uploaded'} data={data} />
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

export default Jobs