const mongoose=require('mongoose')
const nodemon = require('nodemon')
const pass="contactmanager";
const conn=async ()=>{
    try{
await mongoose.connect('mongodb+srv://nikhillende9121:contactmanager@cluster0.glxs3c6.mongodb.net/')
console.log("connetion succcefull")
    }
    catch(error){
        console.log("something went wrong while conneting " ,error)
    }

}
module.exports={conn};