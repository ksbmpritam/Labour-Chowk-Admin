import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CIcon from '@coreui/icons-react';
import DataTable from 'react-data-table-component';
import * as icon from '@coreui/icons';
import { DataTableCustomStyles } from '../../../styles';
import { useNavigate } from 'react-router-dom';
import DataTableHeader from '../../../components/common/DataTableHeader';
import * as UserActions from '../../../redux/actions/userAction';

const BannedUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { bannedUserData: userData } = useSelector((state) => state?.userReducer);
    console.log("Banned User Data :: ", userData);

    const userColumns = [
        {
            name: 'S.No',
            selector: (row, index) => index + 1,
        },
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Email',
            selector: row => row.email,
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
            name: 'Action',
            cell: row => <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" style={{ cursor: "pointer" }} onClick={() => handleView(row)} icon={icon.cilTouchApp} size="lg" />
            </div>,
        },
    ]

    //! User End
    const handleView = (data) => {
        console.log("View Data ::: ", data)
        navigate(`/user/${data?.id}`);
    }

    useEffect(function () {
        //! Dispatching API for Getting Banned user
        dispatch(UserActions.getBannedUser())
    }, []);

    return (
        <>
            {
                userData &&
                <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                    <DataTableHeader title={'Banned User'} data={userData} />
                    <DataTable
                        columns={userColumns}
                        data={userData}
                        pagination
                        customStyles={DataTableCustomStyles}
                    />
                </div>
            }
        </>
    )
}

export default BannedUser