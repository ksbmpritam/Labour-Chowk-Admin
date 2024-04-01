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
      <CRow className="mb-4" xs={{ gutter: 4 }}>
        <CCol xs={6} xl={4} xxl={3}>
          <CWidgetStatsD
            className="mb-3"
            icon={<CIcon className="my-4 text-white" icon={icon.cilUser} height={40} />}
            style={{ '--cui-card-cap-bg': '#212631' }}
            values={[
              { title: <div>Total User</div>, value: '89K' },
              { title: <div>More Info</div>, value: <div style={{ cursor: "pointer" }} onClick={() => handleMoreInfo('Total User')}><CIcon className="text-black" icon={icon.cilArrowRight} /></div> },
            ]}
          />
        </CCol>

        <CCol xs={6} xl={4} xxl={3}>
          <CWidgetStatsD
            className="mb-3"
            icon={<CIcon className="my-4 text-white" icon={icon.cilUser} height={40} />}
            style={{ '--cui-card-cap-bg': '#212631' }}
            values={[
              { title: <div>Total Partner</div>, value: '89K' },
              { title: <div>More Info</div>, value: <div style={{ cursor: "pointer" }} onClick={() => handleMoreInfo('Total Partner')}><CIcon className="text-black" icon={icon.cilArrowRight} /></div> },
            ]}
          />
        </CCol>

        <CCol xs={6} xl={4} xxl={3}>
          <CWidgetStatsD
            className="mb-3"
            icon={<CIcon className="my-4 text-white" icon={icon.cilUser} height={40} />}
            style={{ '--cui-card-cap-bg': '#212631' }}
            values={[
              { title: <div>Total Earning</div>, value: '89K' },
              { title: <div>More Info</div>, value: <div style={{ cursor: "pointer" }} onClick={() => handleMoreInfo('Total Earning')}><CIcon className="text-black" icon={icon.cilArrowRight} /></div> },
            ]}
          />
        </CCol>

        <CCol xs={6} xl={4} xxl={3}>
          <CWidgetStatsD
            className="mb-3"
            icon={<CIcon className="my-4 text-white" icon={icon.cilUser} height={40} />}
            style={{ '--cui-card-cap-bg': '#212631' }}
            values={[
              { title: <div>Total Booking</div>, value: '89K' },
              { title: <div>More Info</div>, value: <div style={{ cursor: "pointer" }} onClick={() => handleMoreInfo('Total Booking')}><CIcon className="text-black" icon={icon.cilArrowRight} /></div> },
            ]}
          />
        </CCol>

        <CCol xs={6} xl={4} xxl={3}>
          <CWidgetStatsD
            className="mb-3"
            icon={<CIcon className="my-4 text-white" icon={icon.cilUser} height={40} />}
            style={{ '--cui-card-cap-bg': '#212631' }}
            values={[
              { title: <div>Total Rejected</div>, value: '89K' },
              { title: <div>More Info</div>, value: <div style={{ cursor: "pointer" }} onClick={() => handleMoreInfo('Total Rejected')}><CIcon className="text-black" icon={icon.cilArrowRight} /></div> },
            ]}
          />
        </CCol>
      </CRow>

      <CRow className='justify-content-between px-3 mb-4' xs={{ gutter: 4 }} >
        <CCol sm={5} className='bg-white p-3' style={{ borderRadius: "6px" }}>
          <CRow className='justify-content-center' xs={{ gutter: 4 }}>
            <div style={{ fontSize: "20px", fontWeight: "600" }}>Today Joining</div>
            <CChart
              type="doughnut"
              data={{
                labels: ['User', 'Partner'],
                datasets: [
                  {
                    backgroundColor: ['#212631', '#a1a1a1'],
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

        <CCol sm={5} className='bg-white p-3' style={{ borderRadius: "6px" }}>
          <CRow className='justify-content-center' xs={{ gutter: 4 }} >
            <div style={{ fontSize: "20px", fontWeight: "600" }}>Total Joining</div>
            <CChart
              type="doughnut"
              data={{
                labels: ['User', 'Partner'],
                datasets: [
                  {
                    backgroundColor: ['#212631', '#a1a1a1'],
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
