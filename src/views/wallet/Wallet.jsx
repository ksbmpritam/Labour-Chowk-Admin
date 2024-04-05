import React from 'react'
import DataTable from 'react-data-table-component';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import DataTableHeader from '../../components/common/DataTableHeader';
import { DataTableCustomStyles } from '../../styles';

const Wallet = () => {

    const walletData = [
        {
            id: 1,
            user: "Pramod Mishra ",
            paymentType: "UPI ",
            Amount: "50.00",
            createdat: "31-03-2024 7:54 AM",
        },
        {
            id: 2,
            user: "Ankita Lokhandey",
            paymentType: "Banking",
            Amount: "50.00",
            createdat: "21-02-2024 10:34 AM",
        }
    ]

    const walletColumns = [
        {
            name: 'S.No',
            selector: (row, index) => index + 1,
        },
        {
            name: 'User',
            selector: row => row.user,
        },
        {
            name: 'Payment Type',
            selector: row => row.paymentType,
        },
        {
            name: 'Amount',
            selector: row => row.Amount,
        },
        {
            name: 'Created At',
            selector: row => row.createdat,
        },
    ];

    return (
        <>
            <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                <DataTableHeader title={'Wallet'} data={walletData} />
                <DataTable
                    columns={walletColumns}
                    data={walletData}
                    pagination
                    customStyles={DataTableCustomStyles}
                />
            </div>
        </>
    )
}

export default Wallet


