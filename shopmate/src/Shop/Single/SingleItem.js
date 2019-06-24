import React, {Fragment} from "react"
import Navbar2 from '../../Common/Navbar2'
import Review from './Review';
import Hot from '../Hot'
import Footer from '../Footer'
import {Link} from 'react-router-dom'

function Single(props){
    const {product} = props.location.state
     return(
        <Fragment>
        <Navbar2/>
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
        <Link className = "btn btn-ghost" to ='/checkout'>Add to cart</Link>
       
        </div>
        <Review/>
        <Hot/>
        <Footer className ="singleitem-footer"/>
        </Fragment>
    )
}

export default Single