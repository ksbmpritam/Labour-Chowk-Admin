import * as actionTypes from "../actionTypes";

export const getAllUser = payload => ({
    type: actionTypes?.GET_ALL_USER,
    payload
})

export const setAllUser = payload => ({
    type: actionTypes.SET_ALL_USER,
    payload
})

export const getActiveUser = payload => ({
    type: actionTypes?.GET_ACTIVE_USER,
    payload
})

export const setActiveUser = payload => ({
    type: actionTypes.SET_ACTIVE_USER,
    payload
})

export const getBannedUser = payload => ({
    type: actionTypes?.GET_BANNED_USER,
    payload
})

export const setBannedUser = payload => ({
    type: actionTypes.SET_BANNED_USER,
    payload
})

export const getUserById = payload => ({
    type: actionTypes?.GET_USER_BY_ID,
    payload
})

export const setUserById = payload => ({
    type: actionTypes.SET_USER_BY_ID,
    payload
})

export const changeUserStatus = payload => ({
    type: actionTypes.CHANGE_USER_STATUS,
    payload
})

export const changeUserKycStatus = payload => ({
    type: actionTypes.CHANGE_USER_KYC_STATUS,
    payload
})

export const updateUser = payload => ({
    type: actionTypes.UPDATE_USER,
    payload
})

export const deleteUser = payload => ({
    type: actionTypes.DELETE_USER,
    payload
})

export const getJobListByUserId = payload => ({
    type: actionTypes.GET_JOB_LIST_BY_USER_ID,
    payload
})

export const setJobListByUserId = payload => ({
    type: actionTypes.SET_JOB_LIST_BY_USER_ID,
    payload
})
