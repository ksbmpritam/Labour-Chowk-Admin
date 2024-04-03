import React, { useEffect, useState } from 'react'
import CIcon from '@coreui/icons-react';
import DataTable from 'react-data-table-component';
import * as icon from '@coreui/icons';
import { DataTableCustomStyles } from '../../../styles';
import DataTableHeaderWithAdd from '../../../components/common/DataTableHeaderWithAdd';
import { CButton, CCol, CForm, CFormInput, CModal, CModalBody, CModalHeader, CModalTitle } from '@coreui/react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesRequest } from '../../../saga/action';

const Skill = () => {
    const dispatch = useDispatch();
    const { categories, loading, error } = useSelector(state => state);
    console.log("Category", categories)
    useEffect(() => {
        dispatch(fetchCategoriesRequest());
    }, [dispatch]);

    //! Skill Start
    const skillData = [
        {
            id: 1,
            skill: "One",
        },
        {
            id: 2,
            skill: "Two",
        }
    ]

    const skillColumns = [
        {
            name: 'S.No',
            selector: (row, index) => index + 1,
        },
        {
            name: 'Skill',
            selector: row => row?.skill,
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
    //! Skill End
    const [visible, setVisible] = useState(false)
    const [validated, setValidated] = useState(false)
    const [skill, setSkill] = useState("")

    const handleEdit = (data) => {
        setVisible(!visible)
        console.log("Edit Data ::: ", data)
        setSkill(data?.skill)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSkill(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.stopPropagation()
        } else {
            var formData = new FormData()
            console.log("Skill ::: ", skill)
            console.log('Form data:', formData);
        }
        setValidated(true)
    }

    return (
        <>
            <div>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                <ul>
                    {categories?.result && categories.result.map(category => (
                        <li key={category.id}>{category.categoryName}</li>
                    ))}
                </ul>
            </div>
            <div>khjkh</div>

            <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                <DataTableHeaderWithAdd title={'Skill'} data={skillData} url={'add-skill'} />
                <DataTable
                    columns={skillColumns}
                    data={skillData}
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
                                id="validationCustom01"
                                required
                                feedbackValid="Looks good!"
                                feedbackInvalid={"Please Enter Skill"}
                                onChange={(e) => handleInputChange(e)}
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

export default Skill