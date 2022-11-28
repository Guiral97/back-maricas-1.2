let router = require('express').Router()
let { create, read, update, destroy } = require("../controllers/show")
const verifyUser = require('../middlewares/verifyUser');
const validator = require('../middlewares/validator');
const schema = require('../schemas/show');
const passport = require('../config/passport');
const Show = require('../models/Show');

router.get("/", read);
router.post("/", passport.authenticate("jwt", { session: false }), validator(schema), create);
router.patch('/:id', passport.authenticate("jwt", { session: false }), verifyUser(Show), update);
router.delete('/:id', passport.authenticate("jwt", { session: false }), verifyUser(Show), destroy);


module.exports = router;