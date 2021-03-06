var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var PORT = process.env.PORT || 8080;
var app = express();
// static content   
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
// POST
app.use(methodOverride("_method"));
// Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Importing routes
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);
app.listen(PORT);