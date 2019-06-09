import React from "react"

function Gallery(){
    return(
        <section className= "gallery">
        <img src = '/images/gallery1sm.png' alt ="Gallery " className ="image-1" />
        
        <img src = '/images/gallery2sm.png' alt ="Gallery " className ="image-2"/>
        
        <div  className ="image-3">
        <img src = '/images/gallery3sm.png' alt ="Gallery "  />
        <div className ="gallery-text">
        <h2>Let the games begin</h2>
        <p> Registration is on- get ready for the open </p>
        <a className = "btn btn-ghost" href = "#">Register</a>
        </div>
        </div>
        

        </section>
    )
}

export default Gallery