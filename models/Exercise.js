const { Model, DataTypes, INTEGER } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Exercise extends Model {}

Exercise.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        exercise_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: { model: 'category', key: 'id' }, 
        }, 
        date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        reps: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }, 
        weights: {
            type: DataTypes.INTEGER,
            allowNull:true, 
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'exercise',
    }
);

module.exports = Exercise;