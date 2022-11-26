const User = require('../models/User');
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const accountVerificationEmail = require('../middlewares/accountVerificationEmail')
const { userSignedUpResponse, userNotFoundResponse, invalidCredentialsResponse, userSignedOutResponse } = require('../responses/auth')

const controller = {

    create: async (req, res, next) => {
        let { name, lastName, photo, age, email, password } = req.body
        let role = 'user'
        let verified = false
        let logged = false
        let code = crypto.randomBytes(10).toString('hex')
        password = bcryptjs.hashSync(password, 10)
        try {
            await User.create({ name, lastName, photo, age, email, password, role, verified, logged, code })
            await accountVerificationEmail(email, code)
            return userSignedUpResponse(req, res)
        } catch (error) {
            next(error)
        }
    },

    check: async (req, res, next) => {
        let { code } = req.params

        try {
            let user = await User.findOneAndUpdate({ code: code }, { verified: true }, { new: true })
            if (user) {
                return res.redirect('https://i.kym-cdn.com/photos/images/newsfeed/001/901/343/d49.jpg')
            } else {
                return userNotFoundResponse(req, res)
            }
        } catch (error) {
            next(error)
        }
    },

    login: async (req, res, next) => {
        let { password } = req.body
        let { user } = req
        try {      
            const checkPassword = bcryptjs.compareSync(password, user.password)
            if (checkPassword) {
                const userDb = await User.findOneAndUpdate({ email: user.email }, { logged: true }, { new: true })
                const token = jwt.sign(
                    { id: userDb.id, name: userDb.name, photo: userDb.photo, logged: userDb.logged },
                    process.env.KEY_JWT,
                    { expiresIn: 60 * 60 * 24 }
                )
                    
                user = {
                    name: user.name,
                    role: user.role,
                    email: user.email,
                    photo: user.photo
                }
                return res.status(200).json({
                    response: { user, token },
                    success: true,
                    message: 'Welcome ' + user.name
                })
            }
            return invalidCredentialsResponse(req, res)
        } catch (error) {
            next(error)
        }
    },
    loginWithToken: async (req, res, next) => {
        let { user } = req

        try {
            return res.json({
                response: { user },
                success: true,
                message: 'Welcome! ' + user.name
            })
        } catch (error) {
            next(error)
        }
    },
    logout: async (req, res, next) => {
        const { email } = req.user 
        try {
            await User.findOneAndUpdate(
                { email }, 
                { logged: false }, 
                { new: true } 

            )
            return userSignedOutResponse(req,res) 
        } catch (error) {
            next(error)
        }
    },
}

module.exports = controller;