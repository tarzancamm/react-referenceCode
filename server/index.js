//! Imports
const express = require('express')
const cors = require('cors')
const server = express() // We called this app in foundations

//! Middleware
server.use(express.json())
server.use(cors()) // Send and receive info without getting flagged as inauthenticated

//! Endpoints



//! Listen
server.listen(4000, () => {
    console.log('Listening on port: 4000')
})