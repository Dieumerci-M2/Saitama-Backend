const sequelize = require('../../models/sequelize')
const jwt = require('jsonwebtoken')
const JWT_RESET_KEY_SECRET = "the super secret to reset the password by sending a mail to the user.";
const sendermail = require('../../mail/sendermail');
const resetPasswordControllers = async (req, res) => {
	try {
        const user = await sequelize.user.findOne({ where : { email : req.body.email }})
        if(!user){
            return res.status(404).json({ message: 'user not found'})
        }
        const secret = JWT_RESET_KEY_SECRET + sequelize.user.password
        userData = {
            id : user.id,
            email: user.email,
        }
        const token = jwt.sign(userData, secret, {expiresIn : '15m'});
        const link = `http://localhost:8080/api/v1/reset-token/${user.id}/${token}`;
        // define the email options
        const mailOptions = {
            from: 'kananecompagny@gmail.com',
            to:sequelize.user.email,
            subject: 'Reset password !!',
            text: `Please click on this link to reset your password => ${link}`
        };

        // send the email
        const transpoter = transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
            console.error(error);
            } else {
            console.log(`Email sent: ${info.messageId}`);
            }
        });
        sendermail(transpoter)
        res.status(200).send(link);
    } catch (error) {
        res.status(500).json({ error: error })
    }

}

module.exports = resetPasswordControllers;