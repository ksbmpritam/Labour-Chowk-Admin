import React from 'react'
import DataTable from 'react-data-table-component';
import * as icon from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import DataTableHeader from '../../components/common/DataTableHeader';
import { DataTableCustomStyles } from '../../styles';

const bookingColumns = [
    {
        name: 'S.No',
        selector: (row, index) => index + 1,
    },
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

const bookingData = [
    {
        id: 1,
        name: 'Beetlejuice',
        job: "This page was last edited on 9 January 2024, at 23:54 (UTC).",
        status: 'active'
    },
    {
        id: 2,
        name: 'Gautam',
        job: "This page was last edited on 9 January 2024, at 23:54 (UTC).",
        status: 'active'
    },
]

const Booking = () => {
    return (
        <>
            <div style={{ padding: "20px", backgroundColor: "#fff" }}>

                <DataTableHeader title={'Booking'} data={bookingData} />
                <DataTable
                    columns={bookingColumns}
                    data={bookingData}
                    pagination
                    customStyles={DataTableCustomStyles}
                />
            </div>
        </>
    )
}

export default Booking