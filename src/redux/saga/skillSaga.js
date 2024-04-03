import axios from 'axios';
import { put, call, takeLeading } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';
import { api_urls } from '../../utils/apiUrls';
import { delete_skill, get_skill } from '../../utils/apiRoutes';

function* getSkill() {
    try {
        const { data } = yield call(axios.post, `${api_urls + get_skill}`, {});
        console.log("Get Skill Saga Response ::: ", data)

        if (data?.success) {
            yield put({ type: actionTypes.SET_SKILL, payload: data?.result });
        }

    } catch (error) {
        console.log("Get Skill Saga Error ::: ", error)
    }
}

function* deleteSkill(action) {
    try {
        const { payload } = action;
        console.log("Action ::: ", action)
        console.log("Payload ::: ", payload)
        console.log("Skill ID ::: ", payload?.skill_ID)

        const response = yield call(axios.post, `${api_urls + delete_skill}`, payload);
        // const response = yield call(axios.post, `http://192.168.29.99:5000/api/admin/delete_skill_byID`, payload);
        console.log("Delete Skill Saga Response ::: ", response)
        if (response.data.success) {
            yield put({ type: actionTypes.GET_SKILL, payload: null })
        }

    } catch (error) {
        console.log("Delete Skill Saga Error ::: ", error)
    }
}

export default function* skillSaga() {
    yield takeLeading(actionTypes?.GET_SKILL, getSkill);
    yield takeLeading(actionTypes?.DELETE_SKILL, deleteSkill);
}
