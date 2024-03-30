import CIcon from '@coreui/icons-react';
import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import * as icon from '@coreui/icons';
import { DataTableCustomStyles } from '../../../styles';
import { useNavigate } from 'react-router-dom';
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';

const PartnerDetail = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false)

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
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Edit" icon={icon.cilPencil} size="sm" onClick={() => handleEdit(row)} />
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Delete" icon={icon.cilDelete} size="sm" />
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Ban-Unban" icon={icon.cilBan} size="sm" />
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Verify" icon={icon.cilCheckCircle} size="sm" />
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" style={{ cursor: "pointer" }} onClick={() => handleView(row)} icon={icon.cilTouchApp} size="sm" />
            </div>,
            width: '180px'
        },
    ];

    const handleView = (data) => {
        console.log("View Data ::: ", data)
        navigate(`/partner/${data?.id}`);
    }

    const handleEdit = (data) => {
        setVisible(!visible)
        console.log("Edit Data ::: ", data)
    }

    return (
        <>
            <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", }}>
                    <div style={{ fontSize: "20px", fontWeight: "600" }}>Partner</div>
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
                    customStyles={DataTableCustomStyles}
                />
            </div>

            {/* Edit Modal */}
            <CModal
                backdrop="static"
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="LiveDemoExampleLabel"
            >
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle id="LiveDemoExampleLabel">Modal title</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <p>Woohoo, you're reading this text in a modal!</p>
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>
                        Close
                    </CButton>
                    <CButton color="primary">Save changes</CButton>
                </CModalFooter>
            </CModal>
        </>
    )
}

export default PartnerDetail