import React, {Component, Fragment} from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {register} from '../redux/actions'
import {withRouter} from "react-router-dom"

class Register extends Component{

  state ={
    name: '',
    email: '',
    password: '',
    modal: false,
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
    const {name,email, password} = this.state
    this.props.register(name,email,password)
    this.setState({name : '', email: '', password: ""})
    
  }
  componentDidUpdate(prevProps){
    if (prevProps.isAuthenticated === false && this.props.isAuthenticated){
      this.toggle()
    this.props.history.push("/products");
    }
  }
render(){
  return(
    <MDBContainer  className =" register-modal">
    <form onSubmit ={this.handleSubmit} >
      <MDBBtn onClick={this.toggle}>REGISTER</MDBBtn>
      <MDBModal   className="modal-content" isOpen={this.state.modal} toggle={this.toggle}>
        
      <div className="modal-header text-center">
      <h4 className=" modal-title w-100 font-weight-bold" id ="register-title">Sign Up</h4>
      </div>


        <MDBModalBody className = "mx-0">
        <div className="modal-body mx-3">
        <div id ="register-input" className="mx-auto">
           <input type="text" id="register-1" name ="name" onChange = {this.handleChange}  className="form-control validate" placeholder ="Name"/>
           </div>
        
           <div id ="register-input" className="mx-auto">
           <input type="text" id="register-1"  name ="email" onChange = {this.handleChange} className="form-control validate" placeholder ="Email"/>
           </div>
        
          
        
           <div id ="register-input" className=" mx-auto">
           <input type="password" id="register-1"  name ="password" onChange = {this.handleChange} value ={this.state.password} className="form-control validate" placeholder ="Password"/>
           </div>
           <button type ="submit" className = "btn special ">Sign Up</button>
        
           <div className ="register-footer-text">
           <p>Already have an account?</p> <Link  className="sign-link" data-toggle="modal" onClick={this.toggle} data-dismiss="modal"  data-target="#modalLoginForm">Sign in</Link>
           </div>
         </div>
        </MDBModalBody>
        
          
      </MDBModal>
      </form>
    </MDBContainer>
     
        )
    }
}

const mapStateToProps = ({auth}) => ({
  isAuthenticated: auth.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  register: (name, email, password) => dispatch(register(name,email, password))
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register))