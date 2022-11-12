let router = require('express').Router()
let { create, read, findOne, update } = require("../controllers/hotel")


router.post("/", create)
router.get("/", read)
router.get("/:id", findOne)
router.patch("/:id", update)


module.exports = router;