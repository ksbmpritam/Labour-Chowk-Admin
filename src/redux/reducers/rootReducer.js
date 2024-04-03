import { combineReducers } from "redux";
import exampleReducer from "./exampleReducer";
import changeStateReducer from './changeStateReducer'

const rootReducer = combineReducers({
    exampleReducer,
    changeStateReducer,
});

export default rootReducer;
