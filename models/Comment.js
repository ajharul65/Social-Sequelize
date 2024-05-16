const {sequelize} = require('../db/connection.js')
const { DataTypes } = require('sequelize')

let Comment = sequelize.define('comment',{
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
    
})
module.exports = Comment;