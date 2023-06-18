const { Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('fc497068_db', 'fc497068_db', 'FvHZuxJY', {
  host: 'fc497068.mysql.tools',
  dialect: 'mysql'
});

  const Video = sequelize.define('Video', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
    // Другие поля, такие как описание, дата загрузки, пользователь, и т.д.
  });

  sequelize.sync();

module.exports = Video;