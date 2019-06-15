import React, {Component} from 'react';
import Progressbar from './Progressbar'
import CheckoutFooter from './checkoutfooter';


class Payment extends Component{
    
    previous = e =>{
        e.preventDefault()
        this.props.prevStep()
    }
    render(){
    return (
        <form className ="checkout-form">
        <Progressbar/>
        <div className ="payment">
        
        <div className ="payment-1">
        <img src ='./images/visa.svg' />
        
        <img src ='./images/mastercard.svg' /><br/>
        <input type="radio" name="payment" value="credit" className ="payment-radio" /> Pay £340.00 with credit card<br/>
        
        </div>

        <div  className ="payment-2" >
        <img src ='./images/paypal.svg' /><br/>
        <input type="radio" name="payment" value="paypal" className ="payment-radio"  />Pay £340.00 with PayPal
        </div>
        

        {/* <section className = "payment-form"> */}
        
        <div className="sub-payment payment-3">
         <label htmlFor="exampleInput">Cardholder's name</label>
         <input type="email" id="exampleInput" placeholder = "Ujoeju" className="" />
        </div>

        <div className="sub-payment payment-4">
         <label htmlFor="exampleInput">Card number</label>
         <input type="email" id="exampleInput"  placeholder = "*** *** *** *** ***"  className="" />
        </div>

        <div className="sub-payment payment-5">
         <label htmlFor="exampleInput">Expiry</label>
         <input type="email" id="exampleInput" placeholder = "MM/YY" className="" />
        </div>

        <div className="sub-payment payment-6">
         <label htmlFor="exampleInput">CVV/ CVC</label>
         <input type="email" id="exampleInput" className="" />
        </div>
        <p className="sub-payment payment-7">
         *CVV or CVC is the card security code, unique three digits number on the back of your card separate from its number.
        </p>
        {/*</section>*/}
        </div>
        <div className ="checkout-footer">
            <button onClick= {this.previous} className = "btn btn-ghost btn-white" href = "#">Back</button>
            <button   className = "btn btn-standard " href = "#">Finish</button>
            </div>
        </form>
    );
    }
};



export default Payment;
