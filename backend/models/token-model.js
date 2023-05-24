require('dotenv').config()

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('fc497068_db', 'fc497068_db', 'FvHZuxJY', {
  host: 'fc497068.mysql.tools',
  dialect: 'mysql'
});

const Token = sequelize.define('Token', {
  refreshToken: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

sequelize.sync();
module.exports = Token;
