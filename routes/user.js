let router = require('express').Router();
let { create, check} = require('../controllers/user');
const validator = require('../middlewares/validator');
const schema = require('../schemas/user');
const  accountExistsSignUp  = require('../middlewares/accountExistsSignUp');



router.post('/sign-up', validator(schema), accountExistsSignUp, create);
router.get('/verify/:code', check);


module.exports = router;
