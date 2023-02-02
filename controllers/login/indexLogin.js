const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Sequelize, DataTypes } = require('sequelize');
const User = require('../../models/user')(Sequelize, DataTypes);
// const { User } = require('../../models/sequelize');

const login = (req, res) => {
    User.findOne({ where : { email : req.body.email }})
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
                        token : jwt.sign(
                            {userId : user._id},
                            'USER_SAITAMA_MINDSET_RANDOM_TOKEN_SECRET',
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