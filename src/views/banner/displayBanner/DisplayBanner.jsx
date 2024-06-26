
import CIcon from '@coreui/icons-react';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { CButton, CCol, CForm, CFormInput, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react';
import * as icon from '@coreui/icons';
import DataTableHeaderWithAdd from '../../../components/common/DataTableHeaderWithAdd';
import { DataTableCustomStyles } from '../../../styles';
import axios from 'axios';
import { api_urls } from '../../../utils/apiUrls';
import { formatTimestampToDateString } from '../../../utils/commonFunction';

const DisplayBanner = () => {
    const [editVisible, setEditVisible] = useState(false);
    const [viewVisible, setViewVisible] = useState(false);
    const [selectedEditRow, setSelectedEditRow] = useState(null);
    const [selectedViewRow, setSelectedViewRow] = useState(null);
    const [banner, setBanner] = useState({ file: null, bytes: "" });
    const [error, setError] = useState({ title: "Pllll" });
    const [validated, setValidated] = useState(false)

    const handleEdit = (row) => {
        console.log("edit banner", row)
        setSelectedEditRow(row);
        setEditVisible(true);
        setBanner({ file: row?.banner })
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedEditRow({ ...selectedEditRow, [name]: value });
    };

    const handleBanner = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setBanner({
                file: URL.createObjectURL(e.target.files[0]),
                bytes: e.target.files[0],
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.stopPropagation()
        } else {
            var formData = new FormData()
            console.log("Title:", selectedEditRow?.title);
            console.log("Banner:", banner);

        }
        setValidated(true)
    };

    const handleView = (row) => {
        setSelectedViewRow(row);
        setViewVisible(true);
    };

    const [bannerData, setBannerData] = useState([
        {
            id: 1,
            title: "Plumber",
            banner: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
        },
        {
            id: 2,
            title: "Carpainter",
            banner: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
        }
    ])

    const bannerColumns = [
        { name: 'S.No.', selector: row => bannerData.indexOf(row) + 1, style: { backGroundColor: "#000", paddingLeft: "20px" } },
        {
            name: 'Title',
            selector: row => row?.title,
        },
        {
            name: 'Application',
            selector: row => row?.applications,
        },
        {
            name: 'Banners',
            cell: row => <img src={api_urls + row?.images} alt="Banner" style={{ width: '50px', height: '50px' }} onClick={() => handleView(row)} />,
        },
        {
            name: "Status",
            selector: row => row?.isActive
        },
        {
            name: "Created Date",
            selector: row => formatTimestampToDateString(row?.createdAt)
        },
        {
            name: 'Action',
            cell: row => (
                <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
                    <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Edit" icon={icon.cilPencil} size="sm" onClick={() => handleEdit(row)} />
                    <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Delete" icon={icon.cilDelete} size="sm" />
                    <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="View" style={{ cursor: "pointer" }} onClick={() => handleView(row)} icon={icon.cilTouchApp} size="sm" />
                </div>
            ),
            width: '180px'
        },
    ];

    useEffect(() => {
        // const getBanner = async () => {
        //     const { data } = await axios.post('http://localhost:5000/api/admin/get_banners', {})
        //     console.log("Banner Data ::: ", data)
        //     setBannerData(data?.result)
        // }

        // getBanner()
    }, [])

    return (
        <>
            <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                <DataTableHeaderWithAdd title={'Banners'} data={bannerData} url={'add-banner'} />
                <DataTable
                    columns={bannerColumns}
                    data={bannerData}
                    pagination
                    customStyles={DataTableCustomStyles}
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5, 10, 15, 20]}
                    paginationComponentOptions={{ rowsPerPageText: 'Rows Per Page :' }}
                />
            </div>

            {/* edit modal  */}
            <CModal
                backdrop="static"
                visible={editVisible}
                onClose={() => setEditVisible(false)}
                aria-labelledby="LiveDemoExampleLabel"
            >
                <CModalHeader onClose={() => setEditVisible(false)}>
                    <CModalTitle id="LiveDemoExampleLabel">Edit Banner</CModalTitle>
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
                                label="Title"
                                type="text"
                                name="title"
                                value={selectedEditRow?.title}
                                id="validationCustom01"
                                required
                                feedbackValid="Looks good!"
                                feedbackInvalid={error?.name}
                                onChange={handleInputChange}
                            />
                        </CCol>
                        <CCol md={12}>
                            <div>Banner</div>
                            <CRow className='align-items-center'>
                                <CCol xs={2}>
                                    <img src={banner?.file} alt="Banner" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                                </CCol>
                                <CCol xs={10}>
                                    <CFormInput
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
                            </CRow>
                        </CCol>

                        <CCol xs={12}>
                            <CButton type="submit" style={{ backgroundColor: "#212631", color: "#fff", fontSize: "14px", padding: "5px 10px" }}>
                                Edit Partner
                            </CButton>
                        </CCol>
                    </CForm>
                </CModalBody>
            </CModal>

            {/* view modal */}
            <CModal
                backdrop="static"
                visible={viewVisible}
                onClose={() => setViewVisible(false)}
                aria-labelledby="ViewModal"
            >
                <CModalHeader onClose={() => setViewVisible(false)}>
                    <CModalTitle id="VerticallyCenteredExample">View Banner</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm className="row g-3 needs-validation" noValidate validated={validated} onSubmit={handleSubmit}>
                        <CCol md={12}>
                            <div className='m-2'>
                                <label htmlFor="title">Title:</label>
                                <input className='form-control' id="title" type="text" defaultValue={selectedViewRow?.title} readOnly />
                            </div>
                        </CCol>
                        <CCol md={12}>
                            <div className='m-2'>
                                <label htmlFor="file">Banner:</label>
                                <img src={selectedViewRow?.banner} alt="Banner" style={{ width: '100%', height: 'auto' }} />
                            </div>
                        </CCol>
                        <CCol xs={2} className="text-center">
                            <CButton style={{ backgroundColor: "#212631", color: "#fff", fontSize: "14px", padding: "5px 10px" }} onClick={() => setViewVisible(false)}>
                                Close
                            </CButton>
                        </CCol>
                    </CForm>
                </CModalBody>
            </CModal>
        </>
    )
}

export default DisplayBanner;
