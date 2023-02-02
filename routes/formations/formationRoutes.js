const express = require('express')
const addControllers = require('../../controllers/formation/addcontrollers')
const delteControllers = require('../../controllers/formation/deleteControllers')
const fetchAllControllers = require('../../controllers/formation/fetchControllers')
const updateControllers = require('../../controllers/formation/updateControllers')
const formationRoute = express.Router()

formationRoute.post('/create', addControllers)
formationRoute.delete('/delete', delteControllers)
formationRoute.get('/fetch', fetchAllControllers)
formationRoute.patch('/update',updateControllers)

module.exports = formationRoute