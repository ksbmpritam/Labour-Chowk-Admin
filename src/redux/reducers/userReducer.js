import * as actionTypes from "../actionTypes";

const initialState = {
    allUserData: [],
    activeUserData: [],
    bannedUserData: [],
    singleUserData: null,
};

const userReducer = (state = initialState, actions) => {
    const { payload, type } = actions;

    switch (type) {
        case actionTypes.SET_ALL_USER: {
            return {
                ...state,
                allUserData: payload,
            };
        }
        case actionTypes.SET_ACTIVE_USER: {
            return {
                ...state,
                activeUserData: payload,
            };
        }
        case actionTypes.SET_BANNED_USER: {
            return {
                ...state,
                bannedUserData: payload,
            };
        }
        case actionTypes.SET_USER_BY_ID: {
            return {
                ...state,
                singleUserData: payload,
            };
        }
        default: {
            return state;
        }
    }
};

export default userReducer;
