import React from "react"

function Filter(){
return(
    
    <form>
    <h3>Filter 300 Items</h3>
    <div>
    <label htmlFor="price">Season</label>
    <select name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
    </select>
    </div>

    <div>
    <label htmlFor="price">Category</label>
    <select name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
    </select>
    </div>

    <div>
    <label htmlFor="price">Colors</label>
    <input type="radio" name="gender" value="red" /> 
    <input type="radio" name="gender" value="yellow" /> 
    <input type="radio" name="gender" value="yellow" /> 
    <input type="radio" name="gender" value="other" />  
    </div>

    <div className="form-group slidecontainer" >
    <label htmlFor="price">Price</label>
    <input type="range" min="1" max="100" value="50" />

    </div>

    <button>Apply</button>
    
    </form>
    
)


}

export default Filter