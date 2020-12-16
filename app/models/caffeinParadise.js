// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

module.exports = (sequelize, DataTypes) => {
  const HotCoffeeDrinks = sequelize.define("HotCoffeeDrinks", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30],
      },
    },
    size: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ["small", "medium", "large"],
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        min: 0,
        max: 50,
      },
    },
  });
  return HotCoffeeDrinks;
};

module.exports = (sequelize, DataTypes) => {
  const ColdCoffeeDrinks = sequelize.define("ColdCoffeeDrinks", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30],
      },
    },
    size: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ["small", "medium", "large"],
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        min: 0,
        max: 50,
      },
    },
  });
  return ColdCoffeeDrinks;
};
