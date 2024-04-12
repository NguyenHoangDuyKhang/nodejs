'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Oders_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Oders_detail.init({
    id_oder : DataTypes.INTEGER,
    id_product  : DataTypes.INTEGER,
    name: DataTypes.STRING,
    price : DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    img  : DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Oders_detail',
  });
  return Oders_detail;
};