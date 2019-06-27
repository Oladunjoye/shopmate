import React, { Fragment } from "react"
import {Link} from 'react-router-dom';
import Register from '../Auth/Register'
import Login from "../Auth/Login";
import {connect} from "react-redux"
import { MDBBtn } from "mdbreact";

function Navbar(props){
  const{isAuthenticated} = props

  
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
         
          
          <ul className ="navbar-sub">
          {isAuthenticated ? (
            <MDBBtn rounded color="danger">Logout</MDBBtn>
            ) :   (
              <Fragment>
              <Register/>   
                <Login/>
            </Fragment>
            )
    }
         
          </ul>
          </div>
          
         
          
                   
        </nav>
    )
}

const mapStateToProps = ({auth}) => ({
  isAuthenticated : auth.isAuthenticated
})

export default connect(mapStateToProps, null)(Navbar)
