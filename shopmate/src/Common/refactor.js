// class Login extends Component{

//   state ={
    
//     email: '',
//     password: ''
//   }

//   handleChange = (e) =>{
   
//      this.setState({
//       [e.target.name] : e.target.value
//     })
//   }
//   handleSubmit= (e) => {
//     e.preventDefault()
//     const {email, password} = this.state
//     this.props.login(email,password)
//     this.setState({ email: '', password: ""})
//   }

//   componentDidUpdate(prevProps, prevState){
//     if (this.props.isAuthenticated){
//     this.props.history.push("/products");
//   }
// }
// render(){
//   return(
//       <Fragment>
//       <form onSubmit ={this.handleSubmit} className ="login-modal">
//       <div id="log-modal" className="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
//       aria-hidden="false">
//       <div className="modal-dialog modal-dialog-centered" role="document">
//         <div id="modal-content" className="modal-content">
//         <div className="modal-header text-center">
//         <h4 className=" modal-title w-100 font-weight-bold" id ="login-title">Sign in</h4>
//         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>

//       <div className="modal-body mx-3">
//         <div id ="login-input" className="mx-auto">
//         <input type="email" onChange ={this.handleChange} id="login-1" name ="email" className="form-control validate" autofocus required placeholder ="Email"/>
//         </div>

//         <div id ="login-input" className="mx-auto">
//         <input type="password" onChange ={this.handleChange} id="login-1" name ="password" required className="form-control validate" placeholder ="Password"/>
//         </div>

        
//         <button type ="submit" className = "btn special ">Sign in</button>

//         <div className ="login-footer-text">
//          <Link  className="sign-link" data-toggle="modal" data-target="#modalLoginForm">Forgot Password</Link>
//          <Link  className="sign-link" data-toggle="modal" data-dismiss="modal" data-target="#modalRegisterForm">Have an account</Link>

//         </div>
   
//       </div>

      
      

//         </div>
//         </div>
//         </div>
//       </form>
    

// </Fragment>
//         )
//     }
// }

// register modal refactor
// <Fragment>
// <div  className ="register-modal">
// <div id="reg-modal" className="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
// aria-hidden="true">
// <div className="modal-dialog modal-dialog-centered" role="document">
//   <div id="modal-content" className="modal-content">
//   <div className="modal-header text-center">
//   <h4 className=" modal-title w-100 font-weight-bold" id ="register-title">Sign Up</h4>
//   <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//     <span aria-hidden="true">&times;</span>
//   </button>
// </div>

// <form onSubmit = {this.handleSubmit} >
// <div className="modal-body mx-3" style ={{color : 'black'}}>
  

//   <div id ="register-input" className="mx-auto">
//   <input type="text" id="register-1" name ="name" onChange = {this.handleChange}  className="form-control validate" placeholder ="Name"/>
//   </div>

//   <div id ="register-input" className="mx-auto">
//   <input type="text" id="register-1"  name ="email" onChange = {this.handleChange} className="form-control validate" placeholder ="Email"/>
//   </div>

  

//   <div id ="register-input" className=" mx-auto">
//   <input type="password" id="register-1"  name ="password" onChange = {this.handleChange} value ={this.state.password} className="form-control validate" placeholder ="Password"/>
//   </div>
//   <button type ="submit" className = "btn special ">Sign Up</button>

//   <div className ="register-footer-text">
//   <p>Already have an account?</p> <Link  className="sign-link" data-toggle="modal" data-dismiss="modal"  data-target="#modalLoginForm">Sign in</Link>
//   </div>

// </div>
// </form>





//   </div>
//   </div>
//   </div>
// </div>


// </Fragment>