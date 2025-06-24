//console.log("this is an notes file");


// var os = require('os')
// var fs = require('fs');
// const path = require('path');

// var user = os.userInfo()
// console.log(user);

// fs.appendFile('my.txt', "Hi" + user.username + '!\n', () => {
//     console.log("sucsessfully cmpited");
// })

//let arr = ["apple", "mango", "grefs", "potato"]

//NOTE: in thes case "hwllow" is a callback function
// function hellow(){
//     console.log("hellow world");
// }


// let callback = (a, f, hellow) => {
// console.log(a + f);
// hellow()
// }

// callback(25, 30, hellow)

// module.exports = {
//     arr,
//     callback
// } //NOTE: we can expots data and any var thru module.exports


// const jsonData = '{"name": "manthan","age": 22,"email": "asdlirjoefi","contact": 345564511512}'

// const obj = JSON.parse(jsonData);
// console.log(obj);


//WHAT IS A SERVER AND HWO TO CREAT EXPRESS SERVER.

// server is a bacialy midiator bitwin calient witch mins end-user and dataBase whenever client 
//will ask for ansy data and req so server will give that data or res back to client so this is a bacik job of server
//NOTE: to retch a server we need internate.

//HOW TO CREAT A SERVER 
// 1.do npm init
// 2.it will give You envarment like package.json and node_modules
// 3.install Express js (npm i express)
// 4.let server = require('express')
// 5.let app = server() with that you can creat server all the "express" pawor is in app now 
// 6.you can creat your frist server like this :- app.get("/", function (req, res){
//     res.send("welcome to our server, server is runing on port: 3000")
// })

// 7.app.listen(3000) it meens that your server suld runing on any port, sopos ther is lots of servers
//are runing on your machin so you to idantyfy wher your server runing on so for taht reson we have port.
// port = room number.

//JSON.
//A. //Json is a format wher we cane store the data in "key: value" pear it is a ligeht wight and also easy to manten and acsess it is allwyas in a string type.
//longform:- (javaScript Object Notetion)

//B. //  Given a JSON data string: {"name": "Alice", "age": 25, "hobbies": ["reading",
//  "painting"]}, explain how you would extract the value of the "age" key.

//frist of all we need to store this data in var / const and,
//we can simply do console.log(jsonData.age)

 //like thsi
//let jsonData = {"name": "Alice", "age": 25, "hobbies": ["reading","painting"]}
//console.log(jsonData.age);


//C.How would you convert the following object into a JSON data string?

// let data = {"title": "Book", "pages": 200}

// let js = String(data)
// console.log(typeof js);



//API
//a) Define what an API is and its role in software development.

//lognform:- (Application Programming Interface)
// API is an sets of rules that allaus deffrent apps to camunicat with eatch athors
//if I search for any qury and click any btn so it will going to send request thru the API 
// and it will find out the data in dataBase and give me a response back

//ENDPOINTS 
//any computing-systam or mostly "user-side computing-systam" is atchige to the organaige/ product's 
// computing systam is an Endpooints.

// Route with Express.js
//a) Explain what the HTTP GET method is used for in the context of web development.
//longfrom:- (Hypertext Transfer Protocol)
//http is the foundetion of word wide web, it difinds how web browser camunicat with server to transfer data.

//GET.
//GET requst is use to get data form DB for just read purpes, we can not "Delete" and "Update" data with GET request.


//STAPS FOR DONLOD AND INSTALL MONGODB AND MONGOSH

//1. Downlode mongoDB.
//2. Install it proprly  
//3. Downlode mongo shell
//4. install mongo shell
//5. run "mongosh" cmd in terminal or cmd promt
//6. "test>" "show dbs"
//7. CMD for mongosh
 // mongosh
  // show dbs
  // (to swithc in any database) "use dbName"
  // (to swithc in agen test) "use test"
  // (to see collections in that purticulaer db) "use collections"
  // (to see all cmd) "Help"
  // (to exit from shell) "exit"
  
  //DB CONNECTION  WITH MONGOOS
  //SCHIMA / MODULES WITH MONGOOS
  

