import React from "react"
import {Link} from 'react-router-dom';
import Register from '../Auth/Register'
import Login from "../Auth/Login";

function Navbar(){
    return(
        <nav className="navbar ">
                      
        
        <Link to = "/"><h3>Shopmate</h3> </Link>

          <div >
          <ul className ="navbar-sub">
          <li>Women</li>
          <li>Men</li>
          <li>Children</li>
          </ul>
          </div>

          <div >
          <Register/>
          <Login/>
          <ul className ="navbar-sub">
          
          <li className="" data-toggle="modal" data-target="#modalRegisterForm">Sign Up</li>
          <li className="" data-toggle="modal" data-target="#modalLoginForm">Log in  </li>

         
          </ul>
          </div>
          
         
          
                   
        </nav>
    )
}


export default Navbar
