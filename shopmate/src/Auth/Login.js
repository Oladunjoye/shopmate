
import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
 import {Link} from "react-router-dom"
 import {connect} from "react-redux"
 import {login} from "../redux/actions"

 import {withRouter} from "react-router-dom"




class Login extends Component {
state = {
  modal: false,
  email: '',
  password: ''
}


toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}
handleChange = (e) =>{
   
       this.setState({
        [e.target.name] : e.target.value
      })
    }
    handleSubmit= (e) => {
      e.preventDefault()
      const {email, password} = this.state
      this.props.login(email,password)
      this.setState({ email: '', password: ""})
    }
  
    componentDidUpdate(prevProps, prevState){
      if (prevProps.isAuthenticated === false && this.props.isAuthenticated){
        this.toggle()
      this.props.history.push("/products");
    }
  }

render() {
  return (
    <MDBContainer id="modalLoginForm"  className ="login-modal">
    <form onSubmit ={this.handleSubmit} >
      <MDBBtn onClick={this.toggle}>LOGIN</MDBBtn>
      <MDBModal   className="modal-content" isOpen={this.state.modal} toggle={this.toggle}>
        
      <div className="modal-header text-center">
      <h4 className=" modal-title w-100 font-weight-bold" id ="login-title">Sign in</h4>
      </div>


        <MDBModalBody className = "mx-0">
        <div className="modal-body mx-3">
         <div id ="login-input" className="mx-auto">
         <input type="email" onChange ={this.handleChange} id="login-1" name ="email" className="form-control validate" autoFocus required placeholder ="Email"/>
         </div>

         <div id ="login-input" className="mx-auto">
         <input type="password" onChange ={this.handleChange} id="login-1" name ="password" required className="form-control validate" placeholder ="Password"/>
         </div>

        
         <button type ="submit" onClick={this.toggle} className = "btn special ">Sign in</button>
         <div className ="login-footer-text">
          <Link  className="sign-link" data-toggle="modal" data-target="#modalLoginForm">Forgot Password</Link>
          <Link  className="sign-link" data-toggle="modal" onClick={this.toggle} data-target="#modalRegisterForm">Have an account</Link>

         </div>
         </div>
        </MDBModalBody>
        
          
      </MDBModal>
      </form>
    </MDBContainer>
    );
  }
}


const mapStateToProps = ({auth}) => ({
  isAuthenticated: auth.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  login: ( email, password) => dispatch(login(email, password))
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login))