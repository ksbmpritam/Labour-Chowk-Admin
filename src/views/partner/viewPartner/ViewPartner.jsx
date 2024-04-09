import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CCard, CCardBody, CCardHeader, CCol, CListGroup, CListGroupItem, CImage } from '@coreui/react';
import { CButton, CForm, CFormInput, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react';
import * as icon from '@coreui/icons';
import * as PartnerActions from '../../../redux/actions/partnerAction';
import { api_urls } from '../../../utils/apiUrls';
import { useParams } from 'react-router-dom';
import { formatTimestampToDateString } from '../../../utils/commonFunction';

const ViewPartner = () => {
  const dispatch = useDispatch()
  const { id: partnerId } = useParams()
  const { singlePartnerData: partnerData } = useSelector((state) => state?.partnerReducer);
  console.log("Single Partner Data :: ", partnerData)

  useEffect(function () {
    //! Dispatching API for Getting All partner
    dispatch(PartnerActions.getPartnerById({ labourID: partnerId }))
  }, []);

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

  const [editVisible, setEditVisible] = useState(false);
  const [front, setFront] = useState({ file: null, bytes: "" });
  const [back, setBack] = useState({ file: null, bytes: "" });
  const [imageUrl, setImageUrl] = useState('https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/11/2020_11$largeimg_1346769636.jpg');
  const [validated, setValidated] = useState(false)

  const handleEdit = (row) => {
    console.log("edit banner", row)
    // setSelectedEditRow(row);
    setEditVisible(true);
    // setBanner({ file: row?.banner })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      var formData = new FormData()
      console.log("Adhar Front:", front);
      console.log("Adhar Back:", back);

    }
    setValidated(true)
  };

  const handlefront = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFront({
        file: URL.createObjectURL(e.target.files[0]),
        bytes: e.target.files[0],
      });
    }
  };
  const handleback = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setBack({
        file: URL.createObjectURL(e.target.files[0]),
        bytes: e.target.files[0],
      });
    }
  };

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
                  {/* <div style={{ backgroundColor: "#2A9BAA", color: "#fff", fontWeight: "600", borderRadius: "5px", padding: "3px 10px", fontSize: "14px", cursor: "pointer", marginTop: " 10px", width: " 115px" }} onClick={() => handleEdit('https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/11/2020_11$largeimg_1346769636.jpg')}  >Edit Adharcard</div> */}
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
          <CCard>
            <CCardHeader style={{ backgroundColor: "#2A9BAA" }}>
              <div style={{ color: "#fff", fontWeight: "600" }}>My Previous Work</div>
            </CCardHeader>
            <CCardBody>
              <CRow className='justify-content-center justify-content-sm-start' xs={{ gutter: 3 }}>
                <CImage style={{ width: "150px" }} src={'https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1024%2C576&ssl=1'} alt="Profile" fluid />
                <CImage style={{ width: "150px" }} src={'https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1024%2C576&ssl=1'} alt="Profile" fluid />
                <CImage style={{ width: "150px" }} src={'https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1024%2C576&ssl=1'} alt="Profile" fluid />
                <CImage style={{ width: "150px" }} src={'https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1024%2C576&ssl=1'} alt="Profile" fluid />
                <CImage style={{ width: "150px" }} src={'https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1024%2C576&ssl=1'} alt="Profile" fluid />
                <CImage style={{ width: "150px" }} src={'https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1024%2C576&ssl=1'} alt="Profile" fluid />
                <CImage style={{ width: "150px" }} src={'https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1024%2C576&ssl=1'} alt="Profile" fluid />
                <CImage style={{ width: "150px" }} src={'https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1024%2C576&ssl=1'} alt="Profile" fluid />
                <CImage style={{ width: "150px" }} src={'https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1024%2C576&ssl=1'} alt="Profile" fluid />
                <CImage style={{ width: "150px" }} src={'https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1024%2C576&ssl=1'} alt="Profile" fluid />
                <CImage style={{ width: "150px" }} src={'https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1024%2C576&ssl=1'} alt="Profile" fluid />
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>


      {/* edit adhar Modal */}
      <CModal
        backdrop="static"
        visible={editVisible}
        onClose={() => setEditVisible(false)}
        aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader onClose={() => setEditVisible(false)}>
          <CModalTitle id="LiveDemoExampleLabel">Edit Adharcard</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm
            className="row g-3 needs-validation"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <CCol md={12}>
              <div>Adhar Front</div>
              <CRow className='align-items-center'>
                <CCol xs={2}>
                  <img src={imageUrl} alt="Adhar Front" style={{ width: '70px', height: '50px', }} />
                </CCol>
                <CCol xs={10}>
                  <CFormInput
                    type="file"
                    name="front"
                    id="validationCustom02"
                    required
                    feedbackValid="Looks good!"
                    feedbackInvalid="Please Provide Adhar Front Image "
                    aria-label="file example"
                    onChange={handlefront}
                  />
                </CCol>
              </CRow>
            </CCol>

            <CCol md={12}>
              <div>Adhar Back</div>
              <CRow className='align-items-center'>
                <CCol xs={2}>
                  <img src={imageUrl} alt="Adhar Front" style={{ width: '70px', height: '50px', }} />
                </CCol>
                <CCol xs={10}>
                  <CFormInput
                    type="file"
                    name="back"
                    id="validationCustom02"
                    required
                    feedbackValid="Looks good!"
                    feedbackInvalid="Please Provide Adhar Back Image "
                    aria-label="file example"
                    onChange={handleback}
                  />
                </CCol>
              </CRow>
            </CCol>

            <CCol xs={12}>
              <CButton type="submit" style={{ backgroundColor: "#2A9BAA", color: "#fff", fontSize: "14px", padding: "5px 10px" }}>
                Edit Partner
              </CButton>
            </CCol>
          </CForm>
        </CModalBody>
      </CModal>
    </>
  )
}

export default ViewPartner