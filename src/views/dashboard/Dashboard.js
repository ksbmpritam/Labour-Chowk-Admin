import React from 'react'
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { CCol, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CRow, CWidgetStatsA, CWidgetStatsD } from '@coreui/react';
import DataTable from 'react-data-table-component';
import { DataTableCustomStyles } from '../../styles';
import DataTableHeader from '../../components/common/DataTableHeader';
import { useNavigate } from 'react-router-dom';
import { CChart, CChartLine } from '@coreui/react-chartjs';
import { getStyle } from '@coreui/utils';

const Dashboard = () => {
  const navigate = useNavigate()

  //! User Start
  const userData = [
    {
      id: 1,
      name: "User One",
      email: "userone@gmail.com",
      aadhar: 5425878,
      contact: "8757858745",
      profileImage: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"
    },
    {
      id: 2,
      name: "user Two",
      email: "usertwo@gmail.com",
      aadhar: 444444,
      contact: "8709858745",
      profileImage: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"
    }
  ]

  const userColumns = [
    {
      name: 'S.No',
      selector: (row, index) => index + 1,
    },
    {
      name: 'Name',
      selector: row => row.name,
    },
    {
      name: 'Email',
      selector: row => row.email,
    },
    {
      name: 'Profile Image',
      cell: row => <img src={row.profileImage} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />,
    },
    {
      name: 'Aadhar',
      selector: row => row.aadhar,
    },
    {
      name: 'Mobile',
      selector: row => row.contact,
    },
  ]
  //! User End

  //! Partner Start
  const partnerData = [
    {
      id: 1,
      name: "Partner One",
      email: "partnerone@gmail.com",
      aadhar: 5425878,
      contact: "8757858745",
      profileImage: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"
    },
    {
      id: 2,
      name: "Partner Two",
      email: "partnertwo@gmail.com",
      aadhar: 444444,
      contact: "8709858745",
      profileImage: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"
    }
  ]

  const partnerColumns = [
    {
      name: 'S.No',
      selector: (row, index) => index + 1,
    },
    {
      name: 'Name',
      selector: row => row.name,
    },
    {
      name: 'Email',
      selector: row => row.email,
    },
    {
      name: 'Profile Image',
      cell: row => <img src={row.profileImage} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />,
    },
    {
      name: 'Aadhar',
      selector: row => row.aadhar,
    },
    {
      name: 'Mobile',
      selector: row => row.contact,
    },
  ]
  //! partner End

  const handleMoreInfo = (data) => {
    if (data == 'Total User') {
      console.log("Total Booking Clicked")
      navigate('/all-user')
    }
    if (data == 'Total Partner') {
      console.log("Total Booking Clicked")
      navigate('/all-partner')
    }
  }

  return (
    <>
      <CRow xs={{ gutter: 4 }}>
        <CCol className=" mb-4" xs={6} xl={3} xxl={3}>
          <div className="card card-dashboard p-2 position-relative" style={{
            backgroundColor: '#00BCD4',
            border: '1px solid #00BCD4',
            boxShadow: '0 0 10px 5px rgba(255, 255, 255, 0.5)',
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.5) 5%, transparent 10%)',
            backgroundSize: '290px 550px', // Adjust size as needed
            // backgroundRepeat: 'no-repeat',
            transition: 'transform 0.3s ease-in-out',
          }}>
            <CRow className="" xs={{ gutter: 1 }}>
              <CCol xs={6} xl={6} xxl={6}>
                <div style={{ color: "white" }}>
                  <h4> 85k </h4>
                  <p> Total Users</p>

                </div>
              </CCol>
              <CCol xs={6} xl={6} xxl={6}>
                <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                  <CIcon className="text-white " icon={icon.cilUser} size="3xl" />
                </div>
              </CCol>
            </CRow>
            <div style={{ backgroundColor: 'white', padding: '4px', borderRadius: "4px", width: '75px', height: '30px', boxShadow: '0 0 10px 5px rgba(128, 128, 128, 0.1)' }}>
              <h6 style={{ cursor: "pointer" }} onClick={() => handleMoreInfo('Total User')}> View All </h6>
            </div>
          </div>

        </CCol>

        <CCol className=" mb-4" xs={6} xl={3} xxl={3}>
          <div className="card card-dashboard p-2 position-relative" style={{
            backgroundColor: '#b11f67',
            border: '1px solid #b11f67',
            boxShadow: '0 0 10px 5px rgba(255, 255, 255, 0.5)',
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.5) 5%, transparent 10%)',
            backgroundSize: '290px 550px', // Adjust size as needed
            // backgroundRepeat: 'no-repeat',
            transition: 'transform 0.3s ease-in-out',
          }}>

            <CRow className="" xs={{ gutter: 1 }}>
              <CCol xs={6} xl={6} xxl={6}>
                <div style={{ color: "white" }}>
                  <h4> 85k </h4>
                  <p> Total Partners</p>

                </div>
              </CCol>
              <CCol xs={6} xl={6} xxl={6}>
                <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                  {/* <CIcon className="text-white " icon={icon.cilUser} size="3xl" /> */}
                  <CIcon className="text-white " icon={icon.cilStar} size="3xl" />
                </div>
              </CCol>
            </CRow>
            <div style={{ backgroundColor: 'white', padding: '4px', borderRadius: "4px", width: '75px', height: '30px', boxShadow: '0 0 10px 5px rgba(128, 128, 128, 0.1)' }}>
              <h6 style={{ cursor: "pointer" }} onClick={() => handleMoreInfo('Total Partner')}> View All </h6>
            </div>
          </div>

        </CCol>

        <CCol className=" mb-4" xs={6} xl={3} xxl={3}>
          <div className="card card-dashboard p-2 position-relative" style={{
            backgroundColor: '#2A9BAA',
            border: '1px solid #2A9BAA',
            boxShadow: '0 0 10px 5px rgba(255, 255, 255, 0.5)',
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.5) 5%, transparent 8%)',
            backgroundSize: '290px 550px', // Adjust size as needed
            // backgroundRepeat: 'no-repeat',
            transition: 'transform 0.3s ease-in-out',
          }}>
            <CRow className="" xs={{ gutter: 1 }}>
              <CCol xs={6} xl={6} xxl={6}>
                <div style={{ color: "white" }}>
                  <h4> 85k </h4>
                  <p> Total Rejections </p>

                </div>
              </CCol>
              <CCol xs={6} xl={6} xxl={6}>
                <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                  <CIcon className="text-white " icon={icon.cilMeh} size="3xl" />
                </div>
              </CCol>
            </CRow>
            <div style={{ backgroundColor: 'white', padding: '4px', borderRadius: "4px", width: '75px', height: '30px', boxShadow: '0 0 10px 5px rgba(128, 128, 128, 0.1)' }}>
              <h6 style={{ cursor: "pointer" }} onClick={() => handleMoreInfo('Total Partner')}> View All </h6>
            </div>
          </div>

        </CCol>

        <CCol className=" mb-4" xs={6} xl={3} xxl={3}>
          <div className="card card-dashboard p-2 position-relative" style={{
            backgroundColor: '#D48300',
            border: '1px solid #D48300',
            boxShadow: '0 0 10px 5px rgba(255, 255, 255, 0.5)',
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.5) 5%, transparent 8%)',
            backgroundSize: '290px 550px', // Adjust size as needed
            // backgroundRepeat: 'no-repeat',
            transition: 'transform 0.3s ease-in-out',
          }}>
            <CRow className="" xs={{ gutter: 1 }}>
              <CCol xs={6} xl={6} xxl={6}>
                <div style={{ color: "white" }}>
                  <h4> 85k </h4>
                  <p> Total Booking </p>

                </div>
              </CCol>
              <CCol xs={6} xl={6} xxl={6}>
                <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                  <CIcon className="text-white " icon={icon.cilBookmark} size="3xl" />
                </div>
              </CCol>
            </CRow>
            <div style={{ backgroundColor: 'white', padding: '4px', borderRadius: "4px", width: '75px', height: '30px', boxShadow: '0 0 10px 5px rgba(128, 128, 128, 0.1)' }}>
              <h6 style={{ cursor: "pointer" }} onClick={() => handleMoreInfo('Total Partner')}> View All </h6>
            </div>
          </div>

        </CCol>
      </CRow>

      <CRow className='justify-content-center mb-5' xs={{ gutter: 4 }}>
        <div style={{ fontSize: "20px", fontWeight: "600" }}>Yearly Earnings</div>
        <CChart
          type="bar"
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
              {
                label: 'Earnings',
                backgroundColor: '#3D24FF',
                data: [1000, 1500, 2000, 1800, 2200, 2500, 2300, 2600, 2800, 3000, 3200, 3500], // Sample earnings data for each month
                barThickness: 20,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                labels: {
                  color: getStyle('--cui-body-color'),
                }
              }
            },
          }}
          style={{ width: "800px", height: "400px" }} // Adjust width and height as needed
        />
      </CRow>

      <CRow className='justify-content-between px-3 mb-4' xs={{ gutter: 2 }} >
        <CCol xs={4} xl={4} xxl={4} className='bg-white p-3' style={{ borderRadius: "6px" }}>
          <CRow className='justify-content-center' xl={{ gutter: 4 }}>
            <div style={{ fontSize: "20px", fontWeight: "600" }}>Today's Joining</div>
            <CChart
              type="doughnut"
              data={{
                labels: ['User', 'Partner'],
                datasets: [
                  {
                    backgroundColor: ['#6C5CE7', '#FFEAA7'],
                    data: [40, 20],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    labels: {
                      color: getStyle('--cui-body-color'),
                    }
                  }
                },
              }}
              style={{ width: "350px" }}
            />
          </CRow>
        </CCol>

        <CCol xs={4} xl={4} xxl={4} className='bg-white p-3' style={{ borderRadius: "6px" }}>
          <CRow className='justify-content-center' xl={{ gutter: 4 }} >
            <div style={{ fontSize: "20px", fontWeight: "600" }}>Total Joining</div>
            <CChart
              type="doughnut"
              data={{
                labels: ['User', 'Partner'],
                datasets: [
                  {
                    backgroundColor: ['#FFA62B', '#FF7675'],
                    data: [40, 20],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    labels: {
                      color: getStyle('--cui-body-color'),
                    }
                  }
                },
              }}
              style={{ width: "350px" }}
            />
          </CRow>



        </CCol>

        <CCol xs={4} xl={4} xxl={4} className='bg-white p-3' style={{ borderRadius: "6px" }}>
          <CRow className='justify-content-center' xl={{ gutter: 4 }} >
            <div style={{ fontSize: "20px", fontWeight: "600" }}>Today's Earning</div>
            <CChart
              type="doughnut"
              data={{
                labels: ['UPI', 'Net Banking', 'Rejected'],
                datasets: [
                  {
                    backgroundColor: ['#D980FA', '#FF7675', "#FFA62B"],
                    data: [40, 10, 10],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    labels: {
                      color: getStyle('--cui-body-color'),
                    }
                  }
                },
              }}
              style={{ width: "350px" }}
            />
          </CRow>



        </CCol>



      </CRow>

      {/* <div className='mb-4 p' style={{ padding: "20px", backgroundColor: "#fff" }}>
        <DataTableHeader title={'Recent User'} data={userData} />
        <DataTable
          columns={userColumns}
          data={userData}
          pagination
          customStyles={DataTableCustomStyles}
        />
      </div>

      <div className='mb-4 p' style={{ padding: "20px", backgroundColor: "#fff" }}>
        <DataTableHeader title={'Recent Partner'} data={partnerData} />
        <DataTable
          columns={partnerColumns}
          data={partnerData}
          pagination
          customStyles={DataTableCustomStyles}
        />
      </div> */}
    </>
  )
}

export default Dashboard
