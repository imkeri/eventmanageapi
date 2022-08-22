const mongoose = require('mongoose');


const eventSchem = new mongoose.Schema(
{
    e_name:{
        type:String,
        require:true
    },
    e_venue:{
      type:String,
      require:true
    },
    e_organizer:{
        type:String
     },
     price:{
      type:String
     },
     date:{
        type:String
     },
     time:{
      type:String
     }

});

module.exports = mongoose.model('events',eventSchem);