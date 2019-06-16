import React from "react"
import {Link} from 'react-router-dom';
import Register from '../Auth/Register'

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
          <ul className ="navbar-sub">
          
          <li><i className="fas fa-search" data-toggle="modal" data-target="#modalRegisterForm"></i></li>
          <li><i className="fas fa-search"></i></li>
          </ul>
          </div>
          
         
          
                   
        </nav>
    )
}


export default Navbar
