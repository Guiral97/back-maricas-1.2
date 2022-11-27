let router = require('express').Router()
let { create, read, findOne, update, destroy} = require("../controllers/hotel")
const schema = require('../schemas/hotel');
const Hotel = require('../models/Hotel');
const passport = require('../config/passport');
const validator = require('../middlewares/validator');
const verifyUser = require('../middlewares/verifyUser');

router.post("/",validator(schema), create)
router.get("/", read)
router.get("/:id", findOne)
router.patch("/:id", passport.authenticate("jwt", { session: false }), verifyUser(Hotel), update)
router.delete("/:id", passport.authenticate("jwt", { session: false }), verifyUser(Hotel), destroy)


module.exports = router;