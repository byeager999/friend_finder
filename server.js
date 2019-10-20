// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var app = express();


// Sets up the Express App
// =============================================================

var PORT = 3040;

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
