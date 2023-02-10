const express = require('express');
const bitcoinController = require("../../controllers/bitcoin/bitcoin")
const bitcoinRouter = express.Router();
//const sequelize = require('../../models/sequelize');

bitcoinRouter.post('/constumer', bitcoinController)

module.children = bitcoinRouter