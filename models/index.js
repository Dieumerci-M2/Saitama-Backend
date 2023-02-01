const dbConfig = require("../config/db.config.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.DB, 
  dbConfig.USER, 
  dbConfig.PASSWORD, 
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
});

sequelize.authenticate()
          .then(()=> console.log(`Sequelize is now connected`))
          .catch(err => console.log(`Fail to connect, here's an => ${err}`))

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./user.model.js')(sequelize, DataTypes)

db.sequelize.sync({force : false})
            .then(()=> console.log(`Sync is done`))
            .catch(err => console.log(`Sync failed: ${err}`))

module.exports = db;

