const JWT_RESET_KEY_SECRET = require('./resetControllers')

const verifyResetToken = (req, res) => {
    const { id, token } = req.params
    res.send(token)
    res.send(id)
}

module.exports = verifyResetToken