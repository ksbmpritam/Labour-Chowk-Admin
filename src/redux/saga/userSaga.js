import axios from 'axios';
import { put, call, takeLeading, delay } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';
import { api_urls } from '../../utils/apiUrls';
import { get_all_user, get_active_user, get_banned_user, get_user_by_id, update_user, delete_user, get_job_list_by_user_id, change_user_status, change_user_kyc_status } from '../../utils/apiRoutes';
import Swal from "sweetalert2";

function* showLoadingModal(data = '') {
    Swal.fire({
        icon: 'info',
        title: `Loading`,
        text: `${data} Data is Loading ...`,
        showConfirmButton: false,
        timer: 2000,
        willOpen: () => {
            Swal.showLoading();
        }
    });
    yield delay(1000);
}

function* getAllUser() {
    try {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
        const { data } = yield call(axios.post, `${api_urls + get_all_user}`, {});
        console.log("Get All User Saga Response ::: ", data)

        if (data?.success) {
            yield delay(500);
            yield put({ type: actionTypes.SET_ALL_USER, payload: data?.result });
        }
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    } catch (error) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
        console.log("Get All User Saga Error ::: ", error)
    }
}

function* getActiveUser() {
    try {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
        const { data } = yield call(axios.post, `${api_urls + get_active_user}`, {});
        console.log("Get Active User Saga Response ::: ", data)

        if (data?.success) {
            yield delay(500);
            yield put({ type: actionTypes.SET_ACTIVE_USER, payload: data?.result });
        }
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    } catch (error) {
        console.log("Get Active User Saga Error ::: ", error)
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    }
}

function* getBannedUser() {
    try {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
        const { data } = yield call(axios.post, `${api_urls + get_banned_user}`, {});
        console.log("Get Banned User Saga Response ::: ", data)

        if (data?.success) {
            yield delay(500);
            yield put({ type: actionTypes.SET_BANNED_USER, payload: data?.result });
        }
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    } catch (error) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
        console.log("Get Banned User Saga Error ::: ", error)
    }
}

function* getUserById(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload)

        const { data } = yield call(axios.post, `${api_urls + get_user_by_id}`, payload);
        console.log("Get User By Id Saga Response ::: ", data)

        if (data?.success) {
            console.log("Get User By Id Saga Response ::: ", data?.result)
            yield put({ type: actionTypes.SET_USER_BY_ID, payload: data?.result });
        }

    } catch (error) {
        console.log("Get User By Id Saga Error ::: ", error)
    }
}

function* updateUser(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload)

        const { data } = yield call(axios.post, `${api_urls + update_user}`, payload?.data, { headers: { "Content-Type": "multipart/form-data" } })

        console.log("Update User Saga Response ::: ", data)

        if (data?.success) {
            Swal.fire({
                icon: "success",
                title: "User Updated Successfully",
                showConfirmButton: false,
                timer: 2000,
            });
            yield call(payload?.onComplete)
            yield put({ type: actionTypes.GET_ALL_USER, payload: null })
        }

    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Server Error",
            text: "User Update Failed",
            showConfirmButton: false,
            timer: 2000,
        });
        console.log("Update User Saga Error ::: ", error)
    }
}

function* deleteUser(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload)

        const result = yield Swal.fire({
            title: `Are You Sure To Delete User`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#2A9BAA",
            cancelButtonColor: "red",
            confirmButtonText: "Delete",
        })

        if (result.isConfirmed) {
            const { data } = yield call(axios.post, `${api_urls + delete_user}`, payload);
            console.log("Delete User Saga Response ::: ", data)
            if (data.success) {
                Swal.fire({
                    icon: "success",
                    title: "User Deleted Successfully",
                    showConfirmButton: false,
                    timer: 2000,
                });
                yield put({ type: actionTypes.GET_ALL_USER, payload: null })
            }
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Server Error",
            text: "Failed To Delete User",
            showConfirmButton: false,
            timer: 2000,
        });
        console.log("Delete User Saga Error ::: ", error)
    }
}

function* getJobListByUserId(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload)
        yield put({ type: actionTypes.SET_IS_LOADING, payload: true });
        const { data } = yield call(axios.post, `${api_urls + get_job_list_by_user_id}`, payload);
        console.log("Get Job List By User Id Saga Response ::: ", data)

        if (data?.success) {
            yield delay(500);
            yield put({ type: actionTypes.SET_JOB_LIST_BY_USER_ID, payload: data?.result });
        }
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
    } catch (error) {
        yield put({ type: actionTypes.SET_IS_LOADING, payload: false });
        console.log("Get Job List By User Id Saga Error ::: ", error)
    }
}

function* changeUserStatus(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload)
        console.log("Payload ID ::: ", payload?.userID)

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
            const { data } = yield call(axios.post, `${api_urls + change_user_status}`, payload);
            console.log("Change User Status Saga Response ::: ", data)

            if (data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Status Change Successfully",
                    showConfirmButton: false,
                    timer: 2000,
                });
                yield put({ type: actionTypes.GET_USER_BY_ID, payload: { userID: payload?.userID } })
                yield put({ type: actionTypes.GET_ALL_USER, payload: null })
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
        console.log("Change User Status Saga Error ::: ", error)
    }
}

function* changeUserKycStatus(action) {
    try {
        const { payload } = action;
        console.log("Payload ::: ", payload)
        console.log("Payload ID ::: ", payload?.userID)

        const result = yield Swal.fire({
            title: `Are You Sure To Change User Kyc Status`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#2A9BAA",
            cancelButtonColor: "red",
            confirmButtonText: "Yes",
            cancelButtonText: "No"
        })

        if (result.isConfirmed) {
            const { data } = yield call(axios.post, `${api_urls + change_user_kyc_status}`, payload);
            console.log("Change User Kyc Status Saga Response ::: ", data)

            if (data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Kyc Status Change Successfully",
                    showConfirmButton: false,
                    timer: 2000,
                });
                yield put({ type: actionTypes.GET_USER_BY_ID, payload: { userID: payload?.userID } })
                yield put({ type: actionTypes.GET_ALL_USER, payload: null })
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
        console.log("Change User Kyc Status Saga Error ::: ", error)
    }
}

export default function* userSaga() {
    yield takeLeading(actionTypes?.GET_ALL_USER, getAllUser);
    yield takeLeading(actionTypes?.GET_ACTIVE_USER, getActiveUser);
    yield takeLeading(actionTypes?.GET_BANNED_USER, getBannedUser);
    yield takeLeading(actionTypes?.GET_USER_BY_ID, getUserById);
    yield takeLeading(actionTypes?.UPDATE_USER, updateUser);
    yield takeLeading(actionTypes?.DELETE_USER, deleteUser);
    yield takeLeading(actionTypes?.GET_JOB_LIST_BY_USER_ID, getJobListByUserId);
    yield takeLeading(actionTypes?.CHANGE_USER_STATUS, changeUserStatus);
    yield takeLeading(actionTypes?.CHANGE_USER_KYC_STATUS, changeUserKycStatus);
}
