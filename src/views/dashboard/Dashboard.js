import React from 'react'
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { CCol, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CRow, CWidgetStatsA } from '@coreui/react';
import DataTable from 'react-data-table-component';
import { DataTableCustomStyles } from '../../styles';
import { CSVLink } from 'react-csv'
import DataTableHeader from '../../components/common/DataTableHeader';
import DataTableHeaderWithAdd from '../../components/common/DataTableHeaderWithAdd';

const Dashboard = () => {

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

  return (
    <>
      <CRow className="mb-4" xs={{ gutter: 4 }}>
        <CCol sm={6} xl={4} xxl={3}>
          <CWidgetStatsA
            color="primary"
            style={{ height: "150px" }}
            value={
              <>
                26K{' '}
              </>
            }
            title="Total Booking"
            action={
              <CDropdown alignment="end">
                <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                  <CIcon icon={icon.cilOptions} />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            }
          />
        </CCol>

        <CCol sm={6} xl={4} xxl={3} >
          <CWidgetStatsA
            color="info"
            style={{ height: "150px" }}
            value={
              <>
                26K{' '}
              </>
            }
            title="Total Earning"
            action={
              <CDropdown alignment="end">
                <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                  <CIcon icon={icon.cilOptions} />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            }
          />
        </CCol>

        <CCol sm={6} xl={4} xxl={3} >
          <CWidgetStatsA
            color="warning"
            style={{ height: "150px" }}
            value={
              <>
                26K{' '}
              </>
            }
            title="Today Booking"
            action={
              <CDropdown alignment="end">
                <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                  <CIcon icon={icon.cilOptions} />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            }
          />
        </CCol>

        <CCol sm={6} xl={4} xxl={3} >
          <CWidgetStatsA
            color="danger"
            style={{ height: "150px" }}
            value={
              <>
                26K{' '}
              </>
            }
            title="Rejected"
            action={
              <CDropdown alignment="end">
                <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                  <CIcon icon={icon.cilOptions} />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            }
          />
        </CCol>
      </CRow>

      <div className='mb-4 p' style={{ padding: "20px", backgroundColor: "#fff" }}>
        <DataTableHeader title={'Recent User'} data={userData} />
        <DataTable
          columns={userColumns}
          data={userData}
          pagination
          customStyles={DataTableCustomStyles}
        />
      </div>

      <div className='mb-4 p' style={{ padding: "20px", backgroundColor: "#fff" }}>
        <DataTableHeaderWithAdd title={'Recent Partner'} data={partnerData} url={'partner'}/>
        <DataTable
          columns={partnerColumns}
          data={partnerData}
          pagination
          customStyles={DataTableCustomStyles}
        />
      </div>
    </>
  )
}

export default Dashboard
