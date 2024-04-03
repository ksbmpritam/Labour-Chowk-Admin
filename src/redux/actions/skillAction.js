import * as actionTypes from "../actionTypes";

export const getSkill = payload => ({
    type: actionTypes?.GET_SKILL,
    payload
})

export const setSkill = payload => ({
    type: actionTypes.SET_SKILL,
    payload
})

export const deleteSkill = payload => ({
    type: actionTypes.DELETE_SKILL,
    payload
})
