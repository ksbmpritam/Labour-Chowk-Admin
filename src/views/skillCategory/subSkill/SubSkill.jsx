import React, { useEffect, useState } from 'react'
import CIcon from '@coreui/icons-react';
import DataTable from 'react-data-table-component';
import * as icon from '@coreui/icons';
import { DataTableCustomStyles } from '../../../styles';
import DataTableHeaderWithAdd from '../../../components/common/DataTableHeaderWithAdd';
import { CButton, CCol, CForm, CFormInput, CModal, CModalBody, CModalHeader, CModalTitle } from '@coreui/react';
import { connect } from 'react-redux';
import * as SkillActions from '../../../redux/actions/skillAction';

const SubSkill = ({ dispatch, subSkillData }) => {
    // console.log("Sub Skill Data ::: ", subSkillData)

    useEffect(function () {
        //! Dispatching API for Getting Sub SKill
        dispatch(SkillActions.getSubSkill())
    }, []);

    //! Sub-Skill DataTable Columns
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
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Delete" icon={icon.cilDelete} style={{ cursor: "pointer" }} size="sm" onClick={() => {
                    console.log("Deleted ID :: ", row?._id)
                    dispatch(SkillActions.deleteSubSkill({ subSkill_ID: row?._id }))
                }
                } />
            </div>,
            width: '180px'
        },
    ]

    const [visible, setVisible] = useState(false)
    const [validated, setValidated] = useState(false)
    const [skill, setSkill] = useState("")
    const [subSkill, setSubSkill] = useState("")
    const [subSkillId, setSubSkillId] = useState("")

    const handleEdit = (data) => {
        setVisible(!visible)
        console.log("Edit Data ::: ", data)
        setSkill(data?.skill)
        setSubSkill(data?.subSkill)
        setSubSkillId(data?._id)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.stopPropagation()
        } else {
            console.log("Sub Skill Data For Edit ::: ", { subSkill_ID: subSkillId, skill, subSkill })

            const payload = {
                data: { subSkill_ID: subSkillId, subSkill },
                onComplete: () => setVisible(!visible)
            }

            //! Dispatching API for Updating Sub SKill
            dispatch(SkillActions.updateSubSkill(payload))
        }
        setValidated(true)
    }

    return (
        <>
            {
                subSkillData && <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                    <DataTableHeaderWithAdd title={'Sub Skill'} data={subSkillData} url={'add-sub-skill'} />
                    <DataTable
                        columns={subSkillColumns}
                        data={subSkillData}
                        pagination
                        customStyles={DataTableCustomStyles}
                    />
                </div>
            }

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

const mapStateToProps = (state) => ({
    subSkillData: state?.skillReducer?.subSkillData
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(SubSkill);