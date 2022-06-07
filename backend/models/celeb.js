const mongoose = require("mongoose");

const celebritySchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    netWorth: Number
});

module.exports = mongoose.model('Celebrity', celebritySchema);
