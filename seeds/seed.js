const sequelize = require('../config/connection');
const { User, Exercise, Category } = require('../models');

const userList = require('./user.json');
const exerciseData = require('./exercise.json');
const categoryNames = require('./category.json');


const seedDatabase = async () => {
    await sequelize.sync({force: true});

    await User.bulkCreate(userList);
    await Category.bulkCreate(categoryNames);
    await Exercise.bulkCreate(exerciseData);

    process.exit(0);
    

};

seedDatabase();