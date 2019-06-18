import {PRODUCTS} from '../constants'

const productReducer=(state =[], action) => {
    switch(action.type){
        case PRODUCTS:
            return [...state, action.products]
        case PRODUCTS.LOAD_SUCCESS:
            return [...state, action.products]

        case PRODUCTS.LOAD_FAILURE:
                return [...state, action.error]
        default:
             return state
         
    }
}

export default productReducer