import { AppBar ,Toolbar} from "@mui/material";
import { NavLink } from 'react-router-dom';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';

import './appbar.css';

const onvaluechage=(e)=>{
   alert('hello')

};
function Header() {
    return ( 
        <AppBar id='appbar'>
            <Toolbar id='tool'>
            <li><NavLink id='Navlink2' to='/'><NoteAddIcon /></NavLink></li>
            <li><NavLink id='Navlink' to='/All'><StickyNote2Icon /></NavLink></li>
            </Toolbar>
        </AppBar>
    );
}

export default Header;