const sequelize = require('../../models/sequelize')
const jwt = require('jsonwebtoken')
const JWT_RESET_KEY_SECRET = "the super secret to reset the password by sending a mail to the user.";
const resetPasswordControllers = async (req, res) => {
	try {
        const user = await sequelize.user.findOne({ email: req.body.email})
        if(!user){
            return res.status(404).json({ message: 'user not found'})
        }
        const secret = JWT_RESET_KEY_SECRET + sequelize.user.password
        userData = {
            id : user.id,
            email: user.email,
        }
        const token = jwt.sign(userData, secret, {expiresIn : '15m'});
        const link = `http://localhost:8080/reset-token/${user.id}/${token}`;
        res.status(200).send(link);
    } catch (error) {
        res.status(500).json({ error: error })
    }

}

module.exports = resetPasswordControllers;