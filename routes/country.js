const router = require('express').Router();

// Controllers
const countryontroller = require('../controllers/country');

// @route   GET api/country/term
// @desc    Getting all countries by search term
router.get('/:term', countryontroller.getCountriesBySearchTerm);

module.exports = router;
