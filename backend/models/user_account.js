const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class user_account extends Model {};

user_account.init({
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'user_account',
  timestamps: false
})

module.exports = user_account;