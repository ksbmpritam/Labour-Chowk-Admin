import * as actionTypes from "../actionTypes";

export const getBanner = payload => ({
    type: actionTypes.GET_BANNER,
    payload
})

export const setBanner = payload => ({
    type: actionTypes.SET_BANNER,
    payload
})

export const createBanner = payload => ({
    type: actionTypes.CREATE_BANNER,
    payload
})


export const updateBanner = payload => ({
    type: actionTypes.UPDATE_BANNER,
    payload
})

export const deleteBanner = payload => ({
    type: actionTypes.DELETE_BANNER,
    payload
})

