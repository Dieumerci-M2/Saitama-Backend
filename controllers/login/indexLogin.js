const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user.model');

const login = async(req, res) => {
    User.findOne({ where : { username : req.user.username }})
        .then(user => {
            if(!user){
                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
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
                    res.status(500).json({ err, message: "connection error" })
                  })
            })
    .catch(err => {
        res.status(500).json({ "error" : err, message : "erreur serveur"})
    });
    
}

module.exports = login;