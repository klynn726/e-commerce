// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// create associations

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product);

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'product_id',
  foreignKey: 'category_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'tag_id'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
