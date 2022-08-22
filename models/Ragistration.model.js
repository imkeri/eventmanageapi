const Jwt  = require('jsonwebtoken');
const mongoose = require('mongoose');
const { isEmail } = require('validator');


const ragistrationModel = new mongoose.Schema({
    f_name:{
        type:String,
        require:true
    },
    l_name:{
        type:String,
        require:true
    },
    mobile_number:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        validate: [isEmail, "please enter valide email"]
    },
    password:{
        type:String,
        require:true,

    },
    token:[{
        token:{             
            type:String
        }
    }]
    

});

ragistrationModel.methods.generateauthtoken = async function(){
    try{
        const token = Jwt.sign({id:this._id.toString()},"keyuri reebadiya");
        this.token = this.token.concat({token:token})
        await this.save();
        return token;
    }
    catch(error){
        console.log(error);
    }
}
module.exports = mongoose.model('ragistration',ragistrationModel);