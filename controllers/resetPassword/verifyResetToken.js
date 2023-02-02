const JWT_RESET_KEY_SECRET = require('./resetControllers')

const verifyResetToken = (req, res) => {
    const { id, token } = req.params
    res.status(200).json(token)
    res.status(200).json(id)
}

module.exports = verifyResetToken