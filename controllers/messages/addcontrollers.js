const sequelize = require('../../models/sequelize')
const addControllers = async (req, res) => {
	try {
		const Mess = await sequelize.message.create(req.body)
			.then(async (response) => {
			return response.toJSON()
			}).catch((err) => {
				res.status(404).json({
				message : err
			})
			})
		if (Mess) {
			res.status(200).json({
				data: formation,
				message : "Votre message a bien été envoyé avec succes"
			})
		}
	} catch (error) {
		res.status(500).json({
			message : "error  intern server"
		})
	}
}
module.exports = addControllers