const express = require('express')
const addControllers = require('../../controllers/messages/addcontrollers')
const delteControllers = require('../../controllers/messages/deleteControllers')
const fetchAllControllers = require('../../controllers/messages/fetchControllers')
const messageRoute = express.Router()

messageRoute.post('/create/message', addControllers)
messageRoute.delete('/delete/message', delteControllers)
messageRoute.get('/fetch/message', fetchAllControllers)
module.exports = messageRoute