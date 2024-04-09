import axios from 'axios';
import { put, call, takeLeading, delay } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';
import { api_urls } from '../../utils/apiUrls';
import { change_partner_kyc_status, change_partner_status, delete_partner, get_active_partner, get_all_partner, get_banned_partner, get_bidding_list_by_partner_id, get_partner_by_id, get_partner_work_by_partner_id, update_partner } from '../../utils/apiRoutes';
import Swal from "sweetalert2";

function* getAllPartner() {
    try {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
        const { data } = yield call(axios.post, `${api_urls + get_all_partner}`, {});
        console.log("Get All Partner Saga Response ::: ", data)

        if (data?.success) {
            yield delay(500);
            yield put({ type: actionTypes.SET_ALL_PARTNER, payload: data?.result });
        }
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    } catch (error) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
        console.log("Get All Partner Saga Error ::: ", error)
    }
}

function* getActivePartner() {
    try {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
        const { data } = yield call(axios.post, `${api_urls + get_active_partner}`, {});
        console.log("Get Active Partner Saga Response ::: ", data)

        if (data?.success) {
            yield delay(500);
            yield put({ type: actionTypes.SET_ACTIVE_PARTNER, payload: data?.result });
        }
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    } catch (error) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
        console.log("Get Active Partner Saga Error ::: ", error)
    }
}

function* getBannedPartner() {
    try {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
        const { data } = yield call(axios.post, `${api_urls + get_banned_partner}`, {});
        console.log("Get Banned Partner Saga Response ::: ", data)

        if (data?.success) {
            yield delay(500);
            yield put({ type: actionTypes.SET_BANNED_PARTNER, payload: data?.result });
        }
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    } catch (error) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
        console.log("Get Banned Partner Saga Error ::: ", error)
    }
}

function* getPartnerById(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload)

        const { data } = yield call(axios.post, `${api_urls + get_partner_by_id}`, payload);
        console.log("Get Partner By Id Saga Response ::: ", data)

        if (data?.success) {
            console.log("Get Partner By Id Saga Response ::: ", data?.result)
            yield put({ type: actionTypes.SET_PARTNER_BY_ID, payload: data?.result });
        }

    } catch (error) {
        console.log("Get Partner By Id Saga Error ::: ", error)
    }
}

function* changePartnerStatus(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload)
        console.log("Payload ID ::: ", payload?.labourID)

        const result = yield Swal.fire({
            title: `Are You Sure To Change Status`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#2A9BAA",
            cancelButtonColor: "red",
            confirmButtonText: "Yes",
            cancelButtonText: "No"
        })

        if (result.isConfirmed) {
            const { data } = yield call(axios.post, `${api_urls + change_partner_status}`, payload);
            console.log("Change Partner Status Saga Response ::: ", data)

            if (data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Status Change Successfully",
                    showConfirmButton: false,
                    timer: 2000,
                });
                yield put({ type: actionTypes.GET_PARTNER_BY_ID, payload: { labourID: payload?.labourID } })
                yield put({ type: actionTypes.GET_ALL_PARTNER, payload: null })
            }
        }

    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Server Error",
            text: "Failed To Change Status",
            showConfirmButton: false,
            timer: 2000,
        });
        console.log("Change Partner Status Saga Error ::: ", error)
    }
}

function* changePartnerKycStatus(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload)
        console.log("Payload ID ::: ", payload?.labourID)

        const result = yield Swal.fire({
            title: `Are You Sure To Change Partner Kyc Status`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#2A9BAA",
            cancelButtonColor: "red",
            confirmButtonText: "Yes",
            cancelButtonText: "No"
        })

        if (result.isConfirmed) {
            const { data } = yield call(axios.post, `${api_urls + change_partner_kyc_status}`, payload);
            console.log("Change Partner Kyc Status Saga Response ::: ", data)

            if (data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Kyc Status Change Successfully",
                    showConfirmButton: false,
                    timer: 2000,
                });
                yield put({ type: actionTypes.GET_PARTNER_BY_ID, payload: { labourID: payload?.labourID } })
                yield put({ type: actionTypes.GET_ALL_PARTNER, payload: null })
            }
        }

    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Server Error",
            text: "Failed To Change Kyc Status",
            showConfirmButton: false,
            timer: 2000,
        });
        console.log("Change Partner Kyc Status Saga Error ::: ", error)
    }
}

function* updatePartner(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload)

        const { data } = yield call(axios.post, `${api_urls + update_partner}`, payload?.data, { headers: { "Content-Type": "multipart/form-data" } })

        console.log("Update Partner Saga Response ::: ", data)

        if (data?.success) {
            Swal.fire({
                icon: "success",
                title: "Partner Updated Successfully",
                showConfirmButton: false,
                timer: 2000,
            });
            yield call(payload?.onComplete)
            yield put({ type: actionTypes.GET_ALL_PARTNER, payload: null })
        }

    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Server Error",
            text: "Partner Update Failed",
            showConfirmButton: false,
            timer: 2000,
        });
        console.log("Update Partner Saga Error ::: ", error)
    }
}

function* deletePartner(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload)

        const result = yield Swal.fire({
            title: `Are You Sure To Delete Partner`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#2A9BAA",
            cancelButtonColor: "red",
            confirmButtonText: "Delete",
        })

        if (result.isConfirmed) {
            const { data } = yield call(axios.post, `${api_urls + delete_partner}`, payload);
            console.log("Delete Partner Saga Response ::: ", data)
            if (data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Partner Deleted Successfully",
                    showConfirmButton: false,
                    timer: 2000,
                });
                yield put({ type: actionTypes.GET_ALL_PARTNER, payload: null })
            }
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Server Error",
            text: "Failed To Delete Partner",
            showConfirmButton: false,
            timer: 2000,
        });
        console.log("Delete Partner Saga Error ::: ", error)
    }
}

function* getPartnerWorkByPartnerId(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload)

        const { data } = yield call(axios.post, `${api_urls + get_partner_work_by_partner_id}`, payload);
        console.log("Get Partner Work By Partner Id Saga Response ::: ", data)

        if (data?.success) {
            console.log("Get Partner Work By Partner Id Saga Response ::: ", data?.result)
            yield put({ type: actionTypes.SET_PARTNER_WORK_BY_PARTNER_ID, payload: data?.result });
        }

    } catch (error) {
        console.log("Get Partner Work By Partner Id Saga Error ::: ", error)
    }
}

function* getBiddingListByPartnerId(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload)

        const { data } = yield call(axios.post, `${api_urls + get_bidding_list_by_partner_id}`, payload);
        console.log("Get Bidding List By Partner Id Saga Response ::: ", data)

        if (data?.success) {
            console.log("Get Bidding List By Partner Id Saga Response ::: ", data?.result)
            yield put({ type: actionTypes.SET_BIDDING_LIST_BY_PARTNER_ID, payload: data?.result });
        }

    } catch (error) {
        console.log("Get Bidding List By Partner Id Saga Error ::: ", error)
    }
}

export default function* partnerSaga() {
    yield takeLeading(actionTypes?.GET_ALL_PARTNER, getAllPartner);
    yield takeLeading(actionTypes?.GET_ACTIVE_PARTNER, getActivePartner);
    yield takeLeading(actionTypes?.GET_BANNED_PARTNER, getBannedPartner);
    yield takeLeading(actionTypes?.GET_PARTNER_BY_ID, getPartnerById);
    yield takeLeading(actionTypes?.CHANGE_PARTNER_STATUS, changePartnerStatus);
    yield takeLeading(actionTypes?.CHANGE_PARTNER_KYC_STATUS, changePartnerKycStatus);
    yield takeLeading(actionTypes?.UPDATE_PARTNER, updatePartner);
    yield takeLeading(actionTypes?.DELETE_PARTNER, deletePartner);
    yield takeLeading(actionTypes?.GET_PARTNER_WORK_BY_PARTNER_ID, getPartnerWorkByPartnerId);
    yield takeLeading(actionTypes?.GET_BIDDING_LIST_BY_PARTNER_ID, getBiddingListByPartnerId);
}
