import React, {Component, Fragment} from 'react'

class Register extends Component{

render(){
  return(
      <Fragment>
<div className="modal  fade mt-4" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header text-center">
        <h4 className="modal-title w-100 font-weight-bold grey-text">Sign up</h4>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body mx-3">
        <div className="md-form mb-5">
          <i className="fas fa-user prefix grey-text"></i>
          <input type="text" id="orangeForm-name" className="form-control validate" />
          <label data-error="wrong" data-success="right" for="orangeForm-name">Your name</label>
        </div>
        <div className="md-form mb-5">
          <i className="fas fa-envelope prefix grey-text"></i>
          <input type="email" id="orangeForm-email" className="form-control validate" />
          <label data-error="wrong" data-success="right" for="orangeForm-email">Your email</label>
        </div>

        <div className="md-form mb-4">
          <i className="fas fa-lock prefix grey-text"></i>
          <input type="password" id="orangeForm-pass" className="form-control validate" />
          <label data-error="wrong" data-success="right" for="orangeForm-pass">Your password</label>
        </div>

      </div>
      <div className="modal-footer d-flex justify-content-center">
        <button className="btn btn-deep-orange">Sign up</button>
      </div>
    </div>
  </div>
</div>


</Fragment>
        )
    }
}
export default Register