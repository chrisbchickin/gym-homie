const User = require('./User');
const Category = require('./Category');
const Exercise = require('./Exercise');

User.hasMany(Exercise, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Exercise.belongsTo(User, {
    foreignKey: 'user_id',
});

Category.hasMany(Exercise, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
});

Exercise.belongsTo(Category, {
    foreignKey: 'category_id',
})

module.export = { User, Category, Exercise};