const User = require('../../models/user')
const {sequelize,DataTypes} = require('sequelize')
const controllersoFregister = async (req, res) => {
	try {
		const { username, email, password } = await req.body
		const user = new User(sequelize, DataTypes)
		
		if (username && email && password) {
			User.create({
				username,
				email,
				password
			})
			
		}
		
	} catch (error) {
		console.log(error)
	}
}
module.exports = controllersoFregister