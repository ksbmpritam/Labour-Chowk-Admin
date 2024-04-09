import * as actionTypes from "../actionTypes";

export const getAllBiddingList = payload => ({
    type: actionTypes.GET_ALL_BIDDING_LIST,
    payload
})

export const setAllBiddingList = payload => ({
    type: actionTypes.SET_ALL_BIDDING_LIST,
    payload
})
