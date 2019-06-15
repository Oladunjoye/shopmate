import React, {Fragment} from "react"
import Navbar2 from '../../Common/Navbar2'
import Review from './Review';
import Hot from '../Hot'
import Footer from '../Footer'
import {Link} from 'react-router-dom'

function Single(){
    return(
        <Fragment>
        <Navbar2/>
        <div className = "single">
        <img src = '/images/hot1.png' className="main-img" alt= "item"/>

        <img src = '/images/hot1sm.png' className= "thumbnail thumbnail-1" alt= "item"/>
        <img src = '/images/hot1sm.png' className= "thumbnail thumbnail-2" alt= "item"/>
        <img src = '/images/hot1sm.png' className= "thumbnail thumbnail-3" alt= "item"/>

        <div className= "breadcrumb">
        <ul>
        <li>Home</li>
        <li>Categories</li>
        <li>Products</li>

         
        </ul>
        </div>
        <h2>Super Oversized T-Shirt With Raw Sleeves In Brown</h2>
        <p className= "price">$13.77</p>
        <p className= "detail">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
        and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
        <Link className = "btn btn-ghost" to ='/checkout'>Add to cart</Link>
       
        </div>
        <Review/>
        <Hot/>
        <Footer className ="singleitem-footer"/>
        </Fragment>
    )
}

export default Single