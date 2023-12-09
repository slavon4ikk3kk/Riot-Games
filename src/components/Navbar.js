import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
    <nav>
        <div className = "logoheader">
        <img src='./logotype.png'></img>
         <h1 className="companyName">Riot Games</h1>
         </div>
        <ul>
           
            <NavLink to={"/"}>
            <li>
                Home
            </li>
            </NavLink>
            <li>
             <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
                <NavLink to={"/blog"}>Blog</NavLink>
            </li>
            <li>
                <NavLink to={"/contacts"}>Contact</NavLink>
            </li>
            <li>
                <NavLink to={"/services"}>Services</NavLink>
            </li>
            <li>
                <NavLink to={"/team"}>Team</NavLink>
            </li>
        </ul>
    </nav>
    </div>
    )
}
export default Navbar;