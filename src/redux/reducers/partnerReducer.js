import * as actionTypes from "../actionTypes";

const initialState = {
    allPartnerData: [],
    activePartnerData: [],
    bannedPartnerData: [],
    singlePartnerData: null,
    partnerWorkData: [],
    partnerBiddingData: [],
};

const partnerReducer = (state = initialState, actions) => {
    const { payload, type } = actions;

    switch (type) {
        case actionTypes.SET_ALL_PARTNER: {
            return {
                ...state,
                allPartnerData: payload,
            };
        }
        case actionTypes.SET_ACTIVE_PARTNER: {
            return {
                ...state,
                activePartnerData: payload,
            };
        }
        case actionTypes.SET_BANNED_PARTNER: {
            return {
                ...state,
                bannedPartnerData: payload,
            };
        }
        case actionTypes.SET_PARTNER_BY_ID: {
            return {
                ...state,
                singlePartnerData: payload,
            };
        }
        case actionTypes.SET_PARTNER_WORK_BY_PARTNER_ID: {
            return {
                ...state,
                partnerWorkData: payload,
            };
        }
        case actionTypes.SET_BIDDING_LIST_BY_PARTNER_ID: {
            return {
                ...state,
                partnerBiddingData: payload,
            };
        }
        default: {
            return state;
        }
    }
};

export default partnerReducer;
