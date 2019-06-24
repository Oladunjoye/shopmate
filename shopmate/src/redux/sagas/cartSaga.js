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

function* getCartItems({cartId}){
    const getCartItemsUrl = `https://backendapi.turing.com/shoppingcart/${cartId}`
    try{
        debugger 
    const response = yield call(fetch,getCartItemsUrl)
   debugger
    const cartItems =  yield call([response, response.json]);
        debugger
 console.log("Run", cartItems)
    yield put (setCartItems(cartItems))
    }
    catch(error){

        yield put (setError(error.message))
    }
}

 function addItemApiCall(params){
    
    const addItemUrl = 'https://backendapi.turing.com/shoppingcart/add'
    let cartItemsResult =   axios.post(addItemUrl,{...params})
    
    
    return cartItemsResult
}

function* addItem ({cartId, productId,attributes}){
   

    try{
        const cartItems =  yield call(addItemApiCall, {cart_id:cartId, product_id:productId, attributes})
        
         
        
        yield put(setCartItems(cartItems.data))
        
        
        yield put(setNotification("Item added to cart"))
    }
    catch(error){
        yield put(setError(error.message))
    }
   

}

function removeItemApiCall({item_id}){
    console.log("api call",item_id)
    const removeItemUrl = `https://backendapi.turing.com/shoppingcart/removeProduct/${item_id}`
    return axios.delete(removeItemUrl)
}

function* removeItem({itemId, items} ){

    try{
        
        
        
         yield call(removeItemApiCall, {item_id: itemId} )
          const cartItems = items.filter((item) => {
           return item.item_id !== itemId
          })

          localStorage.setItem('cartItems', JSON.stringify(cartItems))
          yield put(setCartItems(cartItems))
       
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
     yield takeEvery (CART.REMOVE_ITEM, removeItem)
         
     

    
     
    

}


// function* addItem ({cartId, productId,attributes}){
    

//     try{
//         const cartItems =  yield call(addItemApiCall, {cart_id:cartId, product_id:productId, attributes})
        
//         console.log('cartItem', cartItems.data)
//         yield put(setCartItems(cartItems.data))
//         yield put(setNotification("Item added to cart"))
//     }
//     catch(error){
//         yield put(setError(error.message))
//     }
   

// }