const User = require('./User');
const Category = require('./Category');
const Exercise = require('./Exercise');

User.hasMany(Exercise, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Exercise.belongsTo(Driver, {
    foreignKey: 'user_id',
});

Category.hasMany(Exercise, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Exercise.belongsTo(Category, {
    foreignKey: 'user_id',
})

module.export = { User, Category, Exercise};