const mongoose = require('mongoose');
const { isEmail } = require('validator');


const connectModel = new mongoose.Schema({
    
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        validate: [isEmail, "please enter valide email"]
    },
    sub:{
        type:String
    },
    message:{
        type:String
    }

});
module.exports = mongoose.model('contect',connectModel);

