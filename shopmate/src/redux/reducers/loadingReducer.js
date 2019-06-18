import {PRODUCTS} from '../constants'

const loadingReducer=(state =false, action) => {
    switch(action.type){
        case PRODUCTS.LOAD:
            return true
        case PRODUCTS.LOAD_SUCCESS:
            return false

        case PRODUCTS.LOAD_FAILURE:
                return false
        default:
             return state
         
    }
}

export default loadingReducer