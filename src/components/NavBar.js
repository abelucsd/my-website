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
            <li >                
                <Link class='nav-link-item' to="/">Home</Link>
            </li>
            <li>
                <Link class='nav-link-item' to="/projects">Projects</Link>
            </li>
            <li>
                <Link class='nav-link-item' to="/about">About</Link>                       
            </li>
        </ul>
    </div>
  )
}

export default NavBar