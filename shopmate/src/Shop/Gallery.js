import React from 'react'
import Filter from "./Filter"
import {Link} from 'react-router-dom'

function Gallery(){
    return(
        <section className ="gallery-shop">
        <aside className= "filter">
        <Filter/>
        </aside>

        
        <figure className = "shop1">
         <Link to = '/products/:id' className="single-term-link">
         <img src= "/images/shop1sm.png" alt ="Product Display"/>
        <p>Shirt 1</p>
        
        </Link>
        <a className = "btn btn-ghost " href = "#">Add to cart</a>
        </figure>
        

        <figure className = "shop2">
        <Link to = '/products/:id' className="single-term-link">
        <img src= "/images/shop2sm.png" alt ="Product Display"/>
        <p>Shirt 2</p>
        </Link>
        <a className = "btn btn-ghost" href = "#">Add to cart</a>
        
        </figure>

        <figure className = "shop3">
        <Link to = '/products/:id' className="single-term-link">
        <img src= "/images/shop3sm.png" alt ="Product Display"/>
        <p>Shirt 3</p>
        </Link>
        <a className = "btn btn-ghost" href = "#">Add to cart</a>
        
        </figure>

        <figure className = "shop4">
        <Link to = '/products/:id' className="single-term-link">
        <img src= "/images/shop4sm.png" alt ="Product Display"/>
        <p>Shirt 4</p>
        </Link>
        <a className = "btn btn-ghost" href = "#">Add to cart</a>
        </figure>

        <figure className = "shop5">
        <Link to = '/products/:id' className="single-term-link">
        <img src= "/images/shop5sm.png" alt ="Product Display"/>
        <p>Shirt 5</p>
        </Link>
        <a className = "btn btn-ghost" href = "#">Add to cart</a>
        </figure>

        <figure className = "shop6">
        <Link to = '/products/:id' className="single-term-link">
        <img src= "/images/shop6sm.png" alt ="Product Display"/>
        <p>Shirt 6</p>
        </Link>
        <a className = "btn btn-ghost" href = "#">Add to cart</a>
        </figure>
        </section>

    )
}

export default Gallery