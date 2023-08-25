import { TextField,Button} from "@mui/material";
import { useState } from "react";
import { Addcont } from "../../service/api";
import { useNavigate} from 'react-router-dom';
import './adduser.css';
function Adduser({setopen}) {


const closemodal =()=>{
    setopen("");
    
 }
const defaultnote={
    Tittle:'',
    Discription:''
}
    const [note,setnote]=useState(defaultnote)
const onvaluechage=(e)=>{
    setnote({...note,[e.target.name]:e.target.value});

};
const save= async()=>{
    Addcont(note);
     setopen("");
     window.location.reload();
};

    return ( 
        <div  className='adduser'>
            <p>Create</p>
            
            <TextField onChange={(e)=>{onvaluechage(e)}} id="tittle" label="Name" variant="outlined" name='Tittle'/>
            <div className="padding"></div>
            <TextField onChange={(e)=>{onvaluechage(e)}} id="tittle" label="Number" variant="outlined" name='Discription'/>
           <div className="btns">
           <button id='btn' onClick={(e)=>{save(e)}}>Save</button>
             <button id='btn' onClick={closemodal}>close</button>
           </div>
        </div>
        
        
    );
    
}

export default Adduser;