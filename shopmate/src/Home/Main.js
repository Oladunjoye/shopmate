import React from "react"
import Navbar from '../Common/Navbar'

function Main(){
    return(
        <main>
        <Navbar/>
        <div className="hero">
        <p>Stay connected</p>
        <h1>Receive exciting features,<br/> news and special offers!</h1>
        <div>
        <input type ="email" className = "btn btn-full" placeholder ="enter your mail "/>
        <a className = "btn btn-ghost" href = "#">Subscribe</a>
        </div>
        </div>
        </main>
    )
}

export default Main