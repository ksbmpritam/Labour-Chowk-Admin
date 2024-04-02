
import React, { useState } from 'react';
import { CButton, CCol, CForm, CFormInput } from '@coreui/react'
import DataTableButton from '../../../components/common/DataTableButton';

const AddBanner = () => {
    const [validated, setValidated] = useState(false)
    const [bannerTitle, setBannerTitle] = useState('')
    const [banner, setBanner] = useState({ file: null, bytes: "" });

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.stopPropagation()
        } else {
            var formData = new FormData()
            console.log("Banner Title ::: ", { bannerTitle })
        }
        setValidated(true)
    }

    const handleBanner = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setBanner({
                file: URL.createObjectURL(e.target.files[0]),
                bytes: e.target.files[0],
            });
        }
    };

    return (
        <>
            <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                <DataTableButton title={'Add Banner'} url={'banner'} />

                <CForm
                    className="row g-3 needs-validation"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}

                >
                    <CCol md={12}>
                        <CFormInput

                            label="Title"
                            type="text"
                            name="name"
                            id="validationCustom01"
                            required
                            feedbackValid="Looks good!"
                            feedbackInvalid={'Please Enter Title'}
                            onChange={(e) => setBannerTitle(e.target.value)}
                        />
                    </CCol>
                    <CCol md={12}>
                        <CFormInput
                            label="Banner"
                            type="file"
                            name="banner"
                            id="validationCustom02"
                            required
                            feedbackValid="Looks good!"
                            feedbackInvalid="Please Provide Banner Image"
                            aria-label="file example"
                            onChange={handleBanner}
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

export default AddBanner



