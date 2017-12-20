let mongoose =  require('mongoose');

let EventSchema = new mongoose.Schema({
  name: String,
  date: Date,
}, {timestamps:true})
mongoose.model("User", UserSchema)
