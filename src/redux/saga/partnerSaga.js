import axios from 'axios';
import { put, call, takeLeading } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';
import { api_urls } from '../../utils/apiUrls';
import { get_active_partner, get_all_partner, get_banned_partner, get_partner_by_id } from '../../utils/apiRoutes';
import Swal from "sweetalert2";

function* getAllPartner() {
    try {
        const { data } = yield call(axios.post, `${api_urls + get_all_partner}`, {});
        console.log("Get All Partner Saga Response ::: ", data)

        if (data?.success) {
            yield put({ type: actionTypes.SET_ALL_PARTNER, payload: data?.result });
        }

    } catch (error) {
        console.log("Get All Partner Saga Error ::: ", error)
    }
}

function* getActivePartner() {
    try {
        const { data } = yield call(axios.post, `${api_urls + get_active_partner}`, {});
        console.log("Get Active Partner Saga Response ::: ", data)

        if (data?.success) {
            yield put({ type: actionTypes.SET_ACTIVE_PARTNER, payload: data?.result });
        }

    } catch (error) {
        console.log("Get Active Partner Saga Error ::: ", error)
    }
}

function* getBannedPartner() {
    try {
        const { data } = yield call(axios.post, `${api_urls + get_banned_partner}`, {});
        console.log("Get Banned Partner Saga Response ::: ", data)

        if (data?.success) {
            yield put({ type: actionTypes.SET_BANNED_PARTNER, payload: data?.result });
        }

    } catch (error) {
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

export default function* partnerSaga() {
    yield takeLeading(actionTypes?.GET_ALL_PARTNER, getAllPartner);
    yield takeLeading(actionTypes?.GET_ACTIVE_PARTNER, getActivePartner);
    yield takeLeading(actionTypes?.GET_BANNED_PARTNER, getBannedPartner);
    yield takeLeading(actionTypes?.GET_PARTNER_BY_ID, getPartnerById);
}
