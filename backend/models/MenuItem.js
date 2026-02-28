const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const MenuItem = sequelize.define('MenuItem', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING
  }
});

module.exports = MenuItem;
