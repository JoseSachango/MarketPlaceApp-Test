const db = require("../models")




module.exports = function(app) {

    // GET route for getting all of the todos
    app.get("/api/user", function(req, res) {
      // findAll returns all entries for a table when used with no options
      db.User.findAll({}).then(function(dbUser) {
        // We have access to the todos as an argument inside of the callback function
        res.json(dbUser);
      });
    });

     // GET route for getting specific user informaiton
     app.get("/api/user/:id", function(req, res) {
        // findAll returns all entries for a table when used with no options
        db.User.findAll({
                where: {
                  googleId: req.params.id
                }
        }).then(function(dbUser) {
          // We have access to the todos as an argument inside of the callback function
          console.log("The query for specific user worked on the backend and is returning: ",dbUser)
          res.json(dbUser);
        }).catch(err=>{
            console.log("There was an error trying to look for a specific user: ",err)
        });
      });
  
    // POST route for saving a new User
    app.post("/api/user/post", function(req, res) {
      // create takes an argument of an object describing the item we want to
      // insert into our table. In this case we just we pass in an object with a text
      // and complete property
      console.log("Data to post has been recieved and is the following: ",req.body)

      db.User.create({
        googleId: req.body.googleId,
        name: req.body.name,
        userType: req.body.userType
      }).then(function(dbUser) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(dbUser);
      }).catch(err=>{
          console.log("There was an error on the backend trying to post user information: ",err)
          //res.status(404).send(err)
      });
    });
  
    // DELETE route for deleting todos. We can get the id of the todo to be deleted from
    // req.params.id
    app.delete("/api/user/:id", function(req, res) {
      // We just have to specify which todo we want to destroy with "where"
      db.User.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      });
  
    });
  
    // PUT route for updating todos. We can get the updated todo data from req.body
    app.put("/api/user", function(req, res) {
      // Update takes in an object describing the properties we want to update, and
      // we use where to describe which objects we want to update
      db.User.update({
        text: req.body.text,
        complete: req.body.complete
      }, {
        where: {
          id: req.body.id
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    });
  
  };
  