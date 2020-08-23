const countries = require('../data/countires');

exports.getCountriesBySearchTerm = async (req, res) => {
    try {
        let term = req.params.term;
        let foundCountries;

        foundCountries = countries.filter(country => country.name.toLowerCase().indexOf(term.toLowerCase()) >= 0);

        // Returning the broker authentication
        return res.json(foundCountries);
    } catch (error) {
        return res.status(500).json({ msg: err.message });
    }
};
