import {AUTH} from '../constants'

const initialState = {
    user : JSON.parse(localStorage.getItem('user')),
    isAuthenticated :localStorage.getItem('isAuthenticated') === 'true' ? true : false,
    token: localStorage.getItem('token')

}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case AUTH.SET_USER:
            console.log(action)
            localStorage.setItem('user',JSON.stringify(action.credentials.customer))
            localStorage.setItem('token',(action.credentials.accessToken))
          localStorage.setItem('isAuthenticated',JSON.stringify(true))

            
            return{isAuthenticated: true, user: action.credentials.customer, token: action.credentials.accessToken}
       
            default:
                return state
    }
}

export default authReducer