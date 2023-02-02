const express = require('express')
const addControllers = require('../../controllers/formation/addcontrollers')
const delteControllers = require('../../controllers/formation/deleteControllers')
const formationRoute = express.Router()

formationRoute.post('/create', addControllers)
formationRoute.delete('/delete',delteControllers)

module.exports = formationRoute