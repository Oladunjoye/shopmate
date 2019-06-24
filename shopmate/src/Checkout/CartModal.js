import React from "react"
import {Link} from "react-router-dom";
import Cart from "./Cart"

function CartModal(){
    return(


<div className="modal fade " id="modalCartForm" tabIndex="-1" role="dialog" aria-labelledby="modalCartForm"
aria-hidden="true">

<div className="modal-dialog modal-lg " role="document">
  <div className="modal-content">
   <Cart/>
   </div>
    
</div>
</div>
    )
}

export default CartModal