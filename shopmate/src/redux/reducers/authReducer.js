import {AUTH} from '../constants'

const initialState = {
    user : '',
    isAuthenticated : false,
    token: ''

}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case AUTH.SET_USER:
            
            return{isAuthenticated: true, user: action.credentials.customer, token: action.credentials.accessToken}
       
            default:
                return state
    }
}

export default authReducer