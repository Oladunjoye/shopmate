import {CHECKOUT}  from '../constants'

const createOrder = (cartId, shippingId,taxId ) => ({

    type: CHECKOUT.CREATE,
    cartId,
    shippingId,
    taxId
})

const setOrderId = (orderId) => ({
    type: CHECKOUT.SET_ORDER_ID,
    orderId
})

const set
const updateCustomerAddress =(data) =>({

    type: CHECKOUT.UPDATE,
    data

})

const getOrder =(orderId) => ({
    type: CHECKOUT.GET_ORDER,
    orderId
})

const getOrderDetails = (orderId) => ({
    type: CHECKOUT.GET_ORDER_DETAILS,
    orderId
})

export{createOrder, updateCustomerAddress,getOrder, getOrderDetails}