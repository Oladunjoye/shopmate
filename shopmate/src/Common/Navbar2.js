import React, {Component} from "react"
import {Link} from 'react-router-dom'
import CartModal from "../Checkout/CartModal"
import {connect} from "react-redux"
import {getCartItems} from '../redux/actions'

class Navbar2 extends Component{
    
    componentDidMount(){
        debugger
        this.props.getCartItems(this.props.cartId)
    }

    render(){
    return(
        <nav className="navbar2 ">
                      
        
         <h3 id ="nav-hard"><Link to = "/"> Shopmate </Link></h3>

        <input type ="text" placeholder ="Search Anything"/>

        <CartModal/>
        
        <div >
        <i   className="fas fa-shopping-cart fa-2x fa-white"  data-toggle="modal" data-target="#modalCartForm"></i>
        </div>
          
                   
        </nav>
    )
}
}


const mapDispatchToProps = dispatch =>({

    getCartItems: () => dispatch(getCartItems())

})

const mapStateToProps =({cart}) => ({
    cartId : cart.cartId
})
export default connect(mapStateToProps, mapDispatchToProps)(Navbar2)
