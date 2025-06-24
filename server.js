let express = require("express");
let app = express();
const bodyParser = require("body-parser");
const dbConnection = require("./db");
require('dotenv').config();

// Middleware to parse JSON bodies
app.use(bodyParser.json());


//importing routes
const personRoute = require('./router/personRoute')
const manuRoute = require('./router/manuRoute')

//using routes
app.use('/', personRoute)
app.use('/', manuRoute)


// Starting the server and connecting to the database
    dbConnection().then(() => {
      app.listen(3000, () => {
        console.log("server is runing on port 3000");
      });
    })