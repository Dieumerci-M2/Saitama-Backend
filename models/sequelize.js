const {Sequelize, DataTypes} = require('sequelize')

const userModel = require('../models/user')
const formationModel = require('../models/formation/formationModel')
const bcrypt = require('bcrypt')
// Configure Sequelize ORM
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

let user = userModel(sequelize, DataTypes)
let formation = formationModel(sequelize, DataTypes)

const initDb = ()=>{
    return sequelize.sync({force: true}).then(()=>{
            user.create({
                id: 1,
				userName: 'leade',
				email : "leader@gmail.com",
                password: 'hash'
            })
        formation.create({
            id: 1,
            titre: "saitama",
            description: "il s'agit d'un livre de publication au niveau du backend qui est tres important qui vous permet surement de beaucoup de chose sur le crypto",
            prix: '200$',
            pic : "https://images.app.goo.gl/9dRW3X8u4o1PA2Zp9"
        })
        
        console.log(`la base de données à était bien synchroniser`);
    })
}
module.exports = {initDb, user,formation};