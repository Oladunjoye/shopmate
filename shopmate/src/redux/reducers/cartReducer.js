import {CART} from '../constants'
import { toast } from 'react-toastify';

const initialState = {
    cartId: localStorage.getItem('cartId') || '',
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    filteredItems: []

}
const cartReducer=(state = initialState, action) => {
    switch(action.type){
        
       
        case   CART.SET_CART_ID:
        
        localStorage.setItem('cartId',JSON.stringify(action.id))
      
        return  {...state, cartId: action.id}

        
            
        case CART.SET_ITEMS:
            
        localStorage.setItem('cartItems',JSON.stringify(action.items))
         
               return {...state, cartItems:action.items}
        
      
        
        
        default:
             return state
         
    }
}

export default cartReducer



