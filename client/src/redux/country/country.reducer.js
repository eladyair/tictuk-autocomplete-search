import { FETCH_RESULTS_SUCCESS, FETCH_RESULTS_FAILURE, CLEAR_COUNTRIES } from '../types';

const initialState = {
    countries: [],
    error: null
};

const countryReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_RESULTS_SUCCESS:
            return {
                ...state,
                countries: [...payload]
            };
        case CLEAR_COUNTRIES:
        case FETCH_RESULTS_FAILURE:
            return {
                ...state,
                countries: [],
                error: payload
            };
        default:
            return state;
    }
};

export default countryReducer;
