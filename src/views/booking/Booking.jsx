import React from 'react'
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Partner', 
        selector: row => row.name,
        
        
    },
    {
        name: 'Job',
        selector: row => row.job,
       
    },
    {
        name: 'Status',
        selector: row => row.status,
        
    },
    

];

const data = [
    {
        id: 1,
        name: 'Beetlejuice',
        job: "This page was last edited on 9 January 2024, at 23:54 (UTC).",
        status: 'active'
    },
    {
        id: 1,
        name: 'Gautam',
        job: "This page was last edited on 9 January 2024, at 23:54 (UTC).",
        status: 'active'
    },
]
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
            // minHeight: '72px', // override the row height,
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


const Booking = () => {
    return (
        <>
            <div className='divCards'>
                <div className='tablestart'>
                <label className="booking-label">Booking</label>

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

export default Booking