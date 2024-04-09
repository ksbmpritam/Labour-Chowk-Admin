import { combineReducers } from "redux";
import changeStateReducer from './changeStateReducer';
import skillReducer from './skillReducer';
import partnerReducer from './partnerReducer';
import userReducer from './userReducer';
import commonReducer from './commonReducer';
import jobReducer from './jobReducer';
import biddingReducer from './biddingReducer';

const rootReducer = combineReducers({
    changeStateReducer,
    skillReducer,
    partnerReducer,
    userReducer,
    commonReducer,
    jobReducer,
    biddingReducer
});

export default rootReducer;
