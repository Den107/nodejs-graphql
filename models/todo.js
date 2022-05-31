const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../utils/database.js')

const todo = sequelize.define('Todo', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    done: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = todo