import {take, all,fork,takeEvery, takeLatest, call, put} from "redux-saga/effects"
import { createOrder, updateCustomerAddress,getOrder, getOrderDetails, setOrder, setOrderDetails, setOrderId } from "../actions/checkoutActions";
import axios from "axios"
import { toast } from "react-toastify";
import {CHECKOUT} from '../constants'
import {setError} from "../actions/cartActions";
import {setUser} from "../actions/authActions"

function *orderIdApiCall (params){

   

    const orderIdUrl = 'https://backendapi.turing.com/orders'
    const config = {
        method: 'post',
        url: orderIdUrl,
        headers: { 'USER-KEY': localStorage.getItem('token') },
        data: {cart_id: "1xh7q2ze08jxgi08pi", tax_id: 1, shipping_id:  2}
    }
     
    let orderIdResult =   axios(config)
    
    
    return orderIdResult

}


function *handleCreateOrder(cart_id, tax_id, shipping_id){

    try{
        
         const orderId = yield call(orderIdApiCall, {cart_id, tax_id, shipping_id})
         debugger
         yield put(setOrderId(orderId))
    }
    catch(error){
         yield put(setError(error))
         toast.error("Oops something went wrong")
    }

}


function * handleGetOrder({orderId}){

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

function * handleGetOrderDetails({orderId}){

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
 function *updateCustomerAddressApiCall(data){

    const updateCustomerAddressUrl = 'https://backendapi.turing.com/customers/address'
    let customerResult =   axios.post(updateCustomerAddressUrl,{...data})
    
    
    return customerResult
    }
function *  handleUpdateCustomerAddress(data){

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
    yield call (handleCreateOrder)
    yield takeLatest(CHECKOUT.GET_ORDER, handleGetOrder)
    yield takeLatest(CHECKOUT.GET_ORDER_DETAILS, handleGetOrderDetails)
    yield takeLatest(CHECKOUT.UPDATE, handleUpdateCustomerAddress)


    
   

}