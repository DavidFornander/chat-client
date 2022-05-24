const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');
const user_account = require('./user_account');

class user_post extends Model {};

user_post.init({
  post_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,

    reference: {
      model: user_account,

      key: 'user_id',
    }

  },
  text: {
    type: DataTypes.TEXT
  },

}, {
  sequelize,
  modelName: 'user_post',
  timestamps: false
})

module.exports = user_post;