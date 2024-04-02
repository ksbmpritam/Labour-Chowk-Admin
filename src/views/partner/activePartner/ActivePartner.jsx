import React, { useEffect } from 'react'
import CIcon from '@coreui/icons-react';
import DataTable from 'react-data-table-component';
import * as icon from '@coreui/icons';
import { DataTableCustomStyles } from '../../../styles';
import { useNavigate } from 'react-router-dom';
import DataTableHeader from '../../../components/common/DataTableHeader';
import pictureIcon from "../../../assets/images/avatars/4.jpg";
import axios from 'axios';

const ActivePartner = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const getpartner = async () => {
            let response = await axios.get('https://api.biovisuals.in/api/user/adminCategories')
            console.log("Response ::: ", response?.data)
        }
        getpartner()
    }, [])

    //! Partner Start
    const partnerData = [
        {
            id: 1,
            name: "Partner One",
            email: "partnerone@gmail.com",
            contact: "8757858745",
            status: "In Active",
            isverfied: " Verified",
            profileImage: pictureIcon,
            aadhar: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/800px-Aadhaar_Logo.svg.png",
        },
        {
            id: 2,
            name: "Partner Two",
            email: "partnertwo@gmail.com",
            contact: "8709858745",
            status: " Active",
            isverfied: "Not Verified",
            profileImage: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
            aadhar: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/800px-Aadhaar_Logo.svg.png",
        }
    ]

    const partnerColumns = [
        {
            name: 'S.No',
            selector: (row, index) => index + 1,
        },
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Profile Image',
            cell: row => <img src={row.profileImage} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />,
        },
        {
            name: 'Aadhar',
            cell: row => <img src={row.aadhar} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />,
        },
        {
            name: 'Mobile',
            selector: row => row.contact,
        },
        {
            name: 'Status',
            selector: row => row.status,
        },
        {
            name: 'Is Verified',
            selector: row => row.isverfied,
        },
        {
            name: 'Action',
            cell: row => <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" style={{ cursor: "pointer" }} onClick={() => handleView(row)} icon={icon.cilTouchApp} size="lg" />
            </div>,
        },
    ]
    //! partner End
    const handleView = (data) => {
        console.log("View Data ::: ", data)
        navigate(`/partner/${data?.id}`);
    }

    return (
        <>
            <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                <DataTableHeader title={'Active Partner'} data={partnerData} />
                <DataTable
                    columns={partnerColumns}
                    data={partnerData}
                    pagination
                    customStyles={DataTableCustomStyles}
                />
            </div>
        </>
    )
}

export default ActivePartner