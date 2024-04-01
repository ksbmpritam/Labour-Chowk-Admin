import React from 'react'
import CIcon from '@coreui/icons-react';
import DataTable from 'react-data-table-component';
import * as icon from '@coreui/icons';
import { DataTableCustomStyles } from '../../../styles';
import { useNavigate } from 'react-router-dom';
import DataTableHeader from '../../../components/common/DataTableHeader';
import pictureIcon from "../../../assets/images/avatars/4.jpg";

const BannedUser = () => {

  const navigate = useNavigate();

  //! Partner Start
  const userData = [
      {
          id: 1,
          name: "User One",
          email: "userone@gmail.com",
          contact: "8757858745",
          profileImage: pictureIcon,
          aadhar: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/800px-Aadhaar_Logo.svg.png",
      },
      {
          id: 2,
          name: "User Two",
          email: "usertwo@gmail.com",
          contact: "8709858745",
          profileImage: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
          aadhar: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/800px-Aadhaar_Logo.svg.png",
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
          cell: row => <img src={row.aadhar} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />,
      },
      {
          name: 'Mobile',
          selector: row => row.contact,
      },
      {
          name: 'Action',
          cell: row => <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
              <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" style={{ cursor: "pointer" }} onClick={() => handleView(row)} icon={icon.cilTouchApp} size="sm" />
          </div>,
      },
  ]
  //! partner End
  const handleView = (data) => {
      console.log("View Data ::: ", data)
      navigate(`/user/${data?.id}`);
  }

  return (
    <>
    <div style={{ padding: "20px", backgroundColor: "#fff" }}>
        <DataTableHeader title={'Banned User'} data={userData} />
        <DataTable
            columns={userColumns}
            data={userData}
            pagination
            customStyles={DataTableCustomStyles}
        />
    </div>
</>
  )
}

export default BannedUser