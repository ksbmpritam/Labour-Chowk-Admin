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
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", }}>
        <div style={{ fontSize: "20px", fontWeight: "600" }}>{title}</div>

        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>

          <div onClick={() => handleNavigate()} style={{ fontWeight: "600", backgroundColor: "#212631", color: "#fff", padding: "2px 5px", borderRadius: "5px", display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
            <div style={{ fontSize: "15px" }}>Display</div>
            <CIcon icon={icon.cilList} />
          </div>
        </div>
      </div>
    </>
  )
}

export default DataTableButton