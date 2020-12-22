module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    total: DataTypes.DECIMAL(10, 2),
    details: DataTypes.TEXT,

    //  name: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     validate: {
    //       len: [1, 30],
    //     },
    //   },

    //  price_sm: {
    //     type: DataTypes.DECIMAL(10, 2),
    //     allowNull: false,
    //     validate: {
    //       min: 0,
    //       max: 50,
    //     },
    //   },
    //   price_md: {
    //     type: DataTypes.DECIMAL(10, 2),
    //     allowNull: false,
    //     validate: {
    //       min: 0,
    //       max: 50,
    //     },
    //   },
    //   price_lg: {
    //     type: DataTypes.DECIMAL(10, 2),
    //     allowNull: false,
    //     validate: {
    //       min: 0,
    //       max: 50,
    //     },
    //   },
    //   isHotDrink: {
    //     type: DataTypes.BOOLEAN,
    //     allowNull: false,
    //   },
  });

  return Order;
};
