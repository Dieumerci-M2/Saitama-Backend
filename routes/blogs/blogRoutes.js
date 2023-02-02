const express = require('express')
const addControllers = require('../../controllers/blogs/addcontrollers')
const delteControllers = require('../../controllers/blogs/deleteControllers')
const fetchAllControllers = require('../../controllers/blogs/fetchControllers')
const updateControllers = require('../../controllers/blogs/updateControllers')
const blogsRoute = express.Router()

blogsRoute.post('/create/blog', addControllers)
blogsRoute.delete('/delete/blog', delteControllers)
blogsRoute.get('/fetch/blog', fetchAllControllers)
blogsRoute.patch('/update/blog',updateControllers)
module.exports =  blogsRoute