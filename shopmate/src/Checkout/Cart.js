import React ,{Component} from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import { removeItem } from "../redux/actions";

class Cart extends Component{

  state = {
    
  }

  
   
  

  render(){
   let cartItems =  this.props.items
   
   if (cartItems.length >= 1 ){
    
  
     cartItems = cartItems.map((item) => {
      return(
       
        <tr>
         
          <td className= "full-cart-image" id ="full-cart-image">
         
          <img id ="cart-image" src= "/images/shop1sm.png" />
          <div className ="cart-image-content">
          <h4>{item.name}</h4>
          <p>Men BK3569</p>
          <button onClick = {() => this.props.removeItem(item.item_id, this.props.items )}>Remove</button>
          </div>
          </td>
          <td> XXL</td>
          <td id = "td-input">
          <i onClick = {this.handleIncrement} className="fas fa-plus">
          </i><span>{item.quantity}</span>
          <i onClick = {this.handleDecrement} className="fas fa-minus"></i>
          </td>
          <td>£{item.price}</td>
    
        </tr>
        
      )
    })

    
  }

  
     
      
    return(
     
    
    <div className ="cart-form">
    <h3>{this.props.items.length} items in the Cart  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button></h3>
   
    <hr/>
      
    {this.props.items.length < 1 ? <div style = {{textAlign: 'center', fontSize: '2rem'}}>Your cart is empty</div> :
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
      {cartItems}      
    </tbody>
  </table>
}

  <div className ="checkout-footer">
  <Link to =  "/products" className = "btn btn-ghost btn-white" href = "#">Back to shop</Link>
  <Link to =  "/checkout" className = "btn btn-standard {items.length === 0 ? 'disabled' : ''} " data-dismiss ="modal" href = "#">Checkout</Link>
  </div>
</div>
    
  
        )
}
}

const mapStateToProps=({cart}) =>({

  items: cart.cartItems
})

const mapDispatchToProps = dispatch => ({
  removeItem: (itemId, items) => dispatch (removeItem(itemId, items))
}
)
export default connect(mapStateToProps,mapDispatchToProps)(Cart)