const { urlencoded, Router, json } = require('express')
const cors = require('cors')
const Express=require('express');
const router = new Express.Router();
const { AddCont,Getcont,Getonecont,Deletecont,Updatecont } = require('./controller');
const c=require('./dbconnect')
// import ExpressJs
const app=Express();

// middlewares

app.use(Express.urlencoded({extended:true}))    // for post api this middleware is must to use
c.conn()                                        // database connection
app.use(Express.json())                         // to pass incoming requests to JSON payloads
app.use(cors())                                 // to share data within two ports or servers

// routes 

app.use(router)
router.post('/',AddCont)
router.get('/all',Getcont)
router.get('/edit/:id',Getonecont) // path and callback function
router.post('/all/:id',Deletecont)
router.post('/edit/:id',Updatecont)

// listen server on port 8000
app.listen(7000,(req,res)=>{
    console.log("server is running")})