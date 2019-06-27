import {take, all,fork,takeEvery, takeLatest, call, put} from "redux-saga/effects"
import {CART} from "../constants"
import { setCartId, setError, setNotification, setCartItems } from "../actions/cartActions";
import axios from "axios"
import { toast } from "react-toastify";

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
         
    const response = yield call(fetch,getCartItemsUrl)
   
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
    
    
    return cartItemsResult
}

function* addItem ({cartId, productId,attributes}){
   

    try{
        
        const cartItems =  yield call(addItemApiCall, {cart_id:cartId, product_id:productId, attributes})
        
         
        
        yield put(setCartItems(cartItems.data))
        
        toast.success("Item added to cart", 
        {className: 'toast-success',
        
          })
        
      
    }
    catch(error){
        yield put(setError(error.message))
        toast.warn("Failed to add item", {className: 'toast-fail',
        
          })
    }
   

}

function removeItemApiCall({item_id}){
   
    const removeItemUrl = `https://backendapi.turing.com/shoppingcart/removeProduct/${item_id}`
    return axios.delete(removeItemUrl)
}

function* removeItem({itemId, items} ){

    try{
        
        
        
         yield call(removeItemApiCall, {item_id: itemId} )
         debugger
          const cartItems = items.items.filter((item) => {
           return item.item_id !== itemId
          })

          localStorage.setItem('cartItems', JSON.stringify(cartItems))
          
          yield put(setCartItems(cartItems))
       
          toast.success("Item removed from cart", 
        {className: 'toast-success',
        
           })
    }
    catch(error){
        yield put(setError(error.message))
        toast.error("Failed to remove item", {className: 'toast-fail',
        
          })
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
      yield takeEvery (CART.REMOVE_ITEM, removeItem)

      debugger
    yield takeEvery(CART.ADD_ITEM, addItem)
    
    
         
     

    
     
    

}


