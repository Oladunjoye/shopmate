import React from "react"

function Subscribe(){
    return(
        <section className ="subscribe">
        <div className ="subscribe-sub">
        <h2>10% Discount for your subscription</h2>
        <p>Carry the day in style with this extra-large tote crafted in our chic B.B. Collection textured PVC. 
        Featuring colorful faux leather trim, this tote offers a roomy interior.</p>
        <div>
        <input type ="email" className = "btn btn-full" placeholder ="enter your mail "/>
        <a className = "btn btn-ghost" href = "#">Subscribe</a>
        </div>
        </div>
        </section>
    )
}

export default Subscribe