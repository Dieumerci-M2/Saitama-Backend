const sequelize = require('../../models/sequelize')
const delteControllers = async (req, res) => {
	try {
		const Formation = await sequelize.letter.findOne({
			where: {
				titre: req.query.titre
			}
		}).then(async (response) => {
			return response.toJSON()
		})
		if (Formation) {
			 await sequelize.letter.destroy({
				where: {
					titre : req.query.titre
				}
			 })
			res.status(200).json({
				message : "cet message  a été suprimé avec succé"
			})
			
		} else {
			res.status(400).json({
				message : "Nous ne pouvons supprimer cet message car il n'existe pas"
			})
		}
	} catch (error) {
		res.status(500).json({
			message : "error  intern server"
		})
	}
}
module.exports = delteControllers