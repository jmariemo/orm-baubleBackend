const { Product } = require('../models');

const productData = [
  {
    product_name: "Initial Pendant",
    price: 875,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: "Diamond Studs",
    price: 330,
    stock: 25,
    category_id: 2,
  },
  {
    product_name: "Cuban Anklet",
    price: 580,
    stock: 50,
    category_id: 4,
  },
  {
    product_name: "Classic Link Bracelet",
    price: 1890,
    stock: 7,
    category_id: 3,
  },
  {
    product_name: "Jumbo Signet Ring",
    price: 300,
    stock: 22,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
