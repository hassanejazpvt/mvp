const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    user_id: mongoose.ObjectId,
    name: String,
    category: String,
    details: String,
    posting_date: { type: Date, default: Date.now },
    bid_end_date: Date,
    duration: Number,
    hourly_pay: Number
});

module.exports = mongoose.model("project", projectSchema);