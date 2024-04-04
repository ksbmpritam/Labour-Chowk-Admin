import { combineReducers } from "redux";
import exampleReducer from "./exampleReducer";
import changeStateReducer from './changeStateReducer'
import skillReducer from './skillReducer'
import partnerReducer from './partnerReducer'

const rootReducer = combineReducers({
    exampleReducer,
    changeStateReducer,
    skillReducer,
    partnerReducer
});

export default rootReducer;
