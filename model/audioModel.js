const mongoose = require("mongoose");

const audioSchema = mongoose.Schema({
    name:String,
    image:String,
    videoId:String,
})

const Audio = mongoose.model("Audio",audioSchema)
module.exports = Audio
