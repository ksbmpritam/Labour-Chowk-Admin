import * as actionTypes from "../actionTypes";

export const getAllJobList = payload => ({
    type: actionTypes.GET_ALL_JOB_LIST,
    payload
})

export const setAllJobList = payload => ({
    type: actionTypes.SET_ALL_JOB_LIST,
    payload
})
