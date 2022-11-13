let router = require('express').Router()
let { create, read, update, destroy } = require("../controllers/show")

router.get("/", read);
router.post("/", create);
router.patch('/:id', update);
router.delete('/:id', destroy);

module.exports = router;