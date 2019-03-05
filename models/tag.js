'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    
  }, {
    underscored: true,
  });
  Tag.associate = function(models) {
    Tag.hasMany(models.Comment);// associations can be defined here

  };
  return Tag;
};