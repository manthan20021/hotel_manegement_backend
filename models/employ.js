
let mongoose = require('mongoose')

const EmploySchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    age:{
        type: Number,
        require: true
    },
    work:{
        type:String,
        require:true,
        enum: ["chef", "weter", "maneger"]
    },
    mobaile:{
        type: Number,
        require:true
    },
    email:{
        type:String,
        require: true
    },
    address:{
        type: String
    },
    salary:{
        type:Number,
        require:true
    }
})

const employ = mongoose.model('employ', EmploySchema)
module.exports = employ;
