// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_next: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: DataTypes.DECIMAL
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: DataTypes.INTEGER
    },
    category_id: {
      type: DataTypes.INTEGER,
      //references the category models id
      references: {
        model: 'category',
        key: 'id'
      }      
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
