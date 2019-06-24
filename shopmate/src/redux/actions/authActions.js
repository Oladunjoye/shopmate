import {AUTH} from "../constants"

const register = (name, email, password ) => ({
    type: AUTH.REGISTER,
    name,
    email,
    password
}) 

const login = ( email, password ) => ({
    type: AUTH.LOGIN,
        email,
    password
}) 

const setUser = (credentials) => (
    {
        type: AUTH.SET_USER,
        credentials
    }
)

const authFail = () => ({
    type: AUTH.FAIL
})

export {register, login, authFail, setUser}