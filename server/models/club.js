let mongoose = require('mongoose');

let ClubSchema = new mongoose.Schema({
  clubName:{
    type:String,
    required:[true,'Please enter an email!']
  },
  clubMeetings: Date,
  required: [ true, 'Please enter a date']
}, {timestamps:true})
mongoose.model("User", UserSchema)
