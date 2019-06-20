import React,{Component} from 'react'
import Filter from "./Filter"
import {Link} from 'react-router-dom'
import {connect} from "react-redux"
import { fetchProducts } from '../redux/actions';

class Gallery extends Component{
   
    componentDidMount() {

        this.props.fetchProducts();

        }
   
    render(){
       
        const products = this.props.products.map(product =>{
            const imageUrl = `https://backendapi.turing.com/images/products/${product.thumbnail}`
            return(
            <figure key={product.product_id} className = "">
       
            <Link to = '/products/:id' className="single-term-link">
            <img src= {imageUrl} alt ="Product Display"/>
           <p>{product.name}</p>
           
           </Link>
           <a className = "btn btn-ghost " href = "#">Add to cart</a>
           </figure>
            
             ) }
        )
    
    return(
        <section className ="gallery-shop">
        <aside className= "filter">
        <Filter/>
        </aside>
        {products}
        </section>

    );
    }
}

const mapStateToProps= ({isLoading, products,error}) =>({
    isLoading,
    products,
    error
}
) 

const mapDispatchToProps= dispatch =>({
    fetchProducts: () => dispatch(fetchProducts())

})
export default connect(mapStateToProps,mapDispatchToProps)(Gallery)