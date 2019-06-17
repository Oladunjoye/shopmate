import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom"

class Register extends Component{

render(){
  return(
      <Fragment>
      <form className ="register-modal">
      <div id="reg-modal" className="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div id="modal-content" className="modal-content">
        <div className="modal-header text-center">
        <h4 className=" modal-title w-100 font-weight-bold" id ="register-title">Sign Up</h4>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div className="modal-body mx-3">
        <div id ="register-input" className="mx-auto">
        <input type="text" id="register-1" className="form-control validate" placeholder ="Email"/>
        </div>

        <div id ="register-input" className="mx-auto">
        <input type="text" id="register-1" className="form-control validate" placeholder ="Password"/>
        </div>

        <div id ="register-input" className=" mx-auto">
        <input type="text" id="register-1" className="form-control validate" placeholder ="Re-type Password"/>
        </div>
        <button type ="submit" className = "btn special ">Sign Up</button>

        <div className ="register-footer-text">
        <p>Already have an account?</p> <Link  className="sign-link" data-toggle="modal" data-dismiss="modal"  data-target="#modalLoginForm">Sign in</Link>
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
export default Register