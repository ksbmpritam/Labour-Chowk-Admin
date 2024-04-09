import * as actionTypes from "../actionTypes";

const initialState = {
    allJobData: null,
};

const jobReducer = (state = initialState, actions) => {
    const { payload, type } = actions;

    switch (type) {
        case actionTypes.SET_ALL_JOB_LIST: {
            return {
                ...state,
                allJobData: payload,
            };
        }
        default: {
            return state;
        }
    }
};

export default jobReducer;
