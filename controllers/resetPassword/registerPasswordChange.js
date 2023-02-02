const sequelize = require('../../models/sequelize')
const bcrypt = require('bcrypt')

const updatepassword = async (req, res) => {
  const password = req.body.password
  const id = req.params
  const user = await sequelize.user.findOne({ where : { id : req.params.id }})
    if(!user){
        res.status(404).json({ message: "L'utilisateur n'existe pas !"})
    }
	const hash = await bcrypt.hash(password, 10)
    const data = sequelize.user.update({ password : hash }, { where : { id : req.params.id }})
    res.status(200).json({message : "Password updated successfully !"})

}

module.exports = updatepassword;