import {takeEvery,call,put, takeLatest} from "redux-saga/effects"
import {PRODUCTS} from "../constants"
import { setProducts,setProductError } from "../actions";
import { toast } from "react-toastify";

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

const depturl= 'https://backendapi.turing.com/products/inDepartment/'
function* handleProductsDeptFetch({department_id}){

    try{
        
    const response = yield call(fetch,`${depturl}${department_id}?page=1&limit=10`)
    
    
    const products =  yield call([response, response.json]);
    
        
    
    yield put (setProducts(products.rows))
    }
    catch(error){

        yield put (setProductError(error))
    }
}

const caturl= 'https://backendapi.turing.com/products/inCategory/'
function* handleProductsCatFetch({category_id}){

    try{
        debugger
    const response = yield call(fetch,`${caturl}${category_id}?page=1&limit=10`)
    
    const products =  yield call([response, response.json]);
    debugger
    
    yield put (setProducts(products.rows))
    }
    catch(error){

        yield put (setProductError(error))
        yield toast.warn("Oops something went wrong")
    }
}


export default function* productsSaga(){
    yield takeLatest(PRODUCTS.LOAD,handleProductsFetch)
    yield takeLatest(PRODUCTS.GET_BY_CATEGORY,handleProductsCatFetch)
    yield takeLatest(PRODUCTS.GET_BY_DEPT,handleProductsDeptFetch)

}