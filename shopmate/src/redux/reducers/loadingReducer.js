import {PRODUCTS, CHECKOUT} from '../constants'

const loadingReducer=(state =false, action) => {
    switch(action.type){
        case PRODUCTS.LOAD:
         case CHECKOUT.CRREATE:
            return true
        case PRODUCTS.LOAD_SUCCESS:
        case PRODUCTS.LOAD_FAILURE:
                return false
        default:
             return state
         
    }
}

export default loadingReducer