import axios from 'axios';
import { put, call, takeLeading, delay } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';
import { api_urls } from '../../utils/apiUrls';
import { get_all_bidding_list } from '../../utils/apiRoutes';
import Swal from "sweetalert2";

function* getAllBiddingList() {
    try {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
        const { data } = yield call(axios.post, `${api_urls + get_all_bidding_list}`, {});
        console.log("Get All Bidding List Saga Response ::: ", data)

        if (data?.success) {
            yield delay(500);
            yield put({ type: actionTypes.SET_ALL_BIDDING_LIST, payload: data?.result });
        }
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    } catch (error) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
        console.log("Get All Bidding List Saga Error ::: ", error)
    }
}

export default function* biddingSaga() {
    yield takeLeading(actionTypes?.GET_ALL_BIDDING_LIST, getAllBiddingList);
}