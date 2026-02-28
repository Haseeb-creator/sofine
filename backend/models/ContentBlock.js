const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ContentBlock = sequelize.define('ContentBlock', {
  section: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  payload: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: {}
  }
});

module.exports = ContentBlock;
