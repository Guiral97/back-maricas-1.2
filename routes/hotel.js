let router = require('express').Router()
let { create, read, findOne, update, destroy} = require("../controllers/hotel")
const schema = require('../schemas/hotel');
const validator = require('../middlewares/validator');

router.post("/",validator(schema), create)
router.get("/", read)
router.get("/:id", findOne)
router.patch("/:id", update)
router.delete("/:id", destroy)


module.exports = router;