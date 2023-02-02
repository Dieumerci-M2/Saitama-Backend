const express = require('express')
const controllersRegister =  require('../../controllers/register/indexRegister')
const controllersLogin = require('../../controllers/login/indexLogin');
const controllersResetPassword = require('../../controllers/resetPassword/resetControllers')
const getResetForm = require('../../controllers/resetPassword/getResetForm');
const contollersUpdatePassword = require('../../controllers/resetPassword/registerPasswordChange');
const authRoute = express.Router()

authRoute.post('/register', controllersRegister)
authRoute.post('/login', controllersLogin)
authRoute.post('/request-reset-password', controllersResetPassword)
authRoute.get('/reset-password/:id/:token', getResetForm)
authRoute.put('/reset-password/:id', contollersUpdatePassword)

module.exports = authRoute