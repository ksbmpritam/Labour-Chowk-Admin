import React from 'react'
import { CSVLink } from 'react-csv'
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { useNavigate } from 'react-router-dom';

const DataTableHeaderWithAdd = ({ title, data, url }) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/${url}`);
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", }}>
        <div style={{ fontSize: "20px", fontWeight: "600" }}>{title}</div>

        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <CSVLink data={data} style={{ color: "#000", fontSize: "1rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }} >
            <div style={{ fontSize: "16px", fontWeight: "600" }}>Download</div>
            <CIcon icon={icon.cilDataTransferDown} size="sm" />
          </CSVLink>

          <div onClick={() => handleNavigate()} style={{ fontWeight: "600", backgroundColor: "#2A9BAA", color: "#fff", padding: "2px 5px", borderRadius: "5px", display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
            <div style={{ fontSize: "15px" }}>Add</div>
            <div style={{ fontWeight: "bold", fontSize: "18px" }}>+</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DataTableHeaderWithAdd