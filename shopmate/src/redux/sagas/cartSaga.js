import {take, takeEvery, call, put} from "redux-saga/effects"
import {CART} from "../constants"
import { setCartId, setError } from "../actions/cartActions";

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

function * addItem(cartId, productId,attributes){

    const addItemUrl = 'https://backendapi.turing.com/shoppingcart/add'

}

export default function* cartSaga(){
    yield takeEvery(CART.GET_ITEMS, getCartItems)
}