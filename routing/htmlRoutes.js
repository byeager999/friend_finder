var path = require("path");


// Routes
// =============================================================

// Exports the routs to the server.js page
module.exports = function (app) {
  // Route that sends the user first to the home page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // Route that sends the user to the survey page  
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

};
