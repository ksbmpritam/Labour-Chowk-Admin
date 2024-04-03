import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_CATEGORIES_REQUEST } from '../actionTypes';
import { fetchCategoriesFailure, fetchCategoriesSuccess } from '../actions/exampleAction';

function* fetchCategories() {
    try {
        const response = yield call(axios.get, 'https://api.biovisuals.in/api/user/adminCategories');
        const categories = response.data;
        yield put(fetchCategoriesSuccess(categories));
    } catch (error) {
        yield put(fetchCategoriesFailure(error));
    }
}

function* exampleSaga() {
    yield takeEvery(FETCH_CATEGORIES_REQUEST, fetchCategories);
}

export default exampleSaga;
