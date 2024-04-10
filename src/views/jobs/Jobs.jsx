import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { CButton, CCol, CForm, CModal, CModalBody, CModalHeader, CModalTitle, } from '@coreui/react';
import MainDataTable from '../../components/common/MainDataTable';
import * as JobActions from "../../redux/actions/jobAction";
import { formatTimestampToDateString } from '../../utils/commonFunction';

const Jobs = () => {
    const dispatch = useDispatch()
    const { allJobData: jobUploadData } = useSelector((state) => state?.jobReducer);
    console.log("All Job Data :: ", jobUploadData)

    const [singleBookingData, setSingleBookingData] = useState({});
    const [visibleSingleBookingModal, setvisibleSingleBookingModal] = useState(false);

    //* Handle View Bidding Modal 
    const handleViewBooking = (row) => {
        setSingleBookingData(row);
        setvisibleSingleBookingModal(true);
    };

    //* Job Uploaded DataTable Columns
    const jobUploadColumns = [
        { name: 'S.No.', selector: row => jobUploadData.indexOf(row) + 1, style: { backGroundColor: "#000", paddingLeft: "20px" } },
        {
            name: 'Title',
            selector: row => row.jobTitle,
        },
        {
            name: 'Description',
            selector: row => row.jobDescription,
            width: '180px'
        },
        {
            name: 'Created Date',
            selector: row => formatTimestampToDateString(row.createdAt),
        },
        {
            name: 'Status',
            selector: row => row.isActive,
        },
        {
            name: 'Action',
            cell: row => (
                <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
                    <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" style={{ cursor: "pointer" }} onClick={() => handleViewBooking(row)} icon={icon.cilTouchApp} size="sm" />
                </div>
            ),
        },
    ];

    useEffect(function () {
        //! Dispatching API for Getting Active partner
        dispatch(JobActions.getAllJobList())
    }, []);

    return (
        <>
            <MainDataTable title={'Job Uploaded'} columns={jobUploadColumns} data={jobUploadData} />

            <CModal
                alignment="center"
                visible={visibleSingleBookingModal}
                onClose={() => setvisibleSingleBookingModal(false)}
                aria-labelledby="ViewModal"
            >
                <CModalHeader>
                    <CModalTitle id="VerticallyCenteredExample">Bidding Detail</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm className="row g-3 needs-validation">
                        <CCol md={12}>
                            <p><span style={{ fontWeight: "600" }}>Job Title :</span> {singleBookingData?.jobId?.jobTitle} </p>
                        </CCol>
                        <CCol md={12}>
                            <p><span style={{ fontWeight: "600" }}>Price :</span> {singleBookingData?.amount} </p>
                        </CCol>

                        <CCol md={12}>
                            <p><span style={{ fontWeight: "600" }}>Created Date :</span> {formatTimestampToDateString(singleBookingData?.createdAt)}  </p>
                        </CCol>
                        <CCol md={12}>
                            <p><span style={{ fontWeight: "600" }}>Status :</span> {singleBookingData?.jobId?.isActive}  </p>
                        </CCol>

                        <CCol>
                            <CButton style={{ backgroundColor: "#212631", color: "#fff", fontSize: "14px", padding: "5px 15px", fontWeight: "600" }} onClick={() => setvisibleSingleBookingModal(false)}>
                                Close
                            </CButton>
                        </CCol>
                    </CForm>
                </CModalBody>
            </CModal>
        </>
    )
}

export default Jobs;
