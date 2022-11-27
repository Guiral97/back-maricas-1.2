let router = require('express').Router()
let { create, read, update, destroy } = require("../controllers/show")
const validator = require('../middlewares/validator');
const schema = require('../schemas/show');
const passport = require('../config/passport');

router.get("/", read);
router.post("/", passport.authenticate("jwt", { session: false }), validator(schema), create);
router.patch('/:id', update);
router.delete('/:id', destroy);

module.exports = router;