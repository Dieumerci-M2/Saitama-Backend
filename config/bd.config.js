module.exports = {
    HOST: process.env.SERVER_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_USER_PASSWORD,
    DB: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };