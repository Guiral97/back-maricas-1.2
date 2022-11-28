let router = require('express').Router();
let { create, check, login, loginWithToken, logout, findOne, update } = require('../controllers/user');
const validator = require('../middlewares/validator');
const schema = require('../schemas/user');
const schemaLogin = require('../schemas/userLogin');
const accountExistsSignUp = require('../middlewares/accountExistsSignUp');
const accountExistsSignIn = require('../middlewares/accountExistsSignIn');
const accountHasBeenVerified = require('../middlewares/accountHasBeenVerified');
const mustSignIn = require('../middlewares/mustSignIn');
const passport = require('../config/passport');


router.post('/sign-up', validator(schema), accountExistsSignUp, create);
router.post('/sign-in', validator(schemaLogin), accountExistsSignIn, accountHasBeenVerified, login)
router.get('/verify/:code', check);
router.post('/token', passport.authenticate('jwt', { session: false }), mustSignIn, loginWithToken)
router.post('/sign-out', passport.authenticate('jwt', { session: false }), logout)
router.get('/me/:id', findOne)
router.patch('/me/:id', update)

module.exports = router;
            