const express = require('express');
const btnRouter = express.Router();
const btnController = require("../../controllers/btn/bitcoin")
const checkbtn = require("../../controllers/btn/checkbtn")

btnRouter.post('/btn', btnController)
btnRouter.post('/btn/checkbtn-trans', checkbtn)

module.exports = btnRouter;