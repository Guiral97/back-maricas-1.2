const User = require("../models/User");
const { userExistsResponse } = require("../responses/auth");

async function accountExistsSignUp(req, res, next) {
    const user = await User.findOne({email: req.body.email})
    console.log(user)
    if (user) {
        return userExistsResponse(req,res)
    }
    return next()
}

module.exports = accountExistsSignUp
