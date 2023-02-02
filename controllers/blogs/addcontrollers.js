const sequelize = require('../../models/sequelize')
const addControllers = async (req, res) => {
	try {
		const Blog = await sequelize.blog.create(req.body)
			.then(async (response) => {
			return response.toJSON()
			}).catch((err) => {
				res.status(404).json({
				message : err
			})
			})
		if (Blog) {
			res.status(200).json({
				data: formation,
				message : "Votre blog a été ajouté avec succes"
			})
		}
	} catch (error) {
		res.status(500).json({
			message : "error  intern server"
		})
	}
}
module.exports = addControllers