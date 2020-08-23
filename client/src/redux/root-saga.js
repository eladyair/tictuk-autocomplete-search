import { all, call } from 'redux-saga/effects';

// Sagas
import { countrySagas } from './sagas/country.sagas';

export default function* rootSaga() {
    yield all([call(countrySagas)]);
}
