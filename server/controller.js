const { json } = require("express")
const { contacts } = require("./schema")


// add contact controller

const AddCont= async(req,res)=>{
const note =req.body
const newcont = new contacts(note)
 try{
    await newcont.save()
}catch(error){
    console.log('Data not saved',error)
}
} 


// get contact controller

const Getcont= async(req,res)=>{
    try{
     let  data=  await contacts.find()


    res.status(200).send(data)
    }catch(error){
        res.status(404)
    }
    }


// get one contact controller

const Getonecont= async(req,res)=>{
    const id=req.params.id
    
        try{
         let  data=  await contacts.findOne({_id:id})
         
        res.status(200).send(data)
        
        }catch(error){
            res.status(404)
        }
        }



// update contact controller

const Updatecont= async(req,res)=>{
    const id=req.params.id;
    const cont =req.body
    const newcont=new contacts(cont)
        try{
            let  data =  await contacts.updateOne({_id:id},newcont)
        res.status(200).send(newcont)
        }catch(error){
            res.status(404)
        }}


// delete contact controller


const Deletecont= async(req,res)=>{
    const id=req.params.id
        try{
            let  data =  await contacts.deleteOne({_id:id})
        res.status(200).send('deleted')
        }catch(error){
            res.status(404)
        }
        }
    module.exports={ AddCont,Getcont,Getonecont,Deletecont,Updatecont}