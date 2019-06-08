import React, {Fragment} from "react"
import Main from './Main'
import Feature from "./Feature";
import Gallery from "./Gallery";




function Home(){
    return(
        <Fragment>
        <Main/>
        <Feature/>
        <Gallery/>
        </Fragment>
    )
}

export default Home