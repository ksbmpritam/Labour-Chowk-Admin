import React from 'react'
import DataTable from 'react-data-table-component';
import * as icon from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import DataTableHeader from '../../components/common/DataTableHeader';

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
             <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                {/* <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", }}>
                    <div style={{ fontSize: "20px", fontWeight: "600" }}>Booking</div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                            <div style={{ fontSize: "16px", fontWeight: "600" }}>Download</div>
                            <CIcon icon={icon.cilDataTransferDown} size="sm" />
                        </div>
                    </div>
                </div> */}
                <DataTableHeader title={'Booking'} data={data} />
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

export default Booking