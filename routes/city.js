let router = require('express').Router();
let { create, read, findOne} = require('../controllers/city');


router.post('/', create);
router.get('/', read);
router.get("/:id",findOne)


module.exports = router;
