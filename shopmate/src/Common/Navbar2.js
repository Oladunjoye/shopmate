import React from "react"
import {Link} from 'react-router-dom'

function Navbar2(){
    return(
        <nav className="navbar2 ">
                      
        
         <h3 id ="nav-hard"><Link to = "/"> Shopmate </Link></h3>

        <input type ="text" placeholder ="Search Anything"/>
          
                   
        </nav>
    )
}


export default Navbar2
