let router = require('express').Router();
let { create, read, findOne, update, destroy} = require('../controllers/city');
const schema = require('../schemas/city');
const validator = require('../middlewares/validator');

router.post('/',validator(schema), create);
router.get('/', read);
router.get("/:id",findOne)
router.put("/:id",update)
router.delete("/:id", destroy)

module.exports = router;
