import React, {Component} from 'react';
import Progressbar from './Progressbar'

import {Link} from 'react-router-dom'

class Success extends Component{
render(){
    return(
        <div className ="checkout-form">
        <Progressbar/>
        <div className ="success-content">
        <img src= "/images/icons-rocket.svg" />
        <p>Your items will be shipped shortly, You will  get an email with details</p>
        <Link to="/products" className = "btn btn-standard " href = "#">Back to Shop</Link>
        </div>
        </div>
    )
}

}

export default Success