import * as actionTypes from "../actionTypes";

const initialState = {
    skillData: null,
    subSkillData: null,
};

const skillReducer = (state = initialState, actions) => {
    const { payload, type } = actions;

    switch (type) {
        case actionTypes.SET_SKILL: {
            return {
                ...state,
                skillData: payload,
            };
        }
        case actionTypes.SET_SUB_SKILL: {
            return {
                ...state,
                subSkillData: payload,
            };
        }
        default: {
            return state;
        }
    }
};

export default skillReducer;
