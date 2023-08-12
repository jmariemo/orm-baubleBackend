const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'customizable',
  },
  {
    tag_name: 'a la carte',
  },
  {
    tag_name: '14k',
  },
  {
    tag_name: 'engraving',
  },
  {
    tag_name: 'anniversary',
  },
  {
    tag_name: 'mothers day',
  },
  {
    tag_name: 'everyday',
  }
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
