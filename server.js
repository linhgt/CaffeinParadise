// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
// *********************************************************************************
require("dotenv").config();
// Requiring necessary npm packages
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

//var exphbs = require("express-handlebars");
const helpers = require("./utils/hbsHelpers.js");
// var exphbs = require("express-handlebars");

// Sets up the Express App
// =============================================================
var app = express();
// var PORT = process.env.PORT || 8080;

var session = require("express-session");

// Requiring passport as we've configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 3000;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
const hbs = exphbs.create({ helpers });
// Parse request body as JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// Requiring our models for syncing
// var db = require("./models");

//  We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
// require("./routes/html-routes.js")(app);
require("./routes/auth-routes.js")(app);

// Set Handlebars.
// var exphbs = require("express-handlebars");

// Routes
// =============================================================
// require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Import routes and give the server access to them.
var routes = require("./controller/caffeinController.js");

app.use(routes);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
