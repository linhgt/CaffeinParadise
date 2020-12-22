module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    total: DataTypes.DECIMAL(10, 2),
    details: DataTypes.TEXT,
  });

  return Order;
};
