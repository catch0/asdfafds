let mongoose = require('mongoose');
let Event = mongoose.model('Events');

class EventsController {
  index(req, res){
          Question.find({})
      }
      show(req, res){
          Events.findById(req.params.id)
      }
}
module.exports = new EventsController();
