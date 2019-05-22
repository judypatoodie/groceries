'use strict';
module.exports = (sequelize, DataTypes) => {
  var Grocery = sequelize.define('Grocery', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    purchased: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: false
    }
  }, {});
  Grocery.associate = function(models) {
    // associations can be defined here
  };
  return Grocery;
};
