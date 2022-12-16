// Declare datatypes of columns
const { DataTypes } = require("sequelize");
// Import database
const db = require("./database");

// Declare models (tables for our DB). Define name of table, then columns as an object
module.exports = {
  User: db.define("user", {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING({length: 20}), // Max length is 20 characters
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }),
  Product: db.define("product", {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    price: DataTypes.FLOAT, // Allows for two decimal places
    clearance: DataTypes.BOOLEAN,
  }),
  Cart: db.define("cart", {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
  }),
};
