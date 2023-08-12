const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Necklaces',
  },
  {
    category_name: 'Earrings',
  },
  {
    category_name: 'Bracelets',
  },
  {
    category_name: 'Anklets',
  },
  {
    category_name: 'Rings',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
