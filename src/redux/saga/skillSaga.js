import axios from 'axios';
import { put, call, takeLeading } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';
import { api_urls } from '../../utils/apiUrls';
import { get_skill, create_skill, update_skill, delete_skill } from '../../utils/apiRoutes';
import Swal from "sweetalert2";

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

function* createSkill(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload)

        const { data } = yield call(axios.post, `${api_urls + create_skill}`, payload?.data);
        console.log("Create Skill Saga Response ::: ", data)

        if (data?.success) {
            Swal.fire({
                icon: "success",
                title: "Skill Created Successfully",
                showConfirmButton: false,
                timer: 2000,
            });
            yield call(payload?.onComplete)
        }

    } catch (error) {
        Swal.fire({
            icon: "error",
            title: error?.response?.data?.message.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
            text: "Failed To Create Skill",
            showConfirmButton: false,
            timer: 10000,
        });
        console.log("Create Skill Saga Error ::: ", error?.response?.data)
        console.log("Create Skill Saga Error ::: ", error?.response?.data?.message)
    }
}

function* updateSkill(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload)

        const { data } = yield call(axios.post, `${api_urls + update_skill}`, payload?.data);
        console.log("Update Skill Saga Response ::: ", data)

        if (data?.success) {
            Swal.fire({
                icon: "success",
                title: "Skill Updated Successfully",
                showConfirmButton: false,
                timer: 2000,
            });
            yield call(payload?.onComplete)
            yield put({ type: actionTypes.GET_SKILL, payload: null })
        }

    } catch (error) {
        console.log("Update Skill Saga Error ::: ", error)
    }
}

function* deleteSkill(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload)

        const result = yield Swal.fire({
            title: `Are You Sure To Delete`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#2A9BAA",
            cancelButtonColor: "red",
            confirmButtonText: "Delete",
        })

        console.log("Result ::: ", result)

        if (result.isConfirmed) {
            const { data } = yield call(axios.post, `${api_urls + delete_skill}`, payload);
            console.log("Delete Skill Saga Response ::: ", data)
            if (data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Skill Deleted Successfully",
                    showConfirmButton: false,
                    timer: 2000,
                });
                yield put({ type: actionTypes.GET_SKILL, payload: null })

            }
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Server Error",
            text: "Failed To Delete Skill",
            showConfirmButton: false,
            timer: 2000,
        });
        console.log("Delete Skill Saga Error ::: ", error)
    }
}

export default function* skillSaga() {
    yield takeLeading(actionTypes?.GET_SKILL, getSkill);
    yield takeLeading(actionTypes?.CREATE_SKILL, createSkill);
    yield takeLeading(actionTypes?.UPDATE_SKILL, updateSkill);
    yield takeLeading(actionTypes?.DELETE_SKILL, deleteSkill);
}
