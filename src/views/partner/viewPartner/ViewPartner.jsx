import React, { useState } from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CListGroup, CListGroupItem, CImage } from '@coreui/react';
import { CButton, CForm, CFormInput, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react';
import * as icon from '@coreui/icons';

const ViewPartner = () => {
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



  const data = {
    id: 1,
    aadhar: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/800px-Aadhaar_Logo.svg.png",
    contact: "8757858745",
    email: "partnerone@gmail.com",
    name: "Partner One",
    profileImage: "/src/assets/images/avatars/8.jpg"
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
                  <div style={{ backgroundColor: "#212631", color: "#fff", fontWeight: "600", borderRadius: "5px", padding: "3px 10px", fontSize: "14px", cursor: "pointer", marginTop: " 10px", width: " 115px" }} onClick={() => handleEdit('https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/11/2020_11$largeimg_1346769636.jpg')}  >Edit Adharcard</div>
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
              <CButton type="submit" style={{ backgroundColor: "#212631", color: "#fff", fontSize: "14px", padding: "5px 10px" }}>
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