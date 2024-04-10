import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { useNavigate } from 'react-router-dom';
import * as PartnerActions from '../../../redux/actions/partnerAction';
import { api_urls } from '../../../utils/apiUrls';
import MainDataTable from '../../../components/common/MainDataTable';

const ActivePartner = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { activePartnerData: partnerData } = useSelector((state) => state?.partnerReducer);
    console.log("Active Partner Data :: ", partnerData)

    //* Active Partner DataTable Columns
    const activePartnerColumns = [
        { name: 'S.No.', selector: row => partnerData.indexOf(row) + 1, style: { backGroundColor: "#000", paddingLeft: "20px" } },
        { name: 'Name', selector: row => row?.labourName, },
        { name: 'Mobile', selector: row => row?.phoneNo, },
        {
            name: 'Profile Image',
            cell: row => <img src={api_urls + row?.profileImage} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />,
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
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" style={{ cursor: "pointer" }} icon={icon.cilTouchApp} size="lg" onClick={() => navigate(`/partner/${row?._id}`)} />
            </div>,
        },
    ]

    useEffect(function () {
        //! Dispatching API for Getting Active partner
        dispatch(PartnerActions.getActivePartner())
    }, []);

    return (
        <>
            <MainDataTable title={'Active Partner'} columns={activePartnerColumns} data={partnerData} />
        </>
    )
}

export default ActivePartner