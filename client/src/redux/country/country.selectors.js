import { createSelector } from 'reselect';

const selectCountry = state => state.country;

export const selectCountriesResults = createSelector([selectCountry], country => country.countries);
