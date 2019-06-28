import React, { Component } from 'react';

import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon } from 'mdbreact';
 import {Link} from "react-router-dom"
 import { removeItem } from "../redux/actions";
 import {connect} from "react-redux"
 import {  toast, ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

 import {withRouter} from "react-router-dom"


class CartModal extends Component{

   
        state = {
          modal: false,
          
        }
      
      handleCheckout = () => {

        this.props.history.push("/checkout");
      
        this.toggle()
      }
      remove= (e , item) => {
          e.preventDefault()
          this.props.removeItem(item.item_id, this.props)
      }
        toggle = () => {
          this.setState({
            modal: !this.state.modal
          });
        }
        
    render(){
        let cartItems =  this.props.items

        const disabled = cartItems.length < 1 ? "disabled" : ''
   
        if (cartItems.length >= 1 ){
         
       
          cartItems = cartItems.map((item) => {
           return(
            
             <tr key = {item.item_id}>
              
               <td className= "full-cart-image" id ="full-cart-image">
              
               <img id ="cart-image" src= "/images/shop1sm.png" />
               <div className ="cart-image-content">
               <h4>{item.name}</h4>
               <p>Men BK3569</p>
               
               <button 
               onClick=
               {(e) => {this.remove(e,item)}
            }  className = "" href = "#">Remove</button>
              
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
            <MDBContainer id="modalCartForm"  className ="cart-form">
    <form onSubmit ={this.handleSubmit} >
    <MDBIcon onClick={this.toggle} icon="shopping-cart"  className="fas fa-shopping-cart fa-2x fa-white"  />
      <MDBModal   className="modal-content" isOpen={this.state.modal} toggle={this.toggle} size="lg">
     
      <h3>{this.props.items.length} items in the Cart  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button></h3>

     <MDBModalBody className = "mx-0">
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
   <button onClick ={this.handleCheckout} className = {"btn btn-standard  "+ disabled} href = "#">Checkout</button>
   </div>
     </MDBModalBody>
        
          
           </MDBModal>
        </form>
     </MDBContainer>
            
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

  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartModal))


