import * as React from 'react';
import { useState,useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './alluser.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'
import { Deletecont, Getcont } from '../../service/api';
import Search from '../modal/search';
function NoteCard({setopen,setid,search}) {
const [notes,Setnotes]= useState([0])
const [searchdata,setsearchdada]=useState({});
const[searchval,setsearch]=useState();
useEffect(()=>{

    const getallnotes=async()=>{
    const res=await Getcont();
    Setnotes(res.data)
   
  }
    getallnotes()
  
  
  },[])
  const Delete= async(id)=>{
    await Deletecont(id)
  window.location.reload();
};
const Edit =(id)=>{
  setopen("edit")
  setid(id)
}

let logval= notes.filter(data=>`${data.Tittle}`.includes(searchval));

console.log(logval);

    return ( 
    <div className="container">

<div className='conttittle'>
  <p>Contact Manager</p>
</div>
<div className="search">
<Search setsearch={setsearch}/>
</div>
<div id='alluser' className='allcont' >
  
{ logval.length == 0?
 <>
 {
      notes.map(note=>{
       return <div className="contcard">
        <div className="contbtn2">
            <p>{note.Tittle}</p>
            <div className="b"><span>📞</span>
            <p>{note.Discription}</p></div>
            </div>
            <div className='contbtn'><button id='btn-edit' onClick={()=>{Edit(note._id)}}><EditIcon/></button>
                    <button id = "btn-delete" onClick={()=>{Delete(note._id)}}><DeleteIcon/></button>
            </div>
      
       </div>
        
       })
     }
 </> : 
 <>
 {
  logval.map(note=>{
    return <div className="contcard">
        <div className="contbtn2">
            <p>{note.Tittle}</p>
            <div className="b"><span>📞</span>
            <p>{note.Discription}</p></div>
            </div>
            <div className='contbtn'><button id='btn-edit' onClick={()=>{Edit(note._id)}}><EditIcon/></button>
                    <button id = "btn-delete" onClick={()=>{Delete(note._id)}}><DeleteIcon/></button>
            </div>
      
</div>
  })
 }
 </>
}

 
      
       
    </div>
    </div>
    );
}

export default NoteCard;