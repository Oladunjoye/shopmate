import React , {Fragment} from "react"
import Navbar2 from "../Common/Navbar2"
import Footer from './Footer'
import Gallery from './Gallery'
import Hot from './Hot'



function Shop(){
    return(
        <Fragment>
        <Navbar2/>
        <Gallery/>
        <Hot/>
        <Footer/>
        </Fragment>
       
    )
}

export default Shop