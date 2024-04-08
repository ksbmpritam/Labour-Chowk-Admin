import { combineReducers } from "redux";
import changeStateReducer from './changeStateReducer';
import skillReducer from './skillReducer';
import partnerReducer from './partnerReducer';
import userReducer from './userReducer';
import commonReducer from './commonReducer';

const rootReducer = combineReducers({
    changeStateReducer,
    skillReducer,
    partnerReducer,
    userReducer,
    commonReducer
});

export default rootReducer;
