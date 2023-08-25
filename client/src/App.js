
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import './App.css';
import Adduser from './components/adduser/Adduser';
import NoteCard from './components/Alluser/card';
import Delete from './components/edit/delete';

import Header from './components/header/header';
import Modal from './components/modal/modal';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { useState } from 'react';
import Search from './components/modal/search';


function App() {
    const[open,setopen]=useState("");
    const [id,setid]=useState();


    const openmodal=()=>{
        setopen("add");
    }
    
    return ( 
    <BrowserRouter> <button className="add-note-btn" onClick={openmodal}>+</button>

    <div className='main'>
      
       
       {open !== "" && <Modal setopen={setopen} open={open} id={id}/>}
   
        <Routes>
       
        < Route path='/' element={<NoteCard setopen={setopen} setid={setid} />}/>

        </Routes>
    </div>
    </BrowserRouter>
    );
}

export default App;