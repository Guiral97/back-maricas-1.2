let router = require('express').Router();
let {create, read, update, destroy  } = require('../controllers/itinerary');
const validator = require('../middlewares/validator');
const schema = require('../schemas/tinerary');
const passport = require('../config/passport');

router.get('/', read);
router.post('/', passport.authenticate("jwt", { session: false }), validator(schema), create);
router.put('/:id', update);
router.delete('/:id', destroy);


module.exports = router;
