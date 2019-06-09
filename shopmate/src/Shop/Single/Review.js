import React from "react"

function Review(){
    return(
        <section>
        <h2>Product Reviews</h2> 
       
        <div>
        <div className= "ratings">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <p>Pablo Permins</p>
        </div>
        <p>
        Got this through the post the other day and right from opening the packet I knew this was quality, 
        put it on and I was right!! Well done</p>
        </div>
        <hr/>

        <h2>Add a review</h2>
        <form>
        <label htmlFor= "name">Add a nickname</label>
        <input type= "text"/>

        <label htmlFor= "review-comment">Your review</label>
        <input type= "textarea"/>
        
        <label htmlFor= "star">Overall rating</label>
        <input type ="submit" />
        </form>
        </section>
    )
}


export default Review