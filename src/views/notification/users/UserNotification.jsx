import React from 'react'
import DataTable from 'react-data-table-component';
import * as icon from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import DataTableHeaderWithAdd from '../../../components/common/DataTableHeaderWithAdd';

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


const UserNotification = () => {
    return (
        <>
           <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                <DataTableHeaderWithAdd title={'User Notifications'} data={data} url={'addBanner'}/>
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

export default UserNotification
