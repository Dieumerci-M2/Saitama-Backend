const express = require('express')
const createControllers = require('../../../controllers/paiement/tron/createTransanctioncontrollers')
const getAllControllers  = require('../../../controllers/paiement/tron/getTransactionControllers')

const paiementRoute = express.Router()

paiementRoute.post('/create/tron', createControllers)

paiementRoute.get('/fetch/tron', getAllControllers)


module.exports = paiementRoute