const express = require('express');
const btnRouter = express.Router();
const bitcoinController = require("../../controllers/btn/bitcoin")
const checkbtn = require("../../controllers/btn/checkbtn")

btnRouter.post('/btn', bitcoinController)
btnRouter.post('/btn/checkbtn-trans', checkbtn)

module.exports = btnRouter;