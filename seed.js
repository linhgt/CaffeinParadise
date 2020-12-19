const db = require("./models");
const seedData = [
  {
    name: "Cappucino",
    price_sm: 3.5,
    price_md: 5.5,
    price_lg: 7,
    coffee_type: "hot",
    img_url:
      "https://www.caffesociety.co.uk/assets/recipe-images/cappuccino-small.jpg",
  },

  {
    name: "Hot Chocolate",
    price_sm: 2,
    price_md: 3,
    price_lg: 4,
    coffee_type: "hot",
    img_url:
      "https://www.yummyhealthyeasy.com/wp-content/uploads/2015/12/hot-chocolate-for-one-title-picture.jpg",
  },
  {
    name: "Hot Coffee",
    price_sm: 3.5,
    price_md: 5.5,
    price_lg: 7,
    coffee_type: "hot",
    img_url:
      "https://www.caffesociety.co.uk/assets/recipe-images/cappuccino-small.jpg",
  },
  {
    name: "Frappucino",
    price_sm: 4.5,
    price_md: 6.5,
    price_lg: 8,
    coffee_type: "cold",
    img_url:
      "https://zonacooks.com/wp-content/uploads/2020/07/Banana-Mocha-Frappuccino-4-720x720.jpg",
  },
];

db.sequelize
  .sync({ force: true })
  .then(() => {
    db.CoffeeDrinks.bulkCreate(seedData)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
