import React from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow, CListGroup, CListGroupItem, CImage } from '@coreui/react';

const ViewPartner = () => {

  const data = {
    id: 1,
    aadhar: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/800px-Aadhaar_Logo.svg.png",
    contact: "8757858745",
    email: "partnerone@gmail.com",
    name: "Partner One",
    profileImage: "/src/assets/images/avatars/4.jpg"
  }

  const { name, id, contact, email, profileImage, aadharLogo } = data;


  return (
    <>
      <CRow xs={{ gutterY: 3 }}>
        <CCol xs="12" md="4" className='gap'>
          <CCard>
            <CCardHeader style={{ backgroundColor: "#212631" }}>
              <div style={{ color: "#fff", fontWeight: "600" }}>Aadhar Information</div>
            </CCardHeader>
            <CCardBody>
              <CImage src={profileImage} alt="Profile" fluid />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" md="8">
          <CCard>
            <CCardHeader style={{ backgroundColor: "#212631" }}>
              <div style={{ color: "#fff", fontWeight: "600" }}>Profile Information</div>
            </CCardHeader>
            <CCardBody>
              <CListGroup flush className='mb-4'>
                <CListGroupItem>ID : {id}</CListGroupItem>
                <CListGroupItem>Name : {name}</CListGroupItem>
                <CListGroupItem>Contact : {contact}</CListGroupItem>
                <CListGroupItem>Email : {email}</CListGroupItem>
              </CListGroup>
              <CImage src={profileImage} alt="Profile" fluid />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ViewPartner