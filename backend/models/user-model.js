const { Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('fc497068_db', 'fc497068_db', 'FvHZuxJY', {
  host: 'fc497068.mysql.tools',
  dialect: 'mysql'
});

const User = sequelize.define('User', {
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  isActivated: { type: DataTypes.BOOLEAN, defaultValue: false },
  activationLink: { type: DataTypes.STRING, allowNull: true },

});

sequelize.sync();

module.exports = User;