import axios from 'axios';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { FETCH_RESULTS_START } from '../types';
import { fetchCountriesSuccess, fetchCountriesFailure } from '../country/country.actions';

export function* onFetchResultsStart() {
    yield takeLatest(FETCH_RESULTS_START, onFetchResultsAsync);
}

export function* onFetchResultsAsync({ payload }) {
    try {
        const res = yield axios.get(`/api/country/${payload}`);

        yield put(fetchCountriesSuccess(res.data));
    } catch (error) {
        yield put(fetchCountriesFailure(error));
    }
}

export function* countrySagas() {
    yield all([call(onFetchResultsStart)]);
}
