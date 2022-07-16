import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom';
function NavBar() {
  return (
    <div class='navbar'>
        <div class='title-icon'>
            Title
        </div>
        <ul class='nav-links'>    
            <li>                
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/about">About</Link>                       
            </li>
        </ul>
    </div>
  )
}

export default NavBar