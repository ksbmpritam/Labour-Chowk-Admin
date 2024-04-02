import React, { useState } from 'react'
import CIcon from '@coreui/icons-react';
import DataTable from 'react-data-table-component';
import * as icon from '@coreui/icons';
import { DataTableCustomStyles } from '../../../styles';
import DataTableHeaderWithAdd from '../../../components/common/DataTableHeaderWithAdd';
import { CButton, CCol, CForm, CFormInput, CModal, CModalBody, CModalHeader, CModalTitle } from '@coreui/react';

const SubSkill = () => {
    //! Sub Skill Start
    const subSkillData = [
        {
            id: 1,
            skill: "Skill One",
            subSkill: "One"
        },
        {
            id: 2,
            skill: "Skill One",
            subSkill: "Two"
        },
        {
            id: 3,
            skill: "Skill Two",
            subSkill: "One"
        }
    ]

    const subSkillColumns = [
        {
            name: 'S.No',
            selector: (row, index) => index + 1,
        },
        {
            name: 'Skill',
            selector: row => row?.skill,
        },
        {
            name: 'Sub SKill',
            selector: row => row?.subSkill,
        },
        {
            name: 'Action',
            cell: row => <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Edit" icon={icon.cilPencil} style={{ cursor: "pointer" }} size="sm" onClick={() => handleEdit(row)} />
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Delete" icon={icon.cilDelete} style={{ cursor: "pointer" }} size="sm" />
            </div>,
            width: '180px'
        },
    ]
    //! Sub Skill End
    const [visible, setVisible] = useState(false)
    const [validated, setValidated] = useState(false)
    const [skill, setSkill] = useState("")
    const [subSkill, setSubSkill] = useState("")

    const handleEdit = (data) => {
        setVisible(!visible)
        console.log("Edit Data ::: ", data)
        setSkill(data?.skill)
        setSubSkill(data?.subSkill)
    }

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setPartnerDetail({ ...partnerDetail, [name]: value });
    // }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.stopPropagation()
        } else {
            var formData = new FormData()
            console.log("Skill ::: ", skill)
            console.log("Sub Skill ::: ", subSkill)
            console.log('Form data:', formData);
        }
        setValidated(true)
    }

    return (
        <>
            <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                <DataTableHeaderWithAdd title={'Sub Skill'} data={subSkillData} url={'add-sub-skill'} />
                <DataTable
                    columns={subSkillColumns}
                    data={subSkillData}
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
                    <CModalTitle id="">Edit Skill</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm
                        className="row g-3 needs-validation"
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <CCol md={12}>
                            <CFormInput
                                label="Skill"
                                type="text"
                                name="skill"
                                value={skill}
                                disabled
                            />
                        </CCol>
                        <CCol md={12}>
                            <CFormInput
                                label="Sub Skill"
                                type="text"
                                name="subSkill"
                                value={subSkill}
                                id="validationCustom02"
                                required
                                feedbackValid="Looks good!"
                                feedbackInvalid={"Please Enter Sub Skill"}
                                onChange={(e) => setSubSkill(e.target.value)}
                            />
                        </CCol>
                        <CCol xs={12}>
                            <CButton type="submit" style={{ backgroundColor: "#212631", color: "#fff", fontSize: "14px", padding: "5px 10px" }}>
                                Edit Skill
                            </CButton>
                        </CCol>
                    </CForm>
                </CModalBody>
            </CModal>
        </>
    )
}

export default SubSkill