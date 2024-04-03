import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from "../actionTypes";

const initialState = {
    categories: [],
    loading: false,
    error: null,
};

const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload,
            };
        case FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default exampleReducer;
