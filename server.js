let express = require("express");
let app = express();
const bodyParser = require("body-parser");
const dbConnection = require("./db");
const passport = require('./auth');
require('dotenv').config();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

const userLogs = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.originalUrl}`);
    next();
}
app.use(userLogs)

// Middleware for authentication
app.use(passport.initialize());
let locelAuthMiddleware = passport.authenticate('local', {session: false})


//importing routes
const personRoute = require('./router/personRoute')
const manuRoute = require('./router/manuRoute')

//using routes
app.use('/', locelAuthMiddleware, personRoute)
app.use('/', manuRoute)


//home server route
app.get('/',  async(req, res)=>{
  try {
    res.json({
      message: "wollcome to our page"
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
      error: error
    })
    
  }
})

// Starting the server and connecting to the database
    dbConnection().then(() => {
      const PORT = process.env.PORT || 3000
      app.listen(PORT, () => {
        console.log("server is runing on port 3000");
      });
    })