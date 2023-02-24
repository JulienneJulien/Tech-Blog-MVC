// import all models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'userId'
  });
  
  Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'SET NULL'
  });

  Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'SET NULL'
  });
  
  Comment.belongsTo(Post, {
    foreignKey: 'postId',
    onDelete: 'SET NULL'
  });
  
  User.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: 'SET NULL'
  });
  
  Post.hasMany(Comment, {
    foreignKey: 'postId'
  });
  
  module.exports = { User, Post, Comment };
  