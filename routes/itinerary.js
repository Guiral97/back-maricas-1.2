let router = require('express').Router();
let { create, read, update, destroy } = require('../controllers/itinerary');
const verifyUser = require('../middlewares/verifyUser');
const validator = require('../middlewares/validator');
const schema = require('../schemas/tinerary');
const passport = require('../config/passport');
const Itinerary = require('../models/Itinerary');

router.get('/', read);
router.post('/', passport.authenticate("jwt", { session: false }), validator(schema), create);
router.put('/:id', passport.authenticate("jwt", { session: false }), verifyUser(Itinerary), update);
router.delete('/:id', passport.authenticate("jwt", { session: false }), verifyUser(Itinerary), destroy);


module.exports = router;
