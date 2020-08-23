import { FETCH_RESULTS_START, FETCH_RESULTS_SUCCESS, FETCH_RESULTS_FAILURE, CLEAR_COUNTRIES } from '../types';

export const fetchCountriesStart = term => ({
    type: FETCH_RESULTS_START,
    payload: term
});

export const fetchCountriesSuccess = countries => ({
    type: FETCH_RESULTS_SUCCESS,
    payload: countries
});

export const fetchCountriesFailure = error => ({
    type: FETCH_RESULTS_FAILURE,
    payload: error
});

export const clearCountries = () => ({
    type: CLEAR_COUNTRIES
});
