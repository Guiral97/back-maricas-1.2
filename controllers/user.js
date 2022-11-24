const User = require('../models/User');
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const accountVerificationEmail = require('../middlewares/accountVerificationEmail')
const { userSignedUpResponse, userNotFoundResponse } = require('../responses/auth')

const controller = {

    create: async(req,res,next) => {
            let { name, lastName, photo, age, email, password } = req.body
            let role = 'admin'
            let verified = false
            let logged = false
            let code = crypto.randomBytes(10).toString('hex')
            password = bcryptjs.hashSync(password,10)
        try {
            await User.create({ name, lastName, photo, age, email, password, role, verified, logged, code })
            await accountVerificationEmail(email, code)
            return userSignedUpResponse(req,res)
        } catch(error) {
            next(error)
        }
    },

    check: async(req,res,next) => {
        let { code } = req.params

        try {
            let user = await User.findOneAndUpdate({ code: code }, { verified: true }, { new: true })
            if(user){
                return res.redirect('https://i.kym-cdn.com/photos/images/newsfeed/001/901/343/d49.jpg')
            }else{
                return userNotFoundResponse(req,res)
            }
        } catch(error) {
            next(error)
        }
    },
}

module.exports = controller;