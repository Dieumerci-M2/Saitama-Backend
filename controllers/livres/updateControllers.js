const sequelize = require('../../models/sequelize')
const updateControllers = async (req, res) => {
	try {
		const Livres = await sequelize.livre.findOne({
			where: {
				titre: req.query.titre
			}
		}).then(async (response) => {
			return response.toJSON()
		})
		if (Formation) {
			await sequelize.Livres.update(
				 req.body
			 ,
				{
					where: {
					titre : req.query.titre
				}
				}
			 )
			res.status(200).json({
				message : "cet livre a été modifiée avec succé"
			})
			
		} else {
			res.status(400).json({
				message : "Nous ne pouvons modifier cet livre car elle n'existe pas"
			})
		}
	} catch (error) {
		res.status(500).json({
			message : "error  intern server" + error
		})
	}
}
module.exports = updateControllers