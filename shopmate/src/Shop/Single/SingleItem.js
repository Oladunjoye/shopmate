import React, {Fragment} from "react"
import Navbar2 from '../../Common/Navbar2'
import Review from './Review';
import Hot from '../Hot'
import Footer from '../Footer'
import {Link} from 'react-router-dom'
import {  toast, ToastContainer } from 'react-toastify';
import { addToCart} from "../../redux/actions"
import {connect} from "react-redux"

function Single(props){
    console.log(props)
    const {product} = props.location.state
    const {addToCart,cart} = props
     return(
        <Fragment>
        <Navbar2/>
        <ToastContainer/>
        <div className = "single">
        <img src = {`https://backendapi.turing.com/images/products/${product.thumbnail}`} className="main-img" alt= "item"/>

        <img src ={`https://backendapi.turing.com/images/products/${product.thumbnail}`}  className= "thumbnail thumbnail-1" alt= "item"/>
        <img src ={`https://backendapi.turing.com/images/products/${product.thumbnail}`}  className= "thumbnail thumbnail-2" alt= "item"/>
        <img src = {`https://backendapi.turing.com/images/products/${product.thumbnail}`}  className= "thumbnail thumbnail-3" alt= "item"/>

        <div className= "breadcrumb">
        <ul>
        <li>Home</li>
        <li>Categories</li>
        <li>Products</li>

         
        </ul>
        </div>
        <h2>{product.name} </h2>
        <p className= "price">${product.price}</p>
        <p className= "detail"> {product.description}</p>
        <button 
           onClick=
           {(e) =>addToCart(cart.cartId.cart_id,  product.product_id, product.description)
        }  
        className = "btn btn-ghost " href = "#">Add to cart</button>
       
        </div>
        <Review/>
        <Hot/>
        <Footer className ="singleitem-footer"/>
        </Fragment>
    )
}
const mapStateToProps= ({isLoading, products,cart}) =>({
    isLoading,
    products,
       cart
}
)

const mapDispatchToProps= dispatch =>({
    
    addToCart : (cartId,product, attributes) => dispatch(addToCart(cartId, product, attributes)),
  
    

})

export default connect(mapStateToProps,mapDispatchToProps)(Single)