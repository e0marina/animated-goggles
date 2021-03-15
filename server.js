var express = require("express");
const logger = require('morgan');
const axios = require('axios');
const cheerio = require('cheerio');

var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Configure middleware
// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
//app.use(express.static("public"));
//Routes
//require("./routes/routes")(app);

// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});