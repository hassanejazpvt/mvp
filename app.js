require("dotenv").config();
require("./app/config/database").connect();
const cors = require('cors')
const express = require("express");
const auth = require("./app/middleware/auth");

const app = express();

app.use(cors())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routes/auth.routes')(app)

app.get("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
})

module.exports = app;