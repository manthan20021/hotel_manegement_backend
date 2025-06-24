let mongoose = require('mongoose');

const ManuSchema = new mongoose.Schema({
    intemName:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    test:{
        type:String,
        enum:['spisy', 'sweet', 'swrey']
    },
});

const manu = mongoose.model('manu', ManuSchema)
module.exports = manu;