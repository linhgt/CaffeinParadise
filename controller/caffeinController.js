var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
const db = require("../models");

router.get("/", async (req, res) => {
  const drinks = await db.CoffeeDrinks.findAll({ raw: true });
  const orders = await db.Order.findAll({ raw: true });
  res.render("index", { drinks, orders });
});

router.get("/api/orderdetail/:id", async (req, res) => {
  const order = await db.Order.findByPk(req.params.id);
  console.log(order);
  res.json(order);
});
//our routes and set up logic within those routes where required.
router.get("/api/all", function (req, res) {
  db.CoffeeDrinks.findAll({}).then(function (results) {
    res.json(results);
  });
});

router.get("/api/CoffeeDrinks/:name", function (req, res) {
  db.CoffeeDrinks.findAll({
    where: {
      name: req.params.name,
    },
  }).then(function (results) {
    res.json(results);
  });
});

//
router.get("/api/CoffeeDrinks/:size", function (req, res) {
  db.CoffeeDrinks.findAll({
    where: {
      HotCoffeeDrinks: req.params.size,
    },
  }).then(function (results) {
    res.json(results);
  });
});

router.get("/api/CoffeeDrinks/:price", function (req, res) {
  db.CoffeeDrinks.findAll({
    where: {
      HotCoffeeDrinks: req.params.price,
    },
  }).then(function (results) {
    res.json(results);
  });
});

// If a user sends data to add a new character...
// router.post("/api/new", function (req, res) {
//   console.log("CoffeeDrinks Data:");
//   console.log(req.body);
//   db.CoffeeDrinks.create({
//     name: req.body.name,
//     size: req.body.size,
//     price: req.body.price,
//   }).then(function (results) {
//     res.json(results);
//   });
// })
router.post("/api/order", (req, res) => {
  console.log(req.body);
  db.Order.create({
    total: Number(req.body.subTotal),
    details: JSON.stringify(req.body.cart),
  }).then((data) => res.json(data));
});

router.delete("/api/CoffeeDrinks/:id", function (req, res) {
  console.log("CoffeeDrinks ID:");
  console.log(req.params.id);
  db.CoffeeDrinks.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function () {
    res.end();
  });
});

// Export routes for server.js to use.
module.exports = router;
