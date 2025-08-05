const mongoose = require("mongoose")
const passport = require("passport")
const plm = require('passport-local-mongoose')
mongoose.connect(process.env.MONGODB_URI)



const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  contact: Number,
  boards:{
    type: Array,
    default: []
  },
  posts:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
  }]
})
userSchema.plugin(plm)
module.exports = mongoose.model("user", userSchema)