let router = require('express').Router();
let { create, read, findOne, update, destroy} = require('../controllers/city');
const schema = require('../schemas/city');
const validator = require('../middlewares/validator');
const City = require('../models/City');
const passport = require('../config/passport');
const verifyUser = require('../middlewares/verifyUser');

router.post('/',validator(schema), create);
router.get('/', read);
router.get("/:id",findOne)
router.put("/:id", passport.authenticate("jwt", { session: false }), verifyUser(City), update)
router.delete("/:id", passport.authenticate("jwt", { session: false }), verifyUser(City), destroy)

module.exports = router;
