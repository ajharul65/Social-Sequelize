const {sequelize} = require('../db/connection.js')
const { DataTypes } = require('sequelize')

let User = sequelize.define('user',{
    username: DataTypes.STRING,
    email: DataTypes.STRING
})


module.exports = User ;