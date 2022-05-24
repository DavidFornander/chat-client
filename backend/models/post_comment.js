const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

const user_account = require('./user_account');
const user_post = require('./user_post');

class post_comment extends Model {};

post_comment.init({
  comment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  post_id: { // Foreign Key
    type: DataTypes.INTEGER,

    reference: {
      model: user_post,
      key: 'post_id',
    }
  },
  user_id: { // Foreign Key
    type: DataTypes.INTEGER,

    reference: {
      model: user_account,
      key: 'user_id',
    }
  },
  content: {
    type: DataTypes.TEXT
  }
}, {
  sequelize,
  modelName: 'post_comment',
  timestamps: false
})

module.exports = post_comment;