
//DAY .1
//const arr = [20, 10, 12, 19, 8, 18, 30]

// const ans  = arr.filter(age => age <= 18)

// console.log(ans);


//1.
// let prompt = require('prompt-sync')()

// const age = prompt("enter your age")

// if(age < 18){
//     console.log("you get a 20% discount");
// }
// else if(age => 18 , age <= 65){
//     console.log("normel Tikit price aplys")
// }
// else {
//     console.log("you get a 30% discount");   
// }



//2.
// let prompt = require('prompt-sync')()

// let linght = prompt("enter the lingth")
// let width = prompt("enter the width")

// const area = linght * width
// console.log(area);


//3.

// const product = {
//     name: "t-shrit",
//     price: 5000,
//     inStock: true
// }

// console.log(product);

//4.
//arrays
// let prompt = require('prompt-sync')()

// let guestName = prompt('enter the guest name')

// let guestsList = ["Adani", "mark", "melony", "tromp", "srpoddar"]

// if(guestsList.includes(guestName)){
//     console.log("wollcome to the party");
// }
// else{
//     console.log("you are not invited")    
// }


//5.

// let forcast = {
//     date: "25-08-25",
//     temperature: 35,
//     conditions: "sunny",
//     humidity: 50
// }

// console.log("whear frocast for sunday",forcast);
// console.log("temperature",forcast.temperature + "C");
// console.log("conditions",forcast.conditions);
// console.log("humidity",forcast.humidity);


//NOTE: Importing var, functions form other files
// let notes = require('./nots.js')

// let froots = notes.arr
// console.log(froots);

// let callback = notes.callback
// console.log(callback);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DAY .2

// 1.
// function calculateCircleArea(redius){
//    area =  Math.PI * redius ** 2
//    console.log(area);  
// }

// calculateCircleArea(20)

// function calculateCircleArea2(redius){
//    return Math.PI * redius * redius
// }

// console.log(calculateCircleArea2(5));


//2.
// let osmodul = require('os')

// console.log(osmodul.totalmem());
// console.log(osmodul.freemem());
// console.log(osmodul.platform());
// console.log(osmodul.cpus().length);

//3.
// let _ = require('lodash')

// function getingNumber(numbers){
//     const evenNumber = _.filter(numbers, num =>  num % 2 === 0)
//     return _.sumBy(evenNumber)
// }

// let numbers = [1,2,3,4,5,6,7,8,23,56,43,12,77,897,6,54,5,]

// console.log(getingNumber(numbers));

//4.CREATING ROUTE WITH THE HEPL OF EXPRESSJS

// let express = require('express')
// let app1 = express()

// app1.get("/", function(req, res){
//     res.send("Hellow World")
// })

// app1.listen('3000')


//6. WHATER APIS

// let express = require('express')
// let app = express()

// app.get("/city", function(req, res){
//     res.json({
//         id : 454551,
//         city: "pune",
//         tepretur : 35,
//         day: "sunyy",
//         humedity: 22.5
//     })
// })

// app.listen('3000', function(){
//     console.log("server is runing on 3000 port");
    
// })



 




