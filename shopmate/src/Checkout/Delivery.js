import React from 'react';


const Delivery = () => {
    return (
        

        <form className = "">
        
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
        
        </form>
        

       
    );
};



export default Delivery;
