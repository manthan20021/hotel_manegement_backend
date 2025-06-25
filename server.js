let express = require("express");
let app = express();
const bodyParser = require("body-parser");
const dbConnection = require("./db");
require('dotenv').config();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

const userLogs = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.originalUrl}`);
    next();
}
app.use(userLogs)


//importing routes
const personRoute = require('./router/personRoute')
const manuRoute = require('./router/manuRoute')

//using routes
app.use('/', personRoute)
app.use('/', manuRoute)


// Starting the server and connecting to the database
    dbConnection().then(() => {
      const PORT = process.env.PORT || 3000
      app.listen(PORT, () => {
        console.log("server is runing on port 3000");
      });
    })