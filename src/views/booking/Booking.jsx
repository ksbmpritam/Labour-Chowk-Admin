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
        name: 'Job Title',
        selector: row => row.job,
    },
    {
        name: 'Partner',
        selector: row => row.name,
    },
    {
        name: 'Price',
        selector: row => row.name,
    },
    {
        name: 'Created Date',
        selector: row => row.status,
    },
    {
        name: 'Status',
        selector: row => row.status,
    },
    {
        name: 'Action',
        cell: row => <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
            <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" style={{ cursor: "pointer" }} icon={icon.cilTouchApp} size="sm" />
        </div>,
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

                <DataTableHeader title={'Bidding'} data={bookingData} />
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