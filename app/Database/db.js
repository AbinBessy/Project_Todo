require('dotenv').config()
const mongoose = require('mongoose');

exports.connectMonggose =()=>{
  mongoose.connect('mongodb://localhost:27017',
  {
      useNewUrlParser: true
  })
  .then((e)=>console.log("Connected to Mongodb =>> Todo App"))
  .catch((e)=>console.log("Not Connect Mongodb"))
}