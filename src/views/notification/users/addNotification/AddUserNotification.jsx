import React, { useState } from 'react';
import { CButton, CCol, CForm, CFormInput } from '@coreui/react'
import DataTableButton from '../../../../components/common/DataTableButton';
import Select from 'react-select';

const AddUserNotification = () => {
    const [validated, setValidated] = useState(false)
    const [notification, setNotification] = useState('')
    const [sendTo, setSendTo] = useState([]);
    const [sendToValidation, setSendToValidation] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false || sendTo.length === 0) {
            event.stopPropagation();
            if (sendTo.length === 0) {
                setSendToValidation('Please Select At Least One User');
            }
        } else {
            console.log("Sent Data ::: ", { notification, sendTo });
            setSendToValidation('');
        }
        setValidated(true);
    };

    const data = [
        { id: 1545546, name: "User One" },
        { id: 235, name: "User Two" },
    ]

    const options = [
        { value: 'all', label: 'Select All' }, // Option to select all
        ...data.map(item => ({
            value: item.id,
            label: item.name
        }))
    ];

    const handleChange = (selectedItems) => {
        console.log("Handle Change Data ::: ", selectedItems)
        if (selectedItems.some(item => item.value === 'all')) {
            setSendTo(data.map(item => item.id)); // Select all data
        } else {
            const selectedIds = selectedItems.map(item => item.value !== 'all' ? item.value : null).filter(Boolean);
            setSendTo(selectedIds);
        }

        if (selectedItems.length > 0) {
            setSendToValidation('');
        }
    };

    const customStyles = {
        control: (base, state) => ({
            ...base,
            borderColor: sendToValidation ? '#dc3545' : base.borderColor, // Change border color to red if there's an error
            // '&:hover': {
            //     borderColor: state.isFocused ? base.borderColor : base.borderColor, // Preserve base border color on hover
            // }
        })
    };

    return (
        <>
            <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                <DataTableButton title={'Add'} url={'user-notification'} />

                <CForm
                    className="row g-3 needs-validation"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                >
                    <CCol md={12}>
                        <Select
                            isMulti
                            options={options}
                            value={options.filter(option => sendTo.includes(option.value))}
                            onChange={handleChange}
                            styles={customStyles} // Apply custom styles
                        />
                        {sendToValidation && <div className="invalid-feedback d-block">{sendToValidation}</div>}
                    </CCol>

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

export default AddUserNotification