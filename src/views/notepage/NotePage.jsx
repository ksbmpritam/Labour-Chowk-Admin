import React from 'react'
import DataTable from 'react-data-table-component';

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


const NotePage = () => {
    return (
        <>
            <div className='divCards'>
                <div className='tablestart'>
                <label className="booking-label">Notifications</label>

                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    customStyles={dataTableCustomStyles}
                />
                </div>
            </div>
        </>
    )
}

export default NotePage
