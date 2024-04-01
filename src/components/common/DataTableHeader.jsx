import React from 'react'
import { CSVLink } from 'react-csv'
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';

const DataTableHeader = ({ title, data }) => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", }}>
                <div style={{ fontSize: "20px", fontWeight: "600" }}>{title}</div>

                <CSVLink data={data} style={{ color: "#000", fontSize: "1rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }} >
                    <div style={{ fontSize: "16px", fontWeight: "600" }}>Download</div>
                    <CIcon icon={icon.cilDataTransferDown} size="sm" />
                </CSVLink>
            </div>
        </>
    )
}

export default DataTableHeader