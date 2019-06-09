import React from 'react'

function Gallery(){
    return(
        <section className ="gallery-shop">
        <aside className= "filter">
        <form>
        </form>
        </aside>

        <figure className = "shop1">
        <img src= "/images/shop1sm.png" alt ="Product Image"/>
        <p>Shirt 1</p>
        <a className = "btn btn-ghost" href = "#">Add to cart</a>
        </figure>

        <figure className = "shop2">
        <img src= "/images/shop2sm.png" alt ="Product Image"/>
        <p>Shirt 2</p>
        <a className = "btn btn-ghost" href = "#">Add to cart</a>
        </figure>

        <figure className = "shop3">
        <img src= "/images/shop3sm.png" alt ="Product Image"/>
        <p>Shirt 3</p>
        <a className = "btn btn-ghost" href = "#">Add to cart</a>
        </figure>

        <figure className = "shop4">
        <img src= "/images/shop4sm.png" alt ="Product Image"/>
        <p>Shirt 4</p>
        <a className = "btn btn-ghost" href = "#">Add to cart</a>
        </figure>

        <figure className = "shop5">
        <img src= "/images/shop5sm.png" alt ="Product Image"/>
        <p>Shirt 5</p>
        <a className = "btn btn-ghost" href = "#">Add to cart</a>
        </figure>

        <figure className = "shop6">
        <img src= "/images/shop6sm.png" alt ="Product Image"/>
        <p>Shirt 6</p>
        <a className = "btn btn-ghost" href = "#">Add to cart</a>
        </figure>
        </section>

    )
}

export default Gallery