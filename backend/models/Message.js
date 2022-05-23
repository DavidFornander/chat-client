const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Message extends Model {};

Message.init({
  user: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.TEXT
  }
}, {
  sequelize,
  modelName: 'message',
  timestamps: false
})

module.exports = Message;