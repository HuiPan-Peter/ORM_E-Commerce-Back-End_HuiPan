const Sequelize = require('sequelize');
require('dotenv').config();

//Check condition, if database is runing on the Heroku, use JAWSDB_URL to connect; else use dotenv to connect mysql2  
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
  });

module.exports = sequelize;
