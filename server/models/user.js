let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  email:{
    type:String,
    required:[true,'Please enter an email!']
  },
}, {timestamps:true})
mongoose.model("User", UserSchema)
