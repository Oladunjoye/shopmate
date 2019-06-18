import React , {Fragment, Component} from "react"
import Navbar2 from "../Common/Navbar2"
import Footer from './Footer'
import Gallery from './Gallery'
import Hot from './Hot'



class Shop extends Component{
    render(){

        
        return(
            <Fragment>
            <Navbar2/>
            <Gallery/>
            <Hot/>
            <Footer/>
            </Fragment>
           
        )
    }
  
}


export default Shop