const User = require("../models/User");
const { invalidCredentialsResponse } = require("../responses/auth");

async function accountExistsSignIn(req, res, next) {
    const user = await User.findOne({email: req.body.email})
    if (user) {
        req.user = user
        return next()
    }
    invalidCredentialsResponse(req,res)
}

module.exports = accountExistsSignIn 
