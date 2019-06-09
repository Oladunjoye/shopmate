import React, {Fragment} from "react"
import Main from './Main'
import Feature from "./Feature";
import Gallery from "./Gallery";
import Subscribe from "./Subscribe";
import Footer from "./Footer";






function Home(){
    return(
        <Fragment>
        <Main/>
        <Feature/>
        <Gallery/>
        <Subscribe/>
        <Footer/>
        </Fragment>
    )
}

export default Home