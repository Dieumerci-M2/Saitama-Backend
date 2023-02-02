const sequelize = require('../../models/sequelize')

const fetchAllControllers = async (req,res) => {
	try {
		const user = await sequelize.livre.findAll()
		if (user) {
			res.status(200).json({
				data: user,
				message : "success"
			})
		}
	} catch (error) {
		res.status(500).json({
			message : "error server intern" + error
		})
	}
}

module.exports= fetchAllControllers