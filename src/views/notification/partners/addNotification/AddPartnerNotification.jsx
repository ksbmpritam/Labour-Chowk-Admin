
import CIcon from '@coreui/icons-react';
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import {  CModalFooter, } from '@coreui/react';
import { CButton, CCol, CForm, CFormInput } from '@coreui/react'
import * as icon from '@coreui/icons';
import DataTableButton from '../../../../components/common/DataTableButton';

const AddPartnerNotification = () => {
    const [validated, setValidated] = useState(false)
    const [notification, setNotification] = useState('')
    const [sentTo, setSentTo] = useState('')
   
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        if (form.checkValidity() === false) {
          event.stopPropagation()
        } else {
          var formData = new FormData()
          console.log("Notification ::: ", { notification })
          console.log("Sent To ::: ", { sentTo })
        }
        setValidated(true)
      }

  
    return (
        <>
            <div style={{ padding: "20px", backgroundColor: "#fff" }}>
            <DataTableButton title={'Add'} url={'partner-notification'} />
               
                <CForm
                        className="row g-3 needs-validation"
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                      
                    >
                        <CCol md={12}>
                            <CFormInput

                                label="Notification"
                                type="text"
                                name="name"
                                id="validationCustom01"
                                required
                                feedbackValid="Looks good!"
                                feedbackInvalid={'Please Enter Title'}
                                onChange={(e) => setNotification(e.target.value)}
                               
                            />
                        </CCol>
                        <CCol md={12}>
                            <CFormInput
                                label="Send To"
                                type="dropdown"
                                name="sendto"
                                id="validationCustom02"
                                required
                                feedbackValid="Looks good!"
                                feedbackInvalid="Please Provide Banner Image"
                                aria-label="file example"
                                onChange={(e) => setSentTo(e.target.value)}
                            />
                        </CCol>

                        <CCol xs={12}>
                            <CButton type="submit" style={{ backgroundColor: "#212631", color: "#fff", fontSize: "14px", padding: "5px 10px" }}>
                                Add Banner
                            </CButton>
                        </CCol>
                    </CForm>
            </div>
        </>
    )
}

export default AddPartnerNotification