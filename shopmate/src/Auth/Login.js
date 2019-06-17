import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom"

class Login extends Component{

render(){
  return(
      <Fragment>
      <form className ="login-modal">
      <div id="log-modal" className="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div id="modal-content" className="modal-content">
        <div className="modal-header text-center">
        <h4 className=" modal-title w-100 font-weight-bold" id ="login-title">Sign in</h4>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div className="modal-body mx-3">
        <div id ="login-input" className="mx-auto">
        <input type="text" id="login-1" className="form-control validate" placeholder ="Email"/>
        </div>

        <div id ="login-input" className="mx-auto">
        <input type="text" id="login-1" className="form-control validate" placeholder ="Password"/>
        </div>

        
        <button type ="submit" className = "btn special ">Sign in</button>

        <div className ="login-footer-text">
         <Link  className="sign-link" data-toggle="modal" data-target="#modalLoginForm">Forgot Password</Link>
         <Link  className="sign-link" data-toggle="modal" data-dismiss="modal" data-target="#modalRegisterForm">Have an account</Link>

        </div>
   
      </div>

      
      

        </div>
        </div>
        </div>
      </form>
    

</Fragment>
        )
    }
}
export default Login