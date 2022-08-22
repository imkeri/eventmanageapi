const mongoose = require('mongoose');
// const objectId = mongoose.Schema.Types.ObjectId;

const ticketModel = new mongoose.Schema({
    // userId: {
    //     type: objectId
    // },
    name:{
        type:String
    },
    mobile:{
        type:String
    },
    email:{
        type:String
    },
    event:{
        type:String
    },
    ticket:{
        type:String
    }
})

module.exports = mongoose.model('members',ticketModel)