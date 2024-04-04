import { CButton, CCol, CForm, CFormInput, CFormSelect } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import DataTableButton from '../../../components/common/DataTableButton'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as SkillActions from '../../../redux/actions/skillAction';

const AddSubSkill = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { skillData: optionsSkillData } = useSelector((state) => state.skillReducer);

  useEffect(function () {
    //! Dispatching API for Getting Sub SKill
    dispatch(SkillActions.getSkill())
  }, []);

  const [validated, setValidated] = useState(false)
  const [skill_ID, setSkill_ID] = useState('')
  const [subSkill, setSubSkill] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget

    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      console.log("Sub Skill Data ::: ", { skill_ID, subSkill })

      const payload = {
        data: { skill_ID, subSkill },
        onComplete: () => navigate("/sub-skill")
      }

      //! Dispatching API for Creating Gift
      dispatch(SkillActions.createSubSkill(payload))
    }
    setValidated(true)
  }

  return (
    <>
      <div style={{ padding: "20px", backgroundColor: "#fff" }}>
        <DataTableButton title={'Add Sub Skill'} url={'sub-skill'} />

        <CForm className="row g-3 needs-validation" noValidate validated={validated} onSubmit={handleSubmit}  >
          <CCol md={12}>
            <CFormSelect
              label="Skill" id="validationCustom01" required
              value={skill_ID}
              feedbackValid="Looks good!" feedbackInvalid={'Please Select Skill'}
              onChange={(e) => setSkill_ID(e.target.value)}
            >
              <option value="">Select...</option>
              {optionsSkillData && optionsSkillData?.map((option, index) => (
                <option key={index} value={option?._id}>
                  {option?.skill}
                </option>
              ))}
            </CFormSelect>
          </CCol>

          <CCol md={12}>
            <CFormInput label="Sub Skill" name="subSkill" type="text" id="validationCustom02" required
              value={subSkill}
              feedbackValid="Looks good!" feedbackInvalid={'Please Enter Sub Skill'}
              onChange={(e) => setSubSkill(e.target.value)}
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
