import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import DataTable from 'react-data-table-component';
import { DataTableCustomStyles } from '../../../styles';
import DataTableHeader from '../../../components/common/DataTableHeader';
import { api_urls } from '../../../utils/apiUrls';
import * as UserActions from '../../../redux/actions/userAction';
import MainLoader from '../../../components/loader/MainLoader';
import MainDataTable from '../../../components/common/MainDataTable';

const ActiveUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { activeUserData: userData } = useSelector((state) => state?.userReducer);
    console.log("Active User Data :: ", userData);

    //* Active User DataTable Columns
    const userColumns = [
        { name: 'S.No.', selector: row => userData.indexOf(row) + 1, style: { backGroundColor: "#000", paddingLeft: "20px" } },
        { name: 'Name', selector: row => row.userName },
        { name: 'Mobile', selector: row => row.phoneNo },
        { name: 'Email', selector: row => row.email },
        {
            name: 'Profile Image',
            cell: row => <img src={api_urls + row?.profile} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />,
        },
        {
            name: 'Aadhar',
            cell: row => <img src={api_urls + row?.aadharFront} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />,
        },
        {
            name: 'Kyc Status',
            selector: row => <div style={{ textTransform: "capitalize", color: row?.isVerified == 'verified' ? 'green' : 'red' }}>{row?.isVerified?.toLowerCase()}</div>,
        },
        {
            name: 'Status',
            selector: row => <div style={{ textTransform: "capitalize", color: row?.isActive == 'active' ? 'green' : 'red' }}>{row?.isActive?.toLowerCase()}</div>,
        },
        {
            name: 'Action',
            cell: row => <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" style={{ cursor: "pointer" }} onClick={() => navigate(`/user/${row?._id}`)} icon={icon.cilTouchApp} size="lg" />
            </div>,
        },
    ]

    useEffect(function () {
        //! Dispatching API for Getting Active user
        dispatch(UserActions.getActiveUser())
    }, []);

    return (
        <>
            <MainDataTable title={'Active Users'} columns={userColumns} data={userData} />
        </>
    )
}

export default ActiveUser