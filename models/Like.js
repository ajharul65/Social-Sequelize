const {sequelize} = require('../db/connection.js')
const { DataTypes } = require('sequelize')

let Like = sequelize.define('like',{
    reactionType: DataTypes.STRING,
    createdAt: DataTypes.STRING
  
})
module.exports = Like;