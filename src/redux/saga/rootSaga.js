import { all } from 'redux-saga/effects';
import exampleSaga from './exampleSaga';
import skillSaga from './skillSaga';
import partnerSaga from './partnerSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
    yield all([
        exampleSaga(),
        skillSaga(),
        partnerSaga(),
        userSaga()
    ]);
}
