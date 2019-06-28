import {take, all,fork,takeEvery, takeLatest, call, put} from "redux-saga/effects"
import { createOrder, updateCustomerAddress,getOrder, getOrderDetails, setOrder, setOrderDetails, setOrderId } from "../actions/checkoutActions";
import axios from "axios"
import { toast } from "react-toastify";
import {CHECKOUT} from '../constants'
import {setError} from "../actions/cartActions";
import {setUser} from "../actions/authActions"

function * orderIdApiCall (params){

    const orderIdUrl = 'https://backendapi.turing.com/orders'
    let orderIdResult =   axios.post(orderIdUrl,{...params})
    
    
    return orderIdResult

}


function * createOrder  ({cartId, taxId, shippingId}){

    try{
         const orderId = yield call(orderIdApiCall, {cart_id:cartId, tax_id: taxId, shipping_id: shippingId})
         yield put(setOrderId(orderId))
    }
    catch(error){

    }

}


function * getOrder({orderId}){

const getOrderUrl = `https://backendapi.turing.com/orders/${orderId}`
    try{
         
    const response = yield call(fetch,getOrderUrl)
   
    const order =  yield call([response, response.json]);
        
 
    yield put (setOrder(order))
    }
    catch(error){

        yield put (setError(error.message))
    }
}

function * getOrderDetails({orderId}){

    const getOrderDetailsUrl = `https://backendapi.turing.com/orders/shortDetail/${orderId}`
        try{
             
        const response = yield call(fetch,getOrderDetailsUrl)
       
        const order =  yield call([response, response.json]);
            
     
        yield put (setOrderDetails(order))
        }
        catch(error){
    
            yield put (setError(error.message))
        }
    }
 function * updateCustomerAddressApiCall(data){

    const updateCustomerAddressUrl = 'https://backendapi.turing.com/customers/address'
    let customerResult =   axios.post(updateCustomerAddressUrl,{...data})
    
    
    return customerResult
    }
function * updateCustomerAddress(data){

    try{
        const user =  yield call(updateCustomerAddressApiCall, data)
        
        yield put(setUser(user.data))
         
        
    }
    catch(error){
        yield put(setError(error))
    }

}






export default function* checkoutSaga(){
   
    yield take (CHECKOUT.CREATE)
    yield call (createOrder)
    yield takeLatest(CHECKOUT.GET_ORDER, getOrder)
    yield takeLatest(CHECKOUT.GET_ORDER_DETAILS, getOrderDetails)
    yield takeLatest(CHECKOUT.UPDATE, updateCustomerAddress)


    
   

}