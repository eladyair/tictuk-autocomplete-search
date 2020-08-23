import React, { Fragment, useState, useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCountriesStart, clearCountries } from '../../redux/country/country.actions';
import { selectCountriesResults } from '../../redux/country/country.selectors';

// Styles
import './auto-complete.styles.scss';

// Custom Hooks
import { useDebounce } from '../../custom-hooks/custom-hooks';

// Components
import ListItems from '../list-items/list-items';

const AutoComplete = ({ countries, fetchCountries, clearCountries }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Getting the final search term (when the user finish typing)
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        // call fetch here
        if (debouncedSearchTerm) {
            fetchCountries(searchTerm);
            console.log('Final Term: ', searchTerm);
        } else {
            clearCountries();
        }
    }, [debouncedSearchTerm]);

    const handleChange = e => {
        const { value } = e.target;
        setSearchTerm(value);
    };

    return (
        <Fragment>
            <div className='autocomplete-container'>
                <input type='text' className='autocomplete-input' placeholder='Search...' onChange={handleChange} value={searchTerm} />
            </div>
            {<ListItems results={countries} />}
        </Fragment>
    );
};

const mapStateToProps = createStructuredSelector({
    countries: selectCountriesResults
});

const mapDispatchToProps = dispatch => ({
    fetchCountries: searchTerm => dispatch(fetchCountriesStart(searchTerm)),
    clearCountries: () => dispatch(clearCountries())
});

export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);
