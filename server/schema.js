const { default: mongoose } = require("mongoose");

const contactsschema=new mongoose.Schema(
    {
        Tittle:String,
        Discription:String
    }
)
const contacts=mongoose.model('contacts',contactsschema)
module.exports={contactsschema,contacts}