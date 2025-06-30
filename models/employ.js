
let mongoose = require('mongoose')
let bcrypt = require('bcrypt');



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
        enum: ["chef", "weter", "maneger", "addmein"]
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
    },
    username:{
        type: String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

EmploySchema.pre('save', async function(next) {
let person = this;
try {
    // Check if the password is modified
    if(!person.isModified('password')) next();
        let salt = await bcrypt.genSalt(10);
        let hasdPassword = await bcrypt.hash(person.password,salt);
        person.password = hasdPassword
        next();
} catch (error) {
    next(error)
}
});

EmploySchema.method.comparePassword = async function(candidetPassword) {
    try {
        const isMatch = await bcrypt.compare( candidetPassword, this.password);
    return isMatch;
    } catch (error) {
        throw error;
        
    }
}


const employ = mongoose.model('employ', EmploySchema)
module.exports = employ;
