import React, {Fragment} from "react"
import Main from './Main'
import Feature from "./Feature";
import Gallery from "./Gallery";
import Subscribe from "./Subscribe";





function Home(){
    return(
        <Fragment>
        <Main/>
        <Feature/>
        <Gallery/>
        <Subscribe/>
        </Fragment>
    )
}

export default Home