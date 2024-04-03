import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_CATEGORIES_REQUEST } from '../actionTypes';
import { fetchCategoriesFailure, fetchCategoriesSuccess } from '../actions/exampleAction';
import { get_skill } from '../../utils/apiRoutes';
import { api_urls } from '../../utils/apiUrls';

function* fetchCategories() {
    try {
        // const response = yield call(axios.get, `https://api.biovisuals.in/api/user/adminCategories`);
        const response = yield call(axios.post, `${api_urls + get_skill}`, {});
        console.log("Saga Response ::: ", response.data)
        yield put(fetchCategoriesSuccess(response.data.result));
    } catch (error) {
        yield put(fetchCategoriesFailure(error));
    }
}

function* exampleSaga() {
    yield takeEvery(FETCH_CATEGORIES_REQUEST, fetchCategories);
}

export default exampleSaga;
