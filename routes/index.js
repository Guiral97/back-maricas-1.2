let router = require('express').Router();
let user = require('./user');
let city = require('./city');
let itinerary = require('./itinerary');
let hotel = require('./hotel')



router.use('/api/users', user);
router.use('/api/cities', city);
router.use('/api/itineraries', itinerary);
router.use('/api/hotels', hotel)


module.exports = router;
