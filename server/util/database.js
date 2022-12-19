// Sequelize class from sequelize package
const { Sequelize } = require("sequelize");
// Allow file to access environment variables we declare (lets us access URI in .env file)
require("dotenv").config();
const { DATABASE_URL } = process.env;

// Connect DB
const db = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = db;


//! Node uses ES5 syntax

//! ES5 SYNTAX
// const thing = require('this')

// module.exports = {}

//! ES6 SYNTAX
// import thing from 'thisotherthing'

// export {}
// export default 'whatever'
