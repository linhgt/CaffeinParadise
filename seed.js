const db = require("./models");
const seedData = [
  {
    name: "hot coffee 1",
    price_sm: 3.5,
    price_md: 5.5,
    price_lg: 7,
    isHotDrink: true,
    img_url: "./img/black-cup-coffee.jpg",
    short_description: "ed milk foam",
  },

  {
    name: "hot coffee 2",
    price_sm: 2,
    price_md: 3,
    price_lg: 4,
    isHotDrink: true,
    img_url: "./img/cappuccino.jpg",
    short_description:
      "Espresso-based coffee traditionally prepared with steamed milk foam",
  },
  {
    name: "hot coffee 3",
    price_sm: 3.5,
    price_md: 5.5,
    price_lg: 7,
    isHotDrink: true,
    img_url: "./img/white-cup2-coffee.jpg",
    short_description: "Espresso-based coffee traditiosteamed milk foam",
  },
  {
    name: "hot coffee 4",
    price_sm: 3.5,
    price_md: 5.5,
    price_lg: 7,
    isHotDrink: true,
    img_url: "./img/green-cup-coffee.jpg",
    short_description:
      "Espresso-based coffee traditionally prepared with steamed milk foam",
  },
  {
    name: "hot coffee 5",
    price_sm: 3.5,
    price_md: 5.5,
    price_lg: 7,
    isHotDrink: true,
    img_url: "./img/green-tea-latte.jpg",
    short_description:
      "Espresso-based coffee traditionally prepared with steamed milk foam",
  },
  {
    name: "hot coffee 6",
    price_sm: 3.5,
    price_md: 5.5,
    price_lg: 7,
    isHotDrink: true,
    img_url: "./img/yellow-cup-coffee.jpg",
    short_description:
      "Espresso-based coffee traditionally prepared with steamed milk foam",
  },
  {
    name: "hot coffee 7",
    price_sm: 3.5,
    price_md: 5.5,
    price_lg: 7,
    isHotDrink: true,
    img_url: "./img/whithe-cup-coffee1.jpg",
    short_description:
      "Espresso-based coffee traditionally prepared with steamed milk foam",
  },
  {
    name: "hot coffee 8",
    price_sm: 3.5,
    price_md: 5.5,
    price_lg: 7,
    isHotDrink: true,
    img_url: "./img/light-blue-cup-coffee.jpg",
    short_description:
      "Espresso-based coffee traditionally prepared with steamed milk foam",
  },
  {
    name: "clod coffee 1",
    price_sm: 3.5,
    price_md: 5.5,
    price_lg: 7,
    isHotDrink: false,
    cold_img_url: "./img/white-cup-coffee.jpg",
    short_description:
      "Espresso-based coffee traditionally prepared with steamed milk foam",
  },
  {
    name: "clod coffee 2",
    price_sm: 3.5,
    price_md: 5.5,
    price_lg: 7,
    isHotDrink: false,
    cold_img_url: "./img/ice-green-tea-latte.jpg",
    short_description:
      "Espresso-based coffee traditionally prepared with steamed milk foam",
  },
  {
    name: "clod coffee 3",
    price_sm: 3.5,
    price_md: 5.5,
    price_lg: 7,
    isHotDrink: false,
    cold_img_url: "./img/nuts-coffee.jpg",
    short_description:
      "Espresso-based coffee traditionally prepared with steamed milk foam",
  },
  {
    name: "clod coffee 4",
    price_sm: 3.5,
    price_md: 5.5,
    price_lg: 7,
    isHotDrink: false,
    cold_img_url: "./img/coffee-with-popcorn.jpg",
    short_description:
      "Espresso-based coffee traditionally prepared with steamed milk foam",
  },
  {
    name: "clod coffee 5",
    price_sm: 3.5,
    price_md: 5.5,
    price_lg: 7,
    isHotDrink: false,
    cold_img_url: "./img/glass-coffee.jpg",
    short_description:
      "Espresso-based coffee traditionally prepared with steamed milk foam",
  },
  {
    name: "clod coffee 6",
    price_sm: 3.5,
    price_md: 5.5,
    price_lg: 7,
    isHotDrink: false,
    cold_img_url: "./img/cold-coffee.jpg",
    short_description:
      "Espresso-based coffee traditionally prepared with steamed milk foam",
  },
  {
    name: "clod coffee 7",
    price_sm: 3.5,
    price_md: 5.5,
    price_lg: 7,
    isHotDrink: false,
    cold_img_url: "./img/coffee-cream-cinnamon.jpg",
    short_description:
      "Espresso-based coffee traditionally prepared with steamed milk foam",
  },
  {
    name: "clod coffee 8",
    price_sm: 3.5,
    price_md: 5.5,
    price_lg: 7,
    isHotDrink: false,
    cold_img_url: "./img/coffee-with-foam.jpg",
    short_description:
      "Espresso-based coffee traditionally prepared with steamed milk foam",
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
