import {CART} from '../constants'

const initialState = {
    cartId: '',
    cartItems: [],
    filteredItems: []

}
const cartReducer=(state = initialState, action) => {
    switch(action.type){
        
        case   CART.SET_CART_ID:
        return  {...state, cartId:action.id}
        case CART.SET_ITEMS:
        
       
        return {...state, cartItems:action.items}
        
       

        default:
             return state
         
    }
}

export default cartReducer