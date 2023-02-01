const express = require('express')
const controllersRegister =  require('../../controllers/register/indexRegister')
const authRoute = express.Router()

authRoute.post('/register',controllersRegister)

module.exports = authRoute