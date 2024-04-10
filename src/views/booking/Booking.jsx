import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as icon from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CButton, CCol, CForm, CModal, CModalBody, CModalHeader, CModalTitle, } from '@coreui/react';
import MainDataTable from '../../components/common/MainDataTable';
import * as BiddingActions from "../../redux/actions/biddingAction";
import { formatTimestampToDateString } from '../../utils/commonFunction';

const Booking = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { allBiddingData: biddingData } = useSelector((state) => state?.biddingReducer);
    console.log("All Bidding Data :: ", biddingData)

    const [singleBiddingData, setSingleBiddingData] = useState({});
    const [visibleSingleBiddingModal, setvisibleSingleBiddingModal] = useState(false);

    //* Handle View Bidding Modal 
    const handleViewBidding = (row) => {
        setSingleBiddingData(row);
        setvisibleSingleBiddingModal(true);
    };

    //* Bidding DataTable Columns
    const biddingColumns = [
        { name: 'S.No.', selector: row => biddingData.indexOf(row) + 1, style: { backGroundColor: "#000", paddingLeft: "20px" } },
        {
            name: 'Job Title',
            selector: row => row?.jobId?.jobTitle,
        },
        // {
        //   name: 'User',
        //   selector: row => row.name,
        // },
        {
            name: 'Price',
            selector: row => row.amount,
        },
        {
            name: 'Created Date',
            selector: row => formatTimestampToDateString(row.createdAt),
        },
        {
            name: 'Status',
            selector: row => row?.jobId?.isActive,
        },
        {
            name: 'Action',
            cell: row => <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" style={{ cursor: "pointer" }} icon={icon.cilTouchApp} size="sm" onClick={() => handleViewBidding(row)} />
            </div>,
        },
    ];

    useEffect(function () {
        //! Dispatching API for Getting Active partner
        dispatch(BiddingActions.getAllBiddingList())
    }, []);

    return (
        <>
            <MainDataTable title={'Bidding'} columns={biddingColumns} data={biddingData} />


            <CModal
                alignment="center"
                visible={visibleSingleBiddingModal}
                onClose={() => setvisibleSingleBiddingModal(false)}
                aria-labelledby="ViewModal"
            >
                <CModalHeader>
                    <CModalTitle id="VerticallyCenteredExample">Bidding Detail</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm className="row g-3 needs-validation">
                        <CCol md={12}>
                            <p><span style={{ fontWeight: "600" }}>Job Title :</span> {singleBiddingData?.jobId?.jobTitle} </p>
                        </CCol>
                        <CCol md={12}>
                            <p><span style={{ fontWeight: "600" }}>Price :</span> {singleBiddingData?.amount} </p>
                        </CCol>

                        <CCol md={12}>
                            <p><span style={{ fontWeight: "600" }}>Created Date :</span> {formatTimestampToDateString(singleBiddingData?.createdAt)}  </p>
                        </CCol>
                        <CCol md={12}>
                            <p><span style={{ fontWeight: "600" }}>Status :</span> {singleBiddingData?.jobId?.isActive}  </p>
                        </CCol>

                        <CCol>
                            <CButton style={{ backgroundColor: "#212631", color: "#fff", fontSize: "14px", padding: "5px 15px", fontWeight: "600" }} onClick={() => setvisibleSingleBiddingModal(false)}>
                                Close
                            </CButton>
                        </CCol>
                    </CForm>
                </CModalBody>
            </CModal>
        </>
    )
}

export default Booking