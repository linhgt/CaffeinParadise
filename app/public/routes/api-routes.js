// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var coffeeDrinks = require("./models/caffeinParadise.js");

// Routes
// =============================================================
module.exports = function (app) {
  app.get("/api/all", function (req, res) {
    coffeeDrinks.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  app.get("/api/HotCoffeeDrinks/:name", function (req, res) {
    coffeeDrinks
      .findAll({
        where: {
          HotCoffeeDrinks: req.params.name,
        },
      })
      .then(function (results) {
        res.json(results);
      });
  });

  //
  app.get("/api/HotCoffeeDrinks/:size", function (req, res) {
    coffeeDrinks
      .findAll({
        where: {
          HotCoffeeDrinks: req.params.size,
        },
      })
      .then(function (results) {
        res.json(results);
      });
  });

  app.get("/api/HotCoffeeDrinks/:price", function (req, res) {
    coffeeDrinks
      .findAll({
        where: {
          HotCoffeeDrinks: req.params.price,
        },
      })
      .then(function (results) {
        res.json(results);
      });
  });

  // If a user sends data to add a new character...
  app.post(
    "/api/new",
    function (req, res) {
      console.log("HotCoffeeDrinks Data:");
      console.log(req.body);
      HotCoffeeDrinks.create({
        name: req.body.name,
        size: req.body.size,
        price: req.body.price,
      });
    }.then(function (results) {
      res.json(results);
    })
  );

  app.delete("/api/HotCoffeeDrinks/:id", function (req, res) {
    console.log("HotCoffeeDrinks ID:");
    console.log(req.params.id);
    HotCoffeeDrinks.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function () {
      res.end();
    });
  });

  // POST route for saving a new todo
  app.post("/api/todos", function (req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete,
    }).then(function (dbTodo) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTodo);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/todos/:id", function (req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Todo.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (dbTodo) {
      res.json(dbTodo);
    });
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", function (req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Todo.update(
      {
        text: req.body.text,
        complete: req.body.complete,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    ).then(function (dbTodo) {
      res.json(dbTodo);
    });
  });
};
