import * as actionTypes from "../actionTypes";

const initialState = {
    allBiddingData: null,
};

const biddingReducer = (state = initialState, actions) => {
    const { payload, type } = actions;

    switch (type) {
        case actionTypes.SET_ALL_BIDDING_LIST: {
            return {
                ...state,
                allBiddingData: payload,
            };
        }
        default: {
            return state;
        }
    }
};

export default biddingReducer;
