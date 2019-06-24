import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {register} from '../redux/actions'
import { Redirect } from 'react-router-dom';

class Register extends Component{

  state ={
    name: '',
    email: '',
    password: ''
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
    const {isAuthenticated} = this.props
    if(isAuthenticated){
     return  <Redirect push to = "/products"/>
    }
    
  }
render(){
  return(
      <Fragment>
      <div  className ="register-modal">
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

      <form onSubmit = {this.handleSubmit} >
      <div className="modal-body mx-3" style ={{color : 'black'}}>
        

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
        <p>Already have an account?</p> <Link  className="sign-link" data-toggle="modal" data-dismiss="modal"  data-target="#modalLoginForm">Sign in</Link>
        </div>
   
      </div>
      </form>
    

      
      

        </div>
        </div>
        </div>
      </div>
    

</Fragment>
        )
    }
}

const mapStateToProps = ({auth}) => ({
  isAuthenticated: auth.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  register: (name, email, password) => dispatch(register(name,email, password))
})
export default connect(mapStateToProps, mapDispatchToProps)(Register)