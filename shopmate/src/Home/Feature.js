import  React from "react"
import {Link} from 'react-router-dom'

function Feature(){
    return(
        <section className ="feature">
        <img src= "/images/featuresm.png" alt = "Feature"/>
        <div>
        <h2>Vera Bradley</h2>
        <p>Carry the day in style with this extra-large tote crafted in our chic B.B.
         Collection textured PVC. Featuring colorful faux leather trim, this tote offers a roomy interior plus just enough perfectly placed pockets to keep smaller items organized and easy to find.</p>
         <Link to ='/products' className = "btn btn-ghost">Shop now</Link>
         </div>
        </section>
    )
}

export default Feature