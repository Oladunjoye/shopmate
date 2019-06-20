import {PRODUCTS} from '../constants'

const productReducer=(state =[], action) => {
    switch(action.type){
       
        case PRODUCTS.LOAD_SUCCESS:
            return [ ...action.products]

        default:
             return state
         
    }
}

export default productReducer