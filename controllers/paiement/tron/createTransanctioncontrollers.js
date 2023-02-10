const sequelize = require('../../../models/sequelize')
const addControllers = async (req, res) => {
	try {
		const Paiement = await sequelize.tronPaiement.create(req.body)
			.then(async (response) => {
			return response.toJSON()
			}).catch((err) => {
				res.status(404).json({
				message : err
			})
			})
		if (Paiement) {
			res.status(200).json({
				data: formation,
				message : "Votre transaction tron a été fais avec succés"
			})
		}
	} catch (error) {
		res.status(500).json({
			message : "error  intern server"
		})
	}
}
module.exports = addControllers