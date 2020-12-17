// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var db = require("../config/connection.js");

module.exports = (sequelize, DataTypes) => {
  const CoffeeDrinks = sequelize.define("CoffeeDrinks", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30],
      },
    },
    img_url: DataTypes.STRING,
    price_sm: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0,
        max: 50,
      },
    },
    price_md: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0,
        max: 50,
      },
    },
    price_lg: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0,
        max: 50,
      },
    },
    coffee_type: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ["hot", "cold"],
    },
  });
  return CoffeeDrinks;
};

// module.exports = (sequelize, DataTypes) => {
//   const ColdCoffeeDrinks = sequelize.define("ColdCoffeeDrinks", {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1, 30],
//       },
//     },
//     size: {
//       type: DataTypes.ENUM,
//       allowNull: false,
//       values: ["small", "medium", "large"],
//     },
//     price: {
//       type: DataTypes.DECIMAL,
//       allowNull: false,
//       validate: {
//         min: 0,
//         max: 50,
//       },
//     },
//   });
//   return ColdCoffeeDrinks;
// };
