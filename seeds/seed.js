const sequelize = require('../config/connection');
const { User, Exercise } = require('../models');

const userList = require('./user.json');
const exerciseData = require('./exercise.json');


const seedDatabase = async () => {
    await sequelize.sync({force: true});

    await User.bulkCreate(userList, { 
        individualHooks: true,
    });
    await Exercise.bulkCreate(exerciseData);

    process.exit(0);
    

};

seedDatabase();