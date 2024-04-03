import React from 'react'
import { CSVLink } from 'react-csv'
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { useNavigate } from 'react-router-dom';

const DataTableButton = ({ title, url }) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/${url}`);
  }

  // backgroundColor: "#212631"
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", }}>
        <div style={{ fontSize: "20px", fontWeight: "600" }}>{title}</div>

        <div onClick={() => handleNavigate()} style={{ fontWeight: "600", backgroundColor: "#2A9BAA", color: "#fff", padding: "2px 10px", borderRadius: "5px", display: "flex", alignItems: "center", gap: "7px", cursor: "pointer" }}>
          <div style={{ fontSize: "15px" }}>Display</div>
          <CIcon icon={icon.cilList} size='sm' />
        </div>
      </div>
    </>
  )
}

export default DataTableButton