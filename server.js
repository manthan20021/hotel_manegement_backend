let express = require("express");
let app = express();
const bodyParser = require("body-parser");
const dbConnection = require("./db");

app.use(bodyParser.json());


//importing routes
const personRoute = require('./router/personRoute')
const manuRoute = require('./router/manuRoute')

//using routes
app.use('/', personRoute)
app.use('/', manuRoute)



 
    dbConnection().then(() => {
      app.listen(3000, () => {
        console.log("server is runing on port 3000");
      });
    })


























//creat modul schima
//post
//db conection
//then start server
//send json data

//tu jalDhara is badal ki
//tu premika is pagal ki
//

//tu bund hai mere sagar ki
//na jane meri geherai
//na muzme ese tu gul jana
//tu mithi bund mai hoo khara

//jis nadi se aai thi beheke
//tuze lotadu usme fir se
//na abse muza me tu behena na
//na mil jana fir dobara
