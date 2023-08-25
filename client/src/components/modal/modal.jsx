import ReactDOM from 'react-dom';

import "./modal.css"
import Adduser from '../adduser/Adduser';
import Editnote from '../edit/editnote';
import { useState } from 'react';


const Modal =({setopen,open,id})=>{
   
   
    return ReactDOM.createPortal(
    <div className="modal" >
       <div className="modal-cont">
        
     {open ==="add" ? <><Adduser setopen={setopen}/></> :<><Editnote id={id} setopen={setopen}/></>}

       </div>
    </div>,
     document.getElementById('modal')
      );
}


export default Modal;