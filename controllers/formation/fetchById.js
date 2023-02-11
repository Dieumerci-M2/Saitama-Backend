const sequelize = require('../../models/sequelize')
const fetchByIdControllers = async (req, res) => {
	try {
	const user = await sequelize.formation.findOne({
			where: {
				titre: req.query.titre
			}
		})
	console.log(user)
	if (user) {
		res.status(200).json({
			message: "success",
			data : user
		})
	} else {
		res.status(200).json({
			message : "no such   formation in our library"
		})
	}
} catch (error) {
	res.status(500).json({
		message : "failur no data" + error + " " + "il s'agit d'une erreur lieé au serveur"
	})
}
}
module.exports = fetchByIdControllers