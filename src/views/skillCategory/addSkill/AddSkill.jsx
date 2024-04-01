import { CButton, CCol, CForm, CFormInput } from '@coreui/react'
import React, { useState } from 'react'
import DataTableButton from '../../../components/common/DataTableButton'

const AddSkill = () => {
  const [validated, setValidated] = useState(false)
  const [skillName, setSkillName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      var formData = new FormData()
      console.log("Skill Name ::: ", { skillName })
    }
    setValidated(true)
  }

  return (
    <>
      <div style={{ padding: "20px", backgroundColor: "#fff" }}>
        <DataTableButton title={'Add Skill'} url={'skill'} />

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
              name="name"
              id="validationCustom01"
              required
              feedbackValid="Looks good!"
              feedbackInvalid={'Please Enter Skill'}
              onChange={(e) => setSkillName(e.target.value)}
            />
          </CCol>

          <CCol xs={12}>
            <CButton type="submit" style={{ backgroundColor: "#212631", color: "#fff", fontSize: "14px", padding: "5px 10px" }}>
              Add Skill
            </CButton>
          </CCol>
        </CForm>
      </div>
    </>
  )
}

export default AddSkill