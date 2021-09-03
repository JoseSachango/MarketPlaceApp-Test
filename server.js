
console.log("Before express")

var express = require("express");

console.log("After express")



//const API = require("../marketplace/src/utils/API")




var app = express();




var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);




// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  

  app.listen(PORT,function(){
    console.log("Server up and running, listening on port:"+PORT)
    
  
})
});





