const express = require('express')
const controllersRegister =  require('../../controllers/register/indexRegister')
const controllersLogin = require('../../controllers/login/indexLogin');
const authRoute = express.Router()

authRoute.post('/register', controllersRegister)
authRoute.post('/login', controllersLogin)

module.exports = authRoute