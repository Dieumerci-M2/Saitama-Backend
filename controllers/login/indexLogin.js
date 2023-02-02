const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sequelize = require('../../models/sequelize');
const JWT_LOGIN_TOKEN = 'USER_SAITAMA_MINDSET_RANDOM_TOKEN_SECRET';

const login = (req, res) => {
    sequelize.user.findOne({ where : { email : req.body.email }})
        .then(user => {
            if(!user){
                return res.status(404).json({ message: 'l\'utilisateur n\'existe pas !'});
            }
            bcrypt.compare(req.body.password, user.password)
                  .then(valid => {
                    if(!valid){
                        return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                    }
                    res.status(200).json({
                        id : user.id,
                        username : user.username,
                        email : user.email,
                        token : jwt.sign(
                            {userId : user._id},
                            JWT_LOGIN_TOKEN,
                            { expiresIn: '24h' }
                        )
                    })
                  })
                  .catch(err => {
                    res.status(500).json({ err, message: "Erreur de connexion !" })
                  })
            })
    .catch(err => {
        res.status(500).json({ "error" : err, message : "erreur serveur"})
    });
    
}

module.exports = login;