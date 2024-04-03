import { combineReducers } from "redux";
import exampleReducer from "./exampleReducer";
import changeStateReducer from './changeStateReducer'
import skillReducer from './skillReducer'

const rootReducer = combineReducers({
    exampleReducer,
    changeStateReducer,
    skillReducer
});

export default rootReducer;
