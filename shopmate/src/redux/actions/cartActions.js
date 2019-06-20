import {CART}  from '../constants'

const getCartId = () => (
    {
        type: CART.GET_CART_ID
    }
)
const setCartId = (id) => ({
   
    type:CART.SET_CART_ID,
    id

})

const addToCart = (cartId, productId, attributes) =>{
    
    return({
        type: CART.ADD_ITEM,
        cartId,
        productId,
        attributes
    })
}

//notifications --start
const setNotification = (message) => ({
    type: CART.SET_NOTIFICATION,
    message
})

const setError =(error) => ({
    
        type:CART.SET_ERROR,
        error
   
})
//notifications--end

const  getCartItems = (cartId) =>({

    type: CART.GET_ITEMS,
    cartId
    

})

const setCartItems = (items) => ({
    type: CART.SET_ITEMS,
    items
})

const removeItem = (itemId) => ({
    
        type: CART.REMOVE_ITEM,
        itemId
    
})

const updateItem =( itemId, quantity) => ({
    type: CART.UPDATE_ITEM,
    itemId,
    quantity
})

const deleteCart =(cartId) => ({

    type: CART.DELETE_CART,
    cartId
})

const getTotalAmount = (cartId) => ({
    type: CART.GET_TOTAL_AMOUNT,
    cartId
})


export{
    setCartId,addToCart,setNotification,setError,
    getCartItems,removeItem,updateItem,deleteCart,getTotalAmount,setCartItems, getCartId
}