const { Product } = require("./models");

let allProducts = [
  {
    name: "Shoes",
    price: 149.99,
    clearance: false,
  },
  {
    name: "Door",
    price: 49.99,
    clearance: false,
  },
  {
    name: "Legos",
    price: 69.99,
    clearance: false,
  },
  {
    name: "iPhone",
    price: 999.95,
    clearance: true,
  },
];

const seed = async () => {
    await Product.bulkCreate(allProducts)
}

module.exports = seed
