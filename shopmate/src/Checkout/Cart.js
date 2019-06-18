import React from "react"
import {Link} from "react-router-dom"

function Cart(){
    return(
    <div className ="cart-form">
    <h3>4 items in the Cart  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button></h3>
   
    <hr/>
 
    <table className="cart-table table-borderless">
    <thead id ="thead">
      <tr>
        <th scope="col"  id="cart-header-1">Item</th>
        <th scope="col" id="cart-header-2">Size</th>

        <th scope="col" id="cart-header-3">Quantity</th>
        <th scope="col" id="cart-header-4">Price</th>
       
  
  
      </tr>
     
    </thead>
    
    
    <tbody id ="tbody">
      <tr>
       
        <td class= "full-cart-image" id ="full-cart-image">
       
        <img id ="cart-image" src= "/images/shop1sm.png" />
        <div className ="cart-image-content">
        <h4>Green T-shirt 2016</h4>
        <p>Men BK3569</p>
        <button>Remove</button>
        </div>
        </td>
        <td> XXL</td>
        <td id = "td-input"><i class="fas fa-plus"></i><input type ="text" value ="3"/><i class="fas fa-minus"></i></td>
        <td>£42</td>
        
        
        
        
  
      </tr>
      <tr>
      <td  class= "full-cart-image" id ="full-cart-image-2">
      <img id ="cart-image" src= "/images/shop2sm.png" />
      <div className ="cart-image-content">
      <h4>Green T-shirt 2016</h4>
      <p>Men BK3569</p>
      <button>Remove</button>
      </div>
      </td>
      <td> XXL</td>
      <td><i class="fas fa-plus"></i><input type ="text" value ="3"/><i class="fas fa-minus"></i></td>
      <td>£42</td>
        
      </tr>

      
    </tbody>
  </table>
  
  <div className ="checkout-footer">
  <Link to =  "/products" className = "btn btn-ghost btn-white" href = "#">Back to shop</Link>
  <Link to =  "/checkout" className = "btn btn-standard " data-dismiss ="modal" href = "#">Checkout</Link>
  </div>
</div>
  
        )
}

export default Cart