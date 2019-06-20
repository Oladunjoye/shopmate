import {PRODUCTS, CART} from '../constants'


const errorReducer=(state =null, action) => {
    switch(action.type){
        case PRODUCTS:
        case PRODUCTS.LOAD_SUCCESS:
        
            return null

        case PRODUCTS.LOAD_FAILURE:
         case CART.SET_ERROR:
        
                return action.error
        default:
             return state
         
    }
}

export default errorReducer