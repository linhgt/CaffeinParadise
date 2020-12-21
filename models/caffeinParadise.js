// Dependencies
// =============================================================

module.exports = (sequelize, DataTypes) => {
  const CoffeeDrinks = sequelize.define("CoffeeDrinks", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30],
      },
    },

    // hot_name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1, 30],
    //   },
    // },

    // cold_name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1, 30],
    //   },
    // },

    img_url: DataTypes.STRING,

    cold_img_url: DataTypes.STRING,

    short_description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50],
      },
    },

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
    isHotDrink: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
  return CoffeeDrinks;
};
