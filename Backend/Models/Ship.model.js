
const mongoose = require("mongoose");

const shipSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please fill this field!"],
    },
    capacity: {
        type: Number,
        required: [true, "Please fill this field!"],   
    },
},{timestamps:true});

const Ship = mongoose.model("Ship", shipSchema);
module.exports = Ship;

