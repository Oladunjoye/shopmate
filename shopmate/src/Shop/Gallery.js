import React,{Component} from 'react'
import Filter from "./Filter"
import {Link} from 'react-router-dom'
import {connect} from "react-redux"
import { fetchProducts } from '../redux/actions';
import {getCartId, getCartItems, addToCart} from "../redux/actions"
import {  toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Single from './Single/SingleItem';

class Gallery extends Component{
   
    componentDidMount() {

        this.props.fetchProducts();
        
        if(!this.props.cart.cartId.cart_id ){
             this.props.getCartId()
           
        }      

        }
        
       
        
       

    render(){
       
        const products = this.props.products.map(product =>{
           
            const imageUrl = `https://backendapi.turing.com/images/products/${product.thumbnail}`
            return(
            <figure key={product.product_id} className = "">
       
            <Link  to={{
                pathname: `/products/${product.product_id}`,
                state: { product: product }
              }} className="single-term-link">
            <img src= {imageUrl} alt ="Product Display"/>
           <p>{product.name}</p>
           
           </Link>
           
           <button 
           onClick=
           {(e) => this.props.addToCart(this.props.cart.cartId.cart_id,  product.product_id, product.description)
        }  className = "btn btn-ghost " href = "#">Add to cart</button>
         
           </figure>
            
             ) }
        )
    
    return(
        <section className ="gallery-shop">
       
        <aside className= "filter">
        <ToastContainer/>
        <Filter/>
        </aside>
        {products}
        </section>

    );
    }
}

const mapStateToProps= ({isLoading, products,error,cart}) =>({
    isLoading,
    products,
    error,
    cart
}
) 

const mapDispatchToProps= dispatch =>({
    fetchProducts: () => dispatch(fetchProducts()),
    getCartId: () => dispatch(getCartId()),
    addToCart : (cartId,product, attributes) => dispatch(addToCart(cartId, product, attributes)),
  
    

})
export default connect(mapStateToProps,mapDispatchToProps)(Gallery)