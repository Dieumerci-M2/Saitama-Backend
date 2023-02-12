const {Sequelize, DataTypes} = require('sequelize')

const userModel = require('./users/user')
const blogModel = require('../models/blogs/Modelblogs')
const livreModel = require('../models/livres/livresModel')
const newsletterModel = require('../models/newsletter/newsletter')
const messageModel = require('../models/messages/messageModel')
const formationModel = require('../models/formation/formationModel')
const btnModel = require('../models/btnModel/btnmodel')
const paiementModel = require('../models/paiement/tron/tronModel')
const sequelize = new Sequelize(
    'saitama',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mariadb',
        dialectOption: {
            timezone: 'Etc/GMT+2'
        },
        logging: false
    }
)

const user = userModel(sequelize, DataTypes)
const blog = blogModel(sequelize, DataTypes)
const livre = livreModel(sequelize, DataTypes)
const message = messageModel(sequelize, DataTypes)
const letter = newsletterModel(sequelize, DataTypes)
const formation = formationModel(sequelize, DataTypes)
const btn = btnModel(sequelize, DataTypes) 
const tronPaiement = paiementModel(sequelize, DataTypes)


const initDb = ()=>{
    return sequelize.sync({force: true}).then(()=>{
            user.create({
                id: 1,
				username: 'leade',
				email : "leader@gmail.com",
                password: 'hash'
            })
        formation.create({
            id: 1,
            titre: "saitama",
            description: "il s'agit d'un livre de publication au niveau du backend qui est tres important qui vous permet surement de beaucoup de chose sur le crypto",
            prix: '200$',
            contenu:"mindser",
            pic : "https://images.app.goo.gl/9dRW3X8u4o1PA2Zp9"
        })
        blog.create({
            id: 1,
            titre: "saitama",
            description: "il s'agit d'un livre de publication au niveau du backend qui est tres important qui vous permet surement de beaucoup de chose sur le crypto",
            contenu:"mindser",
            pic: "https://images.app.goo.gl/9dRW3X8u4o1PA2Zp9"
        })
        livre.create({
            id: 1,
            titre: "saitama",
            description: "il s'agit d'un livre de publication au niveau du backend qui est tres important qui vous permet surement de beaucoup de chose sur le crypto",
            prix: '200$',
             contenu:"mindset",
            pic : "https://images.app.goo.gl/9dRW3X8u4o1PA2Zp9"
        })
        letter.create({
            id: 1,
            email : "malo@getMaxListeners.com"
        })
        message.create({
            id: 1,
            prenom: "saitama",
            nom: "malo-dev",
               email: 'leadermushio@377.com',
               number: "+33444555445",
               message: "hey i am malo dev",
            sujet : "checked"
        })
        
        console.log(`la base de données à était bien synchroniser`);
    }).catch(err => {
        console.log(err);
    })
}

module.exports = { initDb, user, formation, livre,blog,message,letter, btn, tronPaiement};
