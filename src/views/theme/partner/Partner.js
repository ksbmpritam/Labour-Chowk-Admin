import React from 'react'
import DataTable from 'react-data-table-component';

// const gift_columns = [
//     { name: 'S.No.', selector: (row, index) => giftData.indexOf(row) + 1, style: { backGroundColor: "#000", paddingLeft: "20px" }, },
//     { name: 'Gift', selector: row => row?.gift, },
//     { name: 'Amount', selector: row => row.amount, },
//     { name: 'Icon', selector: row => <Avatar src={base_url + row.giftIcon} style={{ width: 50, height: 50 }} variant="rounded" />, center: true },
//     {
//         name: 'Action',
//         cell: row => <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
//             <Edit sx={{ cursor: "pointer" }} onClick={() => handleOpen(row)} />
//             <Delete sx={{ cursor: "pointer" }} onClick={() => dispatch(GiftActions.deleteGift({ gift_id: row?._id }))} />
//         </div>,
//         right: true
//     }
// ];

const columns = [
    {
        name: 'S.No',
        selector: row => row.title,
    },
    {
        name: 'Name',
        selector: row => row.title,
    },
    {
        name: 'Email',
        selector: row => row.year,
    },
    {
        name: 'Profile Image',
        selector: row => row.year,
    },
    {
        name: 'Aadhar',
        selector: row => row.year,
    },
    // {
    //     name: 'Action',
    //     cell: row => <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
    //         <Edit sx={{ cursor: "pointer" }} />
    //         <Delete sx={{ cursor: "pointer" }} />
    //     </div>,
    //     right: true
    // }
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]



const Partner = () => {
    return (
        <>
            <DataTable
                title='Partner'
                columns={columns}
                data={data}
                pagination
            />
        </>
    )
}

export default Partner