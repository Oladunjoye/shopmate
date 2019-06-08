import React from "react"

function Navbar(){
    return(
        <nav className="navbar ">
                      
        
          <h3>Shopmate</h3>

          <div >
          <ul className ="navbar-sub">
          <li>Women</li>
          <li>Men</li>
          <li>Children</li>
          </ul>
          </div>

          <div >
          <ul className ="navbar-sub">
          <li><i className="fas fa-search"></i></li>
          <li><i className="fas fa-search"></i></li>
          </ul>
          </div>
          
                   
        </nav>
    )
}


export default Navbar
