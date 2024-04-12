'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Oders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Oders.init({
    phone: DataTypes.INTEGER,
    address : DataTypes.STRING,
    purchase_date: DataTypes.DATE,
    total : DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    id_user  : DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Oders',
  });
  return Oders;
};