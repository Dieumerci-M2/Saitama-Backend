const express = require('express')
const controllersRegister =  require('../../controllers/register/indexRegister')
const controllersLogin = require('../../controllers/login/indexLogin');
const controllersResetPassword = require('../../controllers/resetPassword/resetControllers')
const controllersverifyResetToken = require('../../controllers/resetPassword/verifyResetToken');
const authRoute = express.Router()

authRoute.post('/register', controllersRegister)
authRoute.post('/login', controllersLogin)
authRoute.post('/reset-password', controllersResetPassword)
authRoute.get('/reset-password/:id/:token', controllersverifyResetToken)

module.exports = authRoute