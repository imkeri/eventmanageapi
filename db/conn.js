const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/events')
.then(()=>{
    console.log("database created.....")
})
.catch((error)=>{
    console.log("error....",error)
})