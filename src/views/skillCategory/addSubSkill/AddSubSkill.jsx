import { CButton, CCol, CForm, CFormInput, CFormSelect } from '@coreui/react'
import React, { useState } from 'react'
import DataTableButton from '../../../components/common/DataTableButton'

const AddSubSkill = () => {
  const [validated, setValidated] = useState(false)
  const [skillName, setSkillName] = useState('')
  const [subSkillName, setSubSkillName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget

    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      var formData = new FormData()
      console.log("Sub Skill Data ::: ", { skillName, subSkillName })
    }
    setValidated(true)
  }

  const options = [
    {
      id: 1,
      name: "Tech"
    },
    {
      id: 2,
      name: "Pecas"
    }
  ]

  return (
    <>
      <div style={{ padding: "20px", backgroundColor: "#fff" }}>
        <DataTableButton title={'Add Sub Skill'} url={'skill'} />

        <CForm
          className="row g-3 needs-validation"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <CCol md={12}>
            <CFormSelect
              id="validationCustom01"
              label="Skill"
              required
              feedbackValid="Looks good!"
              feedbackInvalid={'Please Select Skill'}
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
            >
              <option value="">Select...</option>
              {options.map((option, index) => (
                <option key={index} value={option?.id}>
                  {option?.name}
                </option>
              ))}
            </CFormSelect>
          </CCol>

          <CCol md={12}>
            <CFormInput
              label="Sub Skill"
              type="text"
              name="name"
              id="validationCustom02"
              required
              value={subSkillName}
              feedbackValid="Looks good!"
              feedbackInvalid={'Please Enter Sub Skill'}
              onChange={(e) => setSubSkillName(e.target.value)}
            />
          </CCol>

          <CCol xs={12}>
            <CButton type="submit" style={{ backgroundColor: "#212631", color: "#fff", fontSize: "14px", padding: "5px 10px" }}>
              Add Sub Skill
            </CButton>
          </CCol>
        </CForm>
      </div>
    </>
  )
}

export default AddSubSkill
