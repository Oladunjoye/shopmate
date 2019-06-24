import {CART} from '../constants'

const initialState = {
    cartId: '',
    cartItems: [],
    filteredItems: []

}
const cartReducer=(state = initialState, action) => {
    switch(action.type){
        
       
        case   CART.SET_CART_ID:
        return  {...state, cartId: action.id}

        
            
        case CART.SET_ITEMS:
               
        localStorage.setItem('cartItems',JSON.stringify(action.items))
         
               return {...state, cartItems:action.items}
        
      
    
        default:
             return state
         
    }
}

export default cartReducer




// case CART.ADD_ITEM:
            
//         let cartItems = state.cartItems
//         let productExists = false
        
//         if (cartItems.length > 0){
//         cartItems.forEach((item) => {
//            if(item.product_id === action.product.product_id ){
//                productExists = true
//            }
                          
//         })
        
//         }
//         if(!productExists){

//             cartItems = [...cartItems, action.product]
           
//            }
//            localStorage.setItem('cartItems',JSON.stringify(cartItems))
//            cartItems =  JSON.parse(localStorage.getItem('cartItems'))
//         return {...state, cartItems: cartItems}

// if(state.cartItems.length >  0){
//     cartItems =  JSON.parse(localStorage.getItem('cartItems'))
// }