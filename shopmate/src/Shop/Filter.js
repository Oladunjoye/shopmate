import React from "react"
import {connect} from "react-redux"
import {getProductsByCat, getProductsByDept} from "../redux/actions/productActions"

function Filter(props){
    console.log(props)
return(
    
    <div className ="filter">
    
    <h2>Filter 101 Items</h2>
    
    <div className ="filter-group">
    <h3 className ="filter-subtitle">Season</h3>
    <p onClick ={() =>props.getProductsByDept(1)}>Regional</p>
    <p onClick ={() => props.getProductsByDept(2)}>Nature</p>
    <p onClick ={() => props.getProductsByDept(3)}>Seasonal</p>
    </div>

    <hr/>
   
    <div className ="filter-group">
    <h3 className ="filter-subtitle">Category</h3>
    <p onClick ={() => props.getProductsByCat(1)}>French</p>
    <p  onClick ={() =>props.getProductsByCat(2)}>Italian</p>
    <p  onClick ={() =>props.getProductsByCat(3)}>Irish</p>
    <p  onClick ={() =>props.getProductsByCat(4)}>Animals</p>
    <p  onClick ={() =>props.getProductsByCat(5)}>Flower</p>
    <p  onClick ={() =>props.getProductsByCat(6)}>Christmas</p>
    <p  onClick ={() =>props.getProductsByCat(7)}>Valentine</p>
    </div>


    
   
    </div>
    
)


}

const mapDispatchToProps = dispatch => ({

    getProductsByDept: (department_id) => dispatch(getProductsByDept(department_id)),
    getProductsByCat : (category_id) => dispatch(getProductsByCat(category_id))

})
export default connect(null, mapDispatchToProps)(Filter)