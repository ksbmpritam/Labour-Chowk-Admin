import React from 'react'
import DataTable from 'react-data-table-component';
import * as icon from '@coreui/icons';
import CIcon from '@coreui/icons-react';

const columns = [
    {
        name: 'Description',
        selector: row => row.description,
    },
    {
        name: 'Sent to',
        selector: row => row.Sentto,
    },
    
];

const data = [
    {
        id: 1,
        description: 'This page was last edited on 9 January 2024, at 23:54 (UTC).',
        Sentto: 'All'
    },
    {
        id: 1,
        description: 'This page was last edited on 9 January 2024, at 23:54 (UTC).',
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


const Notification = () => {
    return (
        <>
           <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", }}>
                    <div style={{ fontSize: "20px", fontWeight: "600" }}>Notifications</div>
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

export default Notification
