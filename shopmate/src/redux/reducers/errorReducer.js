import {PRODUCTS, CART, AUTH} from '../constants'


const errorReducer=(state =null, action) => {
    switch(action.type){
        case PRODUCTS:
        case PRODUCTS.LOAD_SUCCESS:
        
            return null

        case PRODUCTS.LOAD_FAILURE:
         case CART.SET_ERROR:
        case AUTH.FAIL:
        
                return action.error
        default:
             return state
         
    }
}

export default errorReducer