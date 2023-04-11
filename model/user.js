const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    email: String,
    password: String,
    country: String,
    role: String,
    token: String,
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model("user", userSchema);