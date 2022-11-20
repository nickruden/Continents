var mongoose = require('mongoose')
var Schema = mongoose.Schema


var continentSchema = new Schema({
  title: String,
  nick: {
    type: String,
    unique: true,
    required: true
  },
  avatar: String,
  desc: String,
  created:{
    type:Date,
    default:Date.now
  }
})

module.exports.Continent = mongoose.model("Continent", continentSchema)
