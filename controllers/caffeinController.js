const express = require("express");
const router = express.Router();
// Import the model (burger_models.js) to use its database functions
const burger = require("../models/burger_models.js");

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    console.log(data);
    res.render("index", { burgers: data });
  });
});

router.post("/api/burgers", (req, res) => {
  console.log("New burger POST request: ", req.body);
  // Column names
  burger.insertOne(req.body.burger_name, (result) => {
    // Send back the ID of the new burger / function(result){}
    res.json({ id: result.insertId });
  });
});
router.put("/api/burgers/:id", (req, res) => {
  // console.log("UPDATE burger WHERE condition: ", condition);

  burger.updateOne(req.body.devoured, req.params.id, (result) => {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", (req, res) => {
  burger.deleteOne(req.params.id, (result) => {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Redirect to root if no routes match
router.get("*", (req, res) => {
  res.redirect("/");
});

// Export routes for server.js to use.
module.exports = router;
