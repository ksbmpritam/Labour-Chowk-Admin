
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
import * as UserActions from '../../../redux/actions/userAction';
import { formatTimestampToDateString } from '../../../utils/commonFunction';

const ViewUser = () => {
  const dispatch = useDispatch()
  const { id: userId } = useParams()
  const { singleUserData: userData, userJobData: MyJobData } = useSelector((state) => state?.userReducer);
  console.log("Single User Data :: ", userData)

  const [editVisible, setEditVisible] = useState(false);
  const [front, setFront] = useState({ file: null, bytes: "" });
  const [back, setBack] = useState({ file: null, bytes: "" });
  const [imageUrl, setImageUrl] = useState('https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/11/2020_11$largeimg_1346769636.jpg');
  const [validated, setValidated] = useState(false)

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

  //* My Job DataTable Columns
  const MyJobColumns = [
    {
      name: 'S.No',
      selector: (row, index) => index + 1,
    },
    {
      name: 'Job Title',
      selector: row => row.job,
    },
    {
      name: 'Skill',
      selector: row => row.name,
    },
    {
      name: 'Description',
      selector: row => row.name,
    },
    {
      name: 'Created Date',
      selector: row => row.status,
    },
    {
      name: 'Status',
      selector: row => row.status,
    },
    {
      name: 'Action',
      cell: row => <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
        <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" style={{ cursor: "pointer" }} icon={icon.cilTouchApp} size="sm" />
      </div>,
    },
  ];

  useEffect(function () {
    //! Dispatching API for Getting All User
    dispatch(UserActions.getUserById({ userID: userId }))
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
                    <CImage src={api_urls + userData?.aadharFront} alt="Profile" fluid style={{ height: "150px" }} />
                    <CImage src={api_urls + userData?.aadharBack} alt="Profile" fluid style={{ height: "150px" }} />

                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start" }}>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <div style={{ color: "#000", fontWeight: "600" }}>Kyc Status : </div>
                        <div style={{ textTransform: "capitalize" }}>{userData?.isVerified?.toLowerCase()}</div>
                        <div style={{ backgroundColor: "#2A9BAA", color: "#fff", fontWeight: "600", borderRadius: "5px", padding: "3px 10px", fontSize: "14px", cursor: "pointer" }}>Change Status</div>
                      </div>
                    </div>

                    {/* <div style={{ backgroundColor: "#2A9BAA", color: "#fff", fontWeight: "600", borderRadius: "5px", padding: "3px 10px", fontSize: "14px", cursor: "pointer", marginTop: " 10px", width: " 115px" }} onClick={() => handleEdit('https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/11/2020_11$largeimg_1346769636.jpg')}  >Edit Adharcard</div> */}

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
                      <CImage src={api_urls + userData?.profile} alt="Profile" fluid style={{ height: "150px" }} />
                    </CCol>

                    <CCol xs='8' sm='12'>
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start", marginTop: "20px" }}>
                        <div style={{ display: "flex", gap: "10px" }}>
                          <div style={{ color: "#000", fontWeight: "600" }}>Status : </div>
                          <div style={{ textTransform: "capitalize" }}>{userData?.isActive?.toLowerCase()}</div>
                        </div>
                        <div style={{ backgroundColor: "#2A9BAA", color: "#fff", fontWeight: "600", borderRadius: "5px", padding: "3px 10px", fontSize: "14px", cursor: "pointer" }} onClick={() => handleActiveBannedStatus(userData?.isActive)}>Change Status</div>
                      </div>
                    </CCol>
                  </CRow>
                </CCol>

                <CCol xs='12' sm='9'>
                  <CListGroup flush className='mb-4'>
                    <CListGroupItem>ID : {userData?._id}</CListGroupItem>
                    <CListGroupItem style={{ textTransform: "capitalize" }}>Name : {userData?.userName}</CListGroupItem>
                    <CListGroupItem>Email : {userData?.email}</CListGroupItem>
                    <CListGroupItem>Contact : {userData?.phoneNo}</CListGroupItem>
                    <CListGroupItem>Joining Date : {formatTimestampToDateString(userData?.updatedAt)}</CListGroupItem>
                  </CListGroup>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12">
          <CCard style={{ padding: "20px", backgroundColor: "#fff" }}>
            <DataTableHeader title={'My Job'} data={MyJobData} />
            <DataTable
              columns={MyJobColumns}
              data={MyJobData}
              pagination
              customStyles={DataTableCustomStyles}
            />
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

export default ViewUser