import {takeEvery,call,put} from "redux-saga/effects"
import {PRODUCTS} from "../constants"
import { setProducts,setProductError } from "../actions";

const url= 'https://backendapi.turing.com/products?'
function* handleProductsFetch(page){

    try{
        
    const response = yield call(fetch,`${url}page=1&limit=10`)
    
    const products =  yield call([response, response.json]);
   
    
    yield put (setProducts(products.rows))
    }
    catch(error){

        yield put (setProductError(error))
    }
}

export default function* productsSaga(){
    yield takeEvery(PRODUCTS.LOAD,handleProductsFetch)
}