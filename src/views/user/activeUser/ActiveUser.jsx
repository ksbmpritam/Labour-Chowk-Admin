import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CIcon from '@coreui/icons-react';
import DataTable from 'react-data-table-component';
import * as icon from '@coreui/icons';
import { DataTableCustomStyles } from '../../../styles';
import { useNavigate } from 'react-router-dom';
import DataTableHeader from '../../../components/common/DataTableHeader';
import * as UserActions from '../../../redux/actions/userAction';

const ActiveUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { activeUserData: userData } = useSelector((state) => state?.userReducer);
    console.log("Active User Data :: ", userData);

    const userColumns = [
        { name: 'S.No.', selector: row => userData.indexOf(row) + 1, style: { backGroundColor: "#000", paddingLeft: "20px" } },
        { name: 'Name', selector: row => row.userName },
        { name: 'Email', selector: row => row.email },
        {
            name: 'Profile Image',
            cell: row => <img src={row.profileImage} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />,
        },
        {
            name: 'Aadhar',
            cell: row => <img src={row.aadhar} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />,
        },
        { name: 'Mobile', selector: row => row.phoneNo },
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
            {
                userData &&
                <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                    <DataTableHeader title={'Active Users'} data={userData} />
                    <DataTable
                        columns={userColumns}
                        data={userData}
                        pagination
                        customStyles={DataTableCustomStyles}
                        paginationPerPage={5}
                        paginationRowsPerPageOptions={[5, 10, 15, 20]}
                        paginationComponentOptions={{ rowsPerPageText: 'Rows Per Page :' }}
                    />
                </div>
            }
        </>
    )
}

export default ActiveUser