import {fetchProducts,setProducts,setProductError} from './productActions'
import{ setCartId,addToCart,setNotification,setError,
    getCartItems,removeItem,updateItem,deleteCart,getTotalAmount,setCartItems, getCartId,
  
} from './cartActions'
import {  register, login, authFail, setUser} from "./authActions"


export{
    fetchProducts,
    setProducts,
    setProductError, setCartId,addToCart,setNotification,setError,
    getCartItems,removeItem,updateItem,deleteCart,getTotalAmount,setCartItems, getCartId,
    register, login, authFail, setUser}