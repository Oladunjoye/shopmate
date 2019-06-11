import React from "react"

function Review(){
    return(
        <section className ="reviews">

        <div className ="product-review">
        <h2>Product reviews</h2> 
       
        <div className = "review-details-1">
        <div className= "ratings">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <p>Pablo Permins</p>
        </div>

        <div  className = "review-details-2">
        <p>
        Got this through the post the other day and right from opening the packet I knew this was quality, 
        put it on and I was right!! Well done
        </p>
        <span>
        <i>Heart</i> <i>Comment</i>
        </span>

        </div>

        </div>
        </div>
       
        <hr/>

        <div className="add-review">
        <h2>Add a review</h2>
        <form>
        <ul className ="wrapper">
        <li className ="form-row">
        <label htmlFor= "name">Add a nickname</label>
        <input type= "text"/>
        </li>

        <li className ="form-row">
        <label htmlFor= "review-comment">Your review</label>
        ​<textarea id="txtArea" rows="10" cols="70"></textarea> 
        </li>
        
        <li className ="form-row">
        <label htmlFor= "star">Overall rating</label>
        <div className= "ratings">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        </div>
        </li>

       
        

        
        <button type ="submit"  className ="review-submit">Submit</button>
       
        </ul>

        </form>
        </div>
        </section>
    )
}


export default Review