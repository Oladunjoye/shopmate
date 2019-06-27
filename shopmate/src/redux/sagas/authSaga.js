import {takeLatest, put, call} from "redux-saga/effects"
import {AUTH} from "../constants"
import {setError} from "../actions/cartActions";
import {setUser} from "../actions/authActions"
import axios from "axios"



const loginApiCall = (params) => {
    const loginUrl = 'https://backendapi.turing.com/customers/login'
    
    const userResult = axios.post(loginUrl, {...params})
    
    return userResult
}
function* handleLogin ({email, password}) {
    
    try{
        
        const user =  yield call(loginApiCall, {email, password})
        
        yield put(setUser(user.data))
        
    }
    catch(error){
        yield put(setError(error))
    }
}

const registerApiCall = (params) => {
    const registerUrl = 'https://backendapi.turing.com/customers'
    const userResult = axios.post(registerUrl, {...params})
    return userResult
}
function* handleRegister ({name, email, password})  {
 
    try{
        const user =  yield call(registerApiCall, {name, email, password})
        
        yield put(setUser(user.data))
     
        
    }
    catch(error){
        yield put(setError(error))
    }
}

export default function* authSaga() {
    yield takeLatest(AUTH.REGISTER, handleRegister)
    yield takeLatest(AUTH.LOGIN, handleLogin)

} 

