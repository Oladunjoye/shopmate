import React from "react"

function Hot(){
    return(
        <section className ="hot">
        <figure className = "hot1">
        <img src= "/images/hot4.png" alt ="Product Display"/>
        <p>Shirt 1</p>
        <a className = "btn btn-ghost" href = "#">View </a>
        </figure>

        <figure className = "hot2">
        <img src= "/images/hot2sm.png" alt ="Product Display"/>
        <p>Shirt 2</p>
        <a className = "btn btn-ghost" href = "#">View </a>
        </figure>

        <figure className = "hot3">
        <img src= "/images/hot3sm.png" alt ="Product Display"/>
        <p>Shirt 3</p>
        <a className = "btn btn-ghost" href = "#">View </a>
        </figure>
        </section>
        )
}

export default Hot