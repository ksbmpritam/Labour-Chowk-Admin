import { combineReducers } from "redux";
import exampleReducer from "./exampleReducer";
import changeStateReducer from './changeStateReducer'
import skillReducer from './skillReducer'
import partnerReducer from './partnerReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    exampleReducer,
    changeStateReducer,
    skillReducer,
    partnerReducer,
    userReducer
});

export default rootReducer;
