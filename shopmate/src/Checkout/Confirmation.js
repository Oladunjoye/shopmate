import React, {Component} from 'react';
import Progressbar from './Progressbar';
import CheckoutFooter from './checkoutfooter';


class  Confirmation extends Component {
  

  continue = e =>{
        e.preventDefault()
        this.props.nextStep()
    }
    previous = e =>{
        e.preventDefault()
        this.props.prevStep()
    }

    render(){
  return (
    <div className ="checkout-form">
   
   <Progressbar/>
    <div className ="confirmation">
    
    <div className ="confirmation-1">
    <h3>Order</h3>
    <table class = " table table-striped">
    
    <thead>
      <tr>
          <th>Item</th>
          <th>Qty</th>
          <th> Price</th>
          

      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Green T-shirt 2016 Men BK3569</td>
        <td>2</td>
        <td>$14</td>
        

      </tr>
      <tr>
        <td>Yellow pants kids WP6648</td>
        <td>8</td>
        <td>$24 </td>
       

      </tr>
      <tr>
        <td>Top shoes winter black PT24886</td>
        <td>1</td>
        <td>$68</td>
        

      </tr>
      <tr>
        <td>Brown jacket woman 459922</td>
        <td>1</td>
        <td>$80 </td>
        

      </tr>
    </tbody>
  </table>
  </div>

  <div className ="confirmation-2">
  <h4>Delivery</h4>
  <span>Adress</span>
  <p>Office 64, 8 Colmore Row, Birmingham, England, 42000</p>
  <h4>Delivery Options</h4>
  <p>Standart delivery (free, 2-3 days)</p>
  </div>

  <hr/>
  <div className ="confirmation-3"> 
  <button>New Year 8%</button>

  <span>
  <h4>Subtotal</h4>
  <p>£368</p>
  </span>

  <span>
  <h4>Shipping</h4>
  <p>free</p>
  </span>

  <span>
  <h4>Grand total</h4>
  <p>£340</p>
  </span>
  </div>

    </div>
    <div className ="checkout-footer">
            <button onClick= {this.previous} className = "btn btn-ghost btn-white" href = "#">Back</button>
            <button onClick= {this.continue}  className = "btn btn-standard " href = "#">Next Step</button>
            </div>
    </div>
  );
}
}

export default Confirmation;