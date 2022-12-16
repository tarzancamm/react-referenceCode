//! Imports
const express = require("express");
const cors = require("cors");
const server = express(); // We called this app in foundations
const db = require("./util/database");
const { User, Product, Cart } = require("./util/models");

//! Middleware
server.use(express.json());
server.use(cors()); // Send and receive info without getting flagged as inauthenticated

//! Associations
User.hasMany(Cart) //User has many things in their cart. hasMany puts ID from table one into table two.
Cart.belongsTo(User)

Product.hasMany(Cart)
Cart.belongsTo(Product) //One cart item has one product in it

//! Endpoints
server.post('/api/addUser', async (req, res) => {
    const {username, password} = req.body
    try {
        await User.create({username, password})
        res.status(200).send("User created!")
    } catch {
        res.status(401).send("Could not create user")
    }
})

server.get('/api/user/:id', async (req, res) => {
    const {id} = req.params
    try {
        let info = await User.findOne({where: {id: id}})
        res.status(200).send(info)
    } catch {
        res.status(400).send("Couldn't complete request")
    }

})

db.sync(); // Syncronizes models with database. Will create table if table has not been created yet. {force: true} will auto rebuild DB from ground up each time.

//! Listen
server.listen(4000, () => {
  console.log("Listening on port: 4000");
});
