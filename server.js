const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config()
const SchoolRoute = require("./route/SchoolRoute")
const errorMiddleware = require("./middleware/ErrorMiddleware")
var cors = require('cors')

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000


// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use("/api/school", SchoolRoute)
app.use(errorMiddleware)
app.use(cors())







// CONNECTION TO MONGODB 

mongoose.connect(MONGO_URL).then(() => {
    console.log("connected to Mongodb");
    app.listen(3000, () => {
        console.log(`Server is running on port ${PORT}`)
    });
}).catch((error) => {
    console.log(error)
})
