const { DataTypes } = require('sequelize');

const sequelize = require('../db/init');

const User = sequelize.define('users', {
  wallet: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: DataTypes.STRING,
  email: DataTypes.STRING,
  address: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = User;
