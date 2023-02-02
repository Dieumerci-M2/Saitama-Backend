const sequelize = require('../../models/sequelize')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const controllersoFregister = async (req, res) => {
	let userAUth,hash,token
	try {
		const { username, email, password } = await req.body
		const userExist = await sequelize.user.findOne({
			where: { email: email }
		})
		if (userExist) {
			res.status(404).json({
				message : "Cet utilisateur existe déjà, veuillez modifier et reessayer"
			})
		} else {
			if (username && email && password) {
			if (password) {
				 hash = await bcrypt.hash(password, 10)
				
			}
			
		 userAUth= await sequelize.user.create({
				username,
				email,
				password : hash
		}).then(async (response) => {
				return  await response.toJSON()
		})
			 .catch(async (error) => {
				 res.status(404).json({
					 message: "Resssources non trouvé" + error
				})
			 })
			
			if (userAUth) {
				token = jsonwebtoken.sign({ username, email }, "Male-dev", { expiresIn: "30d" })
			}
			if (token) {
				res.status(200).json({
					data: {
						username,
						email,
						token
					}
				})
			}
			
		}
		}
		
		
		
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message : "il s'agit d'une erreur liée au serveur interne" + error
		})
	}
}
module.exports = controllersoFregister