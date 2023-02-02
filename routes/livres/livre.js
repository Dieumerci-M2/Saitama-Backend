const express = require('express')
const addControllers = require('../../controllers/livres/addcontrollers')
const delteControllers = require('../../controllers/livres/deleteControllers')
const fetchAllControllers = require('../../controllers/livres/fetchControllers')
const updateControllers = require('../../controllers/livres/updateControllers')
const bookRoute = express.Router()

bookRoute.post('/create/book', addControllers)
bookRoute.delete('/delete/book', delteControllers)
bookRoute.get('/fetch/book', fetchAllControllers)
bookRoute.patch('/update/book',updateControllers)

module.exports = bookRoute