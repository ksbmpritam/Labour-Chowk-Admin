import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { CCard, CCardBody, CCardHeader, CCol, CListGroup, CListGroupItem, CImage, CRow, CButton, CForm, CFormInput, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, } from '@coreui/react';
import DataTable from 'react-data-table-component';
import { DataTableCustomStyles } from '../../../styles';
import DataTableHeader from '../../../components/common/DataTableHeader';
import { api_urls } from '../../../utils/apiUrls';
import * as PartnerActions from '../../../redux/actions/partnerAction';
import { formatTimestampToDateString } from '../../../utils/commonFunction';

const ViewPartner = () => {
  const dispatch = useDispatch()
  const { id: partnerId } = useParams()
  const { singlePartnerData: partnerData, partnerWorkData: myPreviousWorkData, partnerBiddingData: MyBiddingData } = useSelector((state) => state?.partnerReducer);
  console.log("Single Partner Data :: ", partnerData)

  //* My Previous Work DataTable Columns
  const myPreviousWorkColumns = [
    { name: 'S.No.', selector: row => myPreviousWorkData.indexOf(row) + 1, style: { backGroundColor: "#000", paddingLeft: "20px" } },
    {
      name: 'Title',
      selector: row => row.title,
    },
    {
      name: 'Description',
      selector: row => row.description,
    },
    {
      name: 'Image',
      cell: row => <img src={api_urls + row.images} alt="Banner" style={{ width: '50px', height: '50px' }} onClick={() => handleView(row)} />,
    },
    {
      name: 'Date',
      selector: row => formatTimestampToDateString(row.createdAt),
    },
    {
      name: 'Action',
      cell: row => (
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
          <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" style={{ cursor: "pointer" }} icon={icon.cilTouchApp} size="sm" />
        </div>
      ),
    },
  ];

  //* My Bidding DataTable Columns
  const MyBiddingColumns = [
    { name: 'S.No.', selector: row => MyBiddingData.indexOf(row) + 1, style: { backGroundColor: "#000", paddingLeft: "20px" } },
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
        <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" style={{ cursor: "pointer" }} icon={icon.cilTouchApp} size="sm" />
      </div>,
    },
  ];

  //! Handle Kyc Status : Partner 
  const handleKycStatus = (status) => {
    console.log("Kyc Status", status)

    if (status === 'verified') {
      console.log("verified")
      dispatch(PartnerActions.changePartnerKycStatus({ labourID: partnerId, isVerified: "unVerified" }))
    }
    if (status === 'unVerified') {
      console.log("unVerified")
      dispatch(PartnerActions.changePartnerKycStatus({ labourID: partnerId, isVerified: "verified" }))
    }
  }

  //! Handle Status - Active/Banned : Partner
  const handleActiveBannedStatus = (status) => {
    console.log("Active-Banned", status)
    if (status === 'active') {
      console.log("active")
      dispatch(PartnerActions.changePartnerStatus({ labourID: partnerId, isActive: "inActive" }))
    }
    if (status === 'inActive') {
      console.log("inActive")
      dispatch(PartnerActions.changePartnerStatus({ labourID: partnerId, isActive: "active" }))
    }
  }

  useEffect(function () {
    //! Dispatching API for Getting All partner
    dispatch(PartnerActions.getPartnerById({ labourID: partnerId }))
    dispatch(PartnerActions.getPartnerWorkByPartnerId({ labourID: partnerId }))
    dispatch(PartnerActions.getBiddingListByPartnerId({ labourID: partnerId }))
  }, []);

  return (
    <>
      <CRow xs={{ gutterY: 3 }} className='mb-4'>
        <CCol xs="12" md="4">
          <CRow xs={{ gutterY: 3 }}>
            <CCol xs='12'>
              <CCard>
                <CCardHeader style={{ backgroundColor: "#2A9BAA" }}>
                  <div style={{ color: "#fff", fontWeight: "600" }}>Aadhar Information</div>
                </CCardHeader>
                <CCardBody>
                  <CRow xs={{ gutterY: 3 }}>
                    <CImage src={api_urls + partnerData?.aadharFront} alt="Profile" fluid style={{ height: "150px" }} />
                    <CImage src={api_urls + partnerData?.aadharBack} alt="Profile" fluid style={{ height: "150px" }} />

                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start" }}>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <div style={{ color: "#000", fontWeight: "600" }}>Kyc Status : </div>
                        <div style={{ textTransform: "capitalize", color: partnerData?.isVerified == 'verified' ? 'green' : 'red' }}>{partnerData?.isVerified?.toLowerCase()}</div>

                        <div style={{ backgroundColor: "#2A9BAA", color: "#fff", fontWeight: "600", borderRadius: "5px", padding: "3px 10px", fontSize: "14px", cursor: "pointer" }} onClick={() => handleKycStatus(partnerData?.isVerified)}>Change Status</div>
                      </div>
                    </div>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCol>

        <CCol xs="12" md="8">
          <CCard>
            <CCardHeader style={{ backgroundColor: "#2A9BAA" }}>
              <div style={{ color: "#fff", fontWeight: "600" }}>Profile Information</div>
            </CCardHeader>
            <CCardBody>
              <CRow xs={{ gutterY: 4 }}>
                <CCol xs='12' sm='3'>
                  <CRow className='align-items-end'>
                    <CCol xs='4' sm='12'>
                      <CImage src={api_urls + partnerData?.profileImage} alt="Profile" fluid style={{ height: "150px" }} />
                    </CCol>

                    <CCol xs='8' sm='12'>
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start", marginTop: "20px" }}>
                        <div style={{ display: "flex", gap: "10px" }}>
                          <div style={{ color: "#000", fontWeight: "600" }}>Status : </div>
                          <div style={{ textTransform: "capitalize", color: partnerData?.isActive == 'active' ? 'green' : 'red' }}>{partnerData?.isActive?.toLowerCase()}</div>
                        </div>
                        <div style={{ backgroundColor: "#2A9BAA", color: "#fff", fontWeight: "600", borderRadius: "5px", padding: "3px 10px", fontSize: "14px", cursor: "pointer" }} onClick={() => handleActiveBannedStatus(partnerData?.isActive)}>Change Status</div>
                      </div>
                    </CCol>
                  </CRow>
                </CCol>

                <CCol xs='12' sm='9'>
                  <CListGroup flush className='mb-4'>
                    <CListGroupItem>ID : {partnerData?._id}</CListGroupItem>
                    <CListGroupItem style={{ textTransform: "capitalize" }}>Name : {partnerData?.labourName}</CListGroupItem>
                    <CListGroupItem>Contact : {partnerData?.phoneNo}</CListGroupItem>
                    <CListGroupItem>Joining Date : {formatTimestampToDateString(partnerData?.updatedAt)}</CListGroupItem>
                  </CListGroup>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12">
          <CCard style={{ padding: "20px", backgroundColor: "#fff" }}>
            <DataTableHeader title={'My Previous Work'} data={MyBiddingData} />
            <DataTable
              columns={myPreviousWorkColumns}
              data={myPreviousWorkData}
              pagination
              customStyles={DataTableCustomStyles}
              paginationPerPage={5}
              paginationRowsPerPageOptions={[5, 10, 15, 20]}
              paginationComponentOptions={{ rowsPerPageText: 'Rows Per Page :' }}
            />
          </CCard>
        </CCol>

        <CCol xs="12">
          <CCard style={{ padding: "20px", backgroundColor: "#fff" }}>
            <DataTableHeader title={'My Bidding'} data={MyBiddingData} />
            <DataTable
              columns={MyBiddingColumns}
              data={MyBiddingData}
              pagination
              customStyles={DataTableCustomStyles}
              paginationPerPage={5}
              paginationRowsPerPageOptions={[5, 10, 15, 20]}
              paginationComponentOptions={{ rowsPerPageText: 'Rows Per Page :' }}
            />
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ViewPartner