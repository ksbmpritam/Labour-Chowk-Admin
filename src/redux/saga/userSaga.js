import axios from 'axios';
import { put, call, takeLeading } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';
import { api_urls } from '../../utils/apiUrls';
import { get_active_user, get_all_user, get_banned_user } from '../../utils/apiRoutes';
import Swal from "sweetalert2";

function* getAllUser() {
    try {
        const { data } = yield call(axios.post, `${api_urls + get_all_user}`, {});
        console.log("Get All User Saga Response ::: ", data)

        if (data?.success) {
            yield put({ type: actionTypes.SET_ALL_USER, payload: data?.result });
        }

    } catch (error) {
        console.log("Get All User Saga Error ::: ", error)
    }
}

function* getActiveUser() {
    try {
        const { data } = yield call(axios.post, `${api_urls + get_active_user}`, {});
        console.log("Get Active User Saga Response ::: ", data)

        if (data?.success) {
            yield put({ type: actionTypes.SET_ACTIVE_USER, payload: data?.result });
        }

    } catch (error) {
        console.log("Get Active User Saga Error ::: ", error)
    }
}

function* getBannedUser() {
    try {
        const { data } = yield call(axios.post, `${api_urls + get_banned_user}`, {});
        console.log("Get Banned User Saga Response ::: ", data)

        if (data?.success) {
            yield put({ type: actionTypes.SET_BANNED_USER, payload: data?.result });
        }

    } catch (error) {
        console.log("Get Banned User Saga Error ::: ", error)
    }
}

export default function* userSaga() {
    yield takeLeading(actionTypes?.GET_ALL_USER, getAllUser);
    yield takeLeading(actionTypes?.GET_ACTIVE_USER, getActiveUser);
    yield takeLeading(actionTypes?.GET_BANNED_USER, getBannedUser);
}
