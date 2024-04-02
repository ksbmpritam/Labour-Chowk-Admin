import CIcon from '@coreui/icons-react';
import React from 'react'
import DataTable from 'react-data-table-component';
import * as icon from '@coreui/icons';
import DataTableHeader from '../../components/common/DataTableHeader';

const Wallet = () => {

    const data = [
        {
            id: 1,
            user: "Pramod Mishra ",
            paymentType: "UPI ",
            Aamount: "50.00",
            createdat: "31-03-2024 7:54 AM",
        },
        {
            id: 2,
            user: "Ankita Lokhandey",
            paymentType: "Banking",
            Aamount: "50.00",
            createdat: "21-02-2024 10:34 AM",
        }
    ]

    const columns = [
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
            selector: row => row.Aamount,
        },
        {
            name: 'Created At',
            selector: row => row.createdat,
        },
    ];

    const dataTableCustomStyles = {
        cells: {
            style: {
                textAlign: "center",
                color: "rgba(0, 0, 0, 0.6)", whiteSpace: "nowrap",
            },
        },
        rows: {
            style: {
                minHeight: '65px',
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
                <DataTableHeader title={'Wallet'} data={data} />
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

export default Wallet