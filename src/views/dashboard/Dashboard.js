import React from 'react'
import CIcon from '@coreui/icons-react';
import DataTable from 'react-data-table-component';
import * as icon from '@coreui/icons';
import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  const data = [
    {
      id: 1,
      name: "Partner One",
      email: "info@gmail.com",
      aadhar: 2222222,
      profileImage: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"
    },
    {
      id: 2,
      name: "Partner Two",
      email: "info@gmail.com",
      aadhar: 444444,
      profileImage: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg"
    }
  ]

  const columns = [
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
      name: 'Action',
      cell: row => <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
        <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Edit" icon={icon.cilPencil} size="sm" />
        <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Delete" icon={icon.cilDelete} size="sm" />
        <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Ban-Unban" icon={icon.cilBan} size="sm" />
        <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Verify" icon={icon.cilCheckCircle} size="sm" />
        <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" style={{ cursor: "pointer" }} onClick={() => handleView()} icon={icon.cilTouchApp} size="sm" />
      </div>,
      width: '180px'
    },
  ];

  const dataTableCustomStyles = {
    cells: {
      style: {
        // fontSize: '14px',
        // padding: "10px 0",
        textAlign: "center",
        color: "rgba(0, 0, 0, 0.6)", whiteSpace: "nowrap",
      },
    },
    rows: {
      style: {
        minHeight: '65px', // override the row height,
        backgroundColor: "#fff"
      },
    },
    headRow: {
      style: {
        whiteSpace: 'nowrap',
        fontSize: "14px",
        fontWeight: "600", color: "#fff",
        backgroundColor: "#212631"
      }
    }
  };

  const handleView = () => {
    console.log("Clicked")
  }

  return (
    <>
      <WidgetsDropdown className="mb-4" />
      <WidgetsBrand className="mb-4" withCharts />
      <div style={{ padding: "20px", backgroundColor: "#fff" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", }}>
          <div style={{ fontSize: "20px", fontWeight: "600" }}>Recent User</div>
          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
              <div style={{ fontSize: "16px", fontWeight: "600" }}>Download</div>
              <CIcon icon={icon.cilDataTransferDown} size="sm" />
            </div>
          </div>
        </div>
        <DataTable
          columns={columns}
          data={data}
          pagination
          customStyles={dataTableCustomStyles}
        />
      </div>
    </>
  )
}

export default Dashboard
