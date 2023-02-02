const express = require('express')
const addControllers = require('../../controllers/newsLetters/addcontrollers')
const delteControllers = require('../../controllers/newsLetters/deleteControllers')
const fetchAllControllers = require('../../controllers/newsLetters/fetchControllers')
const letterRoute = express.Router()

letterRoute.post('/create/letter', addControllers)
letterRoute.delete('/delete/letter', delteControllers)
letterRoute.get('/fetch/letter', fetchAllControllers)
module.exports = letterRoute