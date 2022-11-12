let router = require('express').Router();
let { create, read, findOne, update} = require('../controllers/city');


router.post('/', create);
router.get('/', read);
router.get("/:id",findOne)
router.put("/:id",update)


module.exports = router;
