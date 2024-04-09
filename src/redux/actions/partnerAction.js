import * as actionTypes from "../actionTypes";

export const getAllPartner = payload => ({
    type: actionTypes?.GET_ALL_PARTNER,
    payload
})

export const setAllPartner = payload => ({
    type: actionTypes.SET_ALL_PARTNER,
    payload
})

export const getActivePartner = payload => ({
    type: actionTypes?.GET_ACTIVE_PARTNER,
    payload
})

export const setActivePartner = payload => ({
    type: actionTypes.SET_ACTIVE_PARTNER,
    payload
})

export const getBannedPartner = payload => ({
    type: actionTypes?.GET_BANNED_PARTNER,
    payload
})

export const setBannedPartner = payload => ({
    type: actionTypes.SET_BANNED_PARTNER,
    payload
})

export const getPartnerById = payload => ({
    type: actionTypes?.GET_PARTNER_BY_ID,
    payload
})

export const setPartnerById = payload => ({
    type: actionTypes.SET_PARTNER_BY_ID,
    payload
})

export const changePartnerStatus = payload => ({
    type: actionTypes.CHANGE_PARTNER_STATUS,
    payload
})

export const changePartnerKycStatus = payload => ({
    type: actionTypes.CHANGE_PARTNER_KYC_STATUS,
    payload
})

export const updatePartner = payload => ({
    type: actionTypes.UPDATE_PARTNER,
    payload
})

export const deletePartner = payload => ({
    type: actionTypes.DELETE_PARTNER,
    payload
})

export const getPartnerWorkByPartnerId = payload => ({
    type: actionTypes.GET_PARTNER_WORK_BY_PARTNER_ID,
    payload
})

export const setPartnerWorkByPartnerId = payload => ({
    type: actionTypes.SET_PARTNER_WORK_BY_PARTNER_ID,
    payload
})

export const deletePartnerWorkByWorkId = payload => ({
    type: actionTypes.DELETE_PARTNER_WORK_BY_WORK_ID,
    payload
})

export const getBiddingListByPartnerId = payload => ({
    type: actionTypes.GET_BIDDING_LIST_BY_PARTNER_ID,
    payload
})

export const setBiddingListByPartnerId = payload => ({
    type: actionTypes.SET_BIDDING_LIST_BY_PARTNER_ID,
    payload
})
