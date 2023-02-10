const sequelize = require('../config/connection');
const { User, Category } = require('../models');

const userData = require('./userData.json');
const categoryNames = require('./category.json');
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Category.bulkCreate(categoryNames, {
    returning: true,
  });
 

  process.exit(0);
};

seedDatabase();