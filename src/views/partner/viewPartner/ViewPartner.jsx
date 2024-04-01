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
      <CRow xs={{ gutterY: 3 }} className='mb-4'>
        <CCol xs="12" md="4">
          <CRow xs={{ gutterY: 3 }}>
            <CCol xs='12'>
              <CCard>
                <CCardHeader style={{ backgroundColor: "#212631" }}>
                  <div style={{ color: "#fff", fontWeight: "600" }}>Aadhar Information</div>
                </CCardHeader>
                <CCardBody>
                  <CRow xs={{ gutterY: 3 }}>
                    <CImage src={'https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/11/2020_11$largeimg_1346769636.jpg'} alt="Profile" fluid style={{ height: "200px" }} />
                    {/* <CImage src={'https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/11/2020_11$largeimg_1346769636.jpg'} alt="Profile" fluid style={{ height: "200px" }} /> */}
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs='12'>
              <CCard>
                <CCardBody>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start" }}>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <div style={{ color: "#000", fontWeight: "600" }}>Status : </div>
                      <div>Active</div>
                    </div>

                    <div style={{ backgroundColor: "#212631", color: "#fff", fontWeight: "600", borderRadius: "5px", padding: "3px 10px", fontSize: "14px", cursor: "pointer" }}>Change Status</div>
                  </div>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
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
                <CListGroupItem>Joining Date : 20-12-202</CListGroupItem>
              </CListGroup>
              <CImage src={profileImage} alt="Profile" fluid />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12">
          <CCard>
            <CCardHeader style={{ backgroundColor: "#212631" }}>
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
    </>
  )
}

export default ViewPartner