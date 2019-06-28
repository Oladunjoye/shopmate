import {CHECKOUT} from '../constants'

const initialState  = {
    orderId: '',
    order: [],
    orderDetails : {}
}

const checkoutReducer =(state = initialState, action) =>{
    switch(action.type){

        case CHECKOUT.SET_ORDER_ID:
            localStorage.setItem('orderId', action.orderId)
            return {...state, orderId: action.orderId
            }
         
        case CHECKOUT.SET_ORDER:
            return {...state, order: action.order}

            case CHECKOUT.SET_ORDER_DETAILS:
                    return {...state, orderDetails: action.orderDeails}
        default:
            return state; 
    }
}

export default checkoutReducer