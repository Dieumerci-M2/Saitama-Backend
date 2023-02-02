const {Sequelize, DataTypes} = require('sequelize')

const userModel = require('../models/user')
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
const initDb = ()=>{
    return sequelize.sync({force: true}).then(()=>{
    
        
            user.create({
                id: 1,
				userName: 'md',
				email : "kdxknkn",
                password: 'hash'
            })
        
        console.log(`la base de données à était bien synchroniser`);
    })
}
module.exports = {initDb, user};

