'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    text: DataTypes.STRING,
    emoji: DataTypes.STRING,
    tag_id: DataTypes.INTEGER

  }, {
    underscored: true,
  });
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Tag, {foreigKey: 'tag_id'})
  };
  return Comment;
};