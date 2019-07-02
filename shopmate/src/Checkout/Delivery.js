import React, {Component, Fragment} from 'react';
import Progressbar from './Progressbar';
import CheckoutFooter from './checkoutfooter';
import {Link} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';


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
       const {name, address,region, state, city, country, postal_code, shipping_region_id, tax_id, shipping_id } = this.props.state
        let options
       if (shipping_region_id == 2){
           options =  ( <Fragment> 
            
                    <option value= {1}   >Next Day Delivery ($20)</option>
                    <option value={2}>3-4 Days ($10)</option>
                    <option value={3}>7 Days ($5)</option>
                    </Fragment>)
       }
       else if(shipping_region_id == 3){
        options =  ( <Fragment> 
           
                    <option value= {4}>By air (7 days, $25)</option>
                    <option value={5}>By sea (28 days, $10)</option>
                  
                    </Fragment>)
       }
       else{
        options =  ( <Fragment> 
            
                    <option value= {6}>By air (10 days, $35)</option>
                    <option value={7}>By sea (28 days, $30)</option>
                    
                    </Fragment>)
       }
        return (
            
            <form onSubmit = {this.props.handleSubmit} className = "checkout-form">
            <ToastContainer/>
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
              <select name ="shipping_region_id" value={shipping_region_id} onChange={this.props.handleChange}  placeholder= "Please select a shipping region" id="exampleInput" >
             
              <option value= {2}>US / Canada</option>
              <option value={3}>Europe</option>
              <option value={4}>Rest of The World</option>
              

            
           </select>
            </div>
    
            <div className="sub-delivery delivery-4">
             <label htmlFor="exampleInput">Country*</label>
             <input value ={country} name ="country" onChange ={this.props.handleChange}  type="text" id="exampleInput" className="" />
            </div>

             
   
    
            <div className="sub-delivery delivery-3">
             <label htmlFor="exampleInput">Postal Code*</label>
             <input value ={postal_code} name ="postal_code" onChange ={this.props.handleChange}  type="text" id="exampleInput" className="" />
            </div>
    
            <div className="sub-delivery delivery-6">
             <label htmlFor="exampleInput">Delivery method*</label>
             <select type ="number" name ="shipping_id" value={shipping_id}  onDrop= {this.props.handleChange} onClick = {this.props.handleChange} onChange={this.props.handleChange}   id="exampleInput" >
               {options}
           </select>
            </div>

            
            <div className="sub-delivery delivery-11">
            <label htmlFor="exampleInput">City*</label>
            <input value ={city} name ="city" onChange ={this.props.handleChange}  type="text" id="exampleInput" className="" />
            </div>

            <span className=" delivery-7">
             <label htmlFor="exampleInput">Country: Great Britain*</label>
             <span>
             <input type="checkbox" id="exampleInput" checked onChange ={this.handleChange} className="" />
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
            <input type="radio" name="tax_id" value= {1} checked={tax_id == '1'} onChange ={this.props.handleChange} /> <b>"Sales Tax at 8.5%</b><br/>
            <input type="radio" name="tax_id" value= {2} checked={tax_id == '2'} onChange ={this.props.handleChange} /><b> No Tax </b>
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


// {<div className="sub-delivery delivery-11">
//              <label htmlFor="exampleInput">City*</label>
//              <input value ={city} name ="city" onChange ={this.props.handleChange}  type="text" id="exampleInput" className="" />
//            </div>}