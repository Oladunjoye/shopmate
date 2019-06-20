import {take, all,fork,takeEvery, takeLatest, call, put} from "redux-saga/effects"
import {CART} from "../constants"
import { setCartId, setError, setNotification, setCartItems } from "../actions/cartActions";
import axios from "axios"

const createCartIdUrl = 'https://backendapi.turing.com/shoppingcart/generateUniqueId'


function * createCart(){
    try{

        const response = yield call(fetch, createCartIdUrl)
        const cartId = yield call([response, response.json])
        yield put(setCartId(cartId))
    }
    catch(e){
        yield put(setError("Please try again."))
    }
}

function* getCartItems(cartId){
    const getCartItemsUrl = `https://backendapi.turing.com/shoppingcart/${cartId}`
    try{
        
    const response = yield call(fetch,getCartItemsUrl)
    // console.log(response)
    const cartItems =  yield call([response, response.json]);
   
    yield put (setCartItems(cartItems))
    }
    catch(error){

        yield put (setError(error.message))
    }
}

 function addItemApiCall(params){
    
    const addItemUrl = 'https://backendapi.turing.com/shoppingcart/add'
    let cartItemsResult =   axios.post(addItemUrl,{...params})
    
    console.log("cartItemsResult",cartItemsResult)
    return cartItemsResult
}

function* addItem ({cartId, productId,attributes}){
    

    try{
        const cartItems =  yield call(addItemApiCall, {cart_id:cartId, product_id:productId, attributes})
        
        console.log('cartItem', cartItems.data)
        yield put(setCartItems(cartItems.data))
        yield put(setNotification("Item added to cart"))
    }
    catch(error){
        yield put(setError(error.message))
    }
   

}

function removeItemApiCall(itemId){
    const removeItemUrl = `https://backendapi.turing.com/shoppingcart/removeProduct/${itemId}`
    return axios.delete(removeItemUrl)
}

function * removeItem(itemId){
    try{
        yield call(removeItemApiCall, itemId)
        yield put (setNotification("Item removed"))
    }
    catch(error){
        yield put(setError(error.message))
    }
}

function updateItemApiCall(params){
    const updateItemUrl = `https://backendapi.turing.com/shoppingcart/update/${params.itemId}`
    const cartItems = axios.patch(updateItemUrl, params).then((response) => response.json())
    return cartItems

}

function * updateItem (itemId, quantity){
    try{
        const cartItems = yield call(updateItemApiCall, {itemId, quantity})
        yield put(setCartItems(cartItems))
        
    }
    catch(error){
        yield put(setError(error.message))
    }
} 
export default function* cartSaga(){
   
    
     yield take(CART.GET_CART_ID)
     yield call(createCart)
     yield takeLatest(CART.GET_ITEMS, getCartItems)
     
     yield takeEvery(CART.ADD_ITEM, addItem)
     
    

}