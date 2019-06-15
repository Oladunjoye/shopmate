import React, {Component} from 'react';
import Progressbar from './Progressbar';
import CheckoutFooter from './checkoutfooter';
import {Link} from 'react-router-dom'


class Delivery extends Component {
 
     
    continue = e =>{
        e.preventDefault();
        this.props.nextStep()
    }
    previous = e =>{
        e.preventDefault()
        this.props.prevStep()
    }
    render(){
        console.log('ME',this.props)
        return (
            
            <form className = "checkout-form">
            <Progressbar/>
            <section className = "delivery">
            
            <div className="sub-delivery delivery-1">
             <label htmlFor="exampleInput">First name*</label>
             <input type="email" id="exampleInput" className="" />
            </div>
    
            <div className="sub-delivery delivery-2">
             <label htmlFor="exampleInput">Last name*</label>
             <input type="email" id="exampleInput" className="" />
            </div>
    
            <div className="sub-delivery delivery-3">
             <label htmlFor="exampleInput">Address*</label>
             <input type="email" id="exampleInput" className="" />
            </div>
    
            <div className="sub-delivery delivery-4">
             <label htmlFor="exampleInput">City*</label>
             <input type="email" id="exampleInput" className="" />
            </div>
    
            <div className="sub-delivery delivery-5">
             <label htmlFor="exampleInput">State*</label>
             <input type="email" id="exampleInput" className="" />
            </div>
    
            <div className="sub-delivery delivery-6">
             <label htmlFor="exampleInput">Zip*</label>
             <input type="email" id="exampleInput" className="" />
            </div>
    
            <span className=" delivery-7">
             <label htmlFor="exampleInput">Country: Great Britain*</label>
             <span>
             <input type="checkbox" id="exampleInput" checked className="" />
             My billing information is the same as my delivery information
             </span>
            </span>
    
            <hr className = "delivery-8"/>
            <div className = "delivery-9">
            <h3>Delivery options</h3>
            <span className ="options">
            <input type="radio" name="shipping" value="standard" /> <b>Standard Shipping</b> (free, 2-3 business days)<br/>
            <input type="radio" name="shipping" value="express" /><b> Express Shipping </b>(£28, 1-2 business days)
            </span>
    
            </div>
            </section>
            
            <div className ="checkout-footer">
            <Link to= "/products" className = "btn btn-ghost btn-white" href = "#">Back To Shop</Link>
            <button  onClick ={this.continue} className = "btn btn-standard " href = "#">Next Step</button>
            </div>
            </form>
            
    
           
        );
    }
    
};



export default Delivery;
