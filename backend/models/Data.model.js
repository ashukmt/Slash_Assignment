const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    name : {type:String},
    bio : {type : String},
    
    })

const EventModel = mongoose.model("event",eventSchema);

module.exports = {
    EventModel
}