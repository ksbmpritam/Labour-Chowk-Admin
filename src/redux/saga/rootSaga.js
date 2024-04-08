import { all } from 'redux-saga/effects';
import skillSaga from './skillSaga';
import partnerSaga from './partnerSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
    yield all([
        skillSaga(),
        partnerSaga(),
        userSaga()
    ]);
}
