import React from 'react';


const Progressbar = () => {
    return (
        <div class="progress-container">
        <h2 class="title">Checkout</h2>
        <ul class="progressbar">
          <li className ="active" >Delivery</li>
          <li className ="">Confirmation</li>
          <li>Payment</li>
          <li>Finish</li>
          
        </ul>
    </div>
    );
};


export default Progressbar;
