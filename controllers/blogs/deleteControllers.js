const sequelize = require('../../models/sequelize')
const delteControllers = async (req, res) => {
	try {
		const Blog = await sequelize.blog.findOne({
			where: {
				titre: req.query.titre
			}
		}).then(async (response) => {
			return response.toJSON()
		})
		if (Blog) {
			 await sequelize.blog.destroy({
				where: {
					titre : req.query.titre
				}
			 })
			res.status(200).json({
				message : "cette formation a été suprimé avec succé"
			})
			
		} else {
			res.status(400).json({
				message : "Nous ne pouvons supprimer cette formation car elle n'existe pas"
			})
		}
	} catch (error) {
		res.status(500).json({
			message : "error  intern server"
		})
	}
}
module.exports = delteControllers