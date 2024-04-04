import * as actionTypes from "../actionTypes";

export const getSkill = payload => ({
    type: actionTypes?.GET_SKILL,
    payload
})

export const setSkill = payload => ({
    type: actionTypes.SET_SKILL,
    payload
})

export const createSkill = payload => ({
    type: actionTypes.CREATE_SKILL,
    payload
})

export const updateSkill = payload => ({
    type: actionTypes.UPDATE_SKILL,
    payload
})

export const deleteSkill = payload => ({
    type: actionTypes.DELETE_SKILL,
    payload
})

export const getSubSkill = payload => ({
    type: actionTypes?.GET_SUB_SKILL,
    payload
})

export const setSubSkill = payload => ({
    type: actionTypes.SET_SUB_SKILL,
    payload
})

export const createSubSkill = payload => ({
    type: actionTypes.CREATE_SUB_SKILL,
    payload
})

export const updateSubSkill = payload => ({
    type: actionTypes.UPDATE_SUB_SKILL,
    payload
})

export const deleteSubSkill = payload => ({
    type: actionTypes.DELETE_SUB_SKILL,
    payload
})
