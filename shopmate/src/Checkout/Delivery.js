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
    handleProgress = () =>{

        this.props.handleSubmit()
      
    }
    render(){
       const {name, address,region, state, city, country, postalCode, shippingRegion, tax } = this.props.state
        return (
            
            <form onSubmit = {this.props.handleSubmit} className = "checkout-form">
            <Progressbar/>
            <section className = "delivery">
            
            <div className="sub-delivery delivery-1">
             <label htmlFor="exampleInput">First name*</label>
             <input value ={name} onChange ={this.props.handleChange}  name ="text" type="text" id="exampleInput" className="" />
            </div>
    
            <div className="sub-delivery delivery-2">
             <label htmlFor="exampleInput">Address*</label>
             <input  value ={address} onChange ={this.props.handleChange}  name ="address" type="text" id="exampleInput" className="" />
            </div>
    
            <div className="sub-delivery delivery-5">
             <label htmlFor="exampleInput">Region</label>
              <select name ="region" value={region} onChange={this.props.handleChange}   id="exampleInput" >
             <option value={1}>Please select a Shipping region</option>
             <option value= {2}>US / Canada</option>
             <option value={3}>Europe</option>
             <option value={4}>Rest of the world</option>
           </select>
            </div>
    
            <div className="sub-delivery delivery-4">
             <label htmlFor="exampleInput">Country*</label>
             <input value ={country} name ="country" onChange ={this.props.handleChange}  type="text" id="exampleInput" className="" />
            </div>
    
            <div className="sub-delivery delivery-3">
             <label htmlFor="exampleInput">PostalCode*</label>
             <input value ={postalCode} name ="postalCode" onChange ={this.props.handleChange}  type="text" id="exampleInput" className="" />
            </div>
    
            <div className="sub-delivery delivery-6">
             <label htmlFor="exampleInput">City*</label>
             <input  value ={city} name ="city" onChange ={this.props.handleChange}  type="text" id="exampleInput" className="" />
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
            <input type="radio" name="shipping" value="standard" onChange ={this.props.handleChange}  /> <b>Standard Shipping</b> (free, 2-3 business days)<br/>
            <input type="radio" name="shipping" value="express" onChange ={this.props.handleChange}  /><b> Express Shipping </b>(£28, 1-2 business days)
            </span>
    
            </div>
            <div className = "delivery-10">
            <h3>Tax options</h3>
            <span className ="options">
            <input type="radio" name="tax" value= {1} checked={tax == '1'} onChange ={this.props.handleChange} /> <b>"Sales Tax at 8.5%</b><br/>
            <input type="radio" name="tax" value= {2} checked={tax == '2'} onChange ={this.props.handleChange} /><b> No Tax </b>
            </span>
    
            </div>
            </section>
            
            <div className ="checkout-footer">
            <Link to= "/products" className = "btn btn-ghost btn-white" href = "#">Back To Shop</Link>
            <button type ="submit" onClick ={(e) => this.handleProgress} className = "btn btn-standard " href = "#">Next Step</button>
            </div>
            </form>
            
    
           
        );
    }
    
};



export default Delivery;
