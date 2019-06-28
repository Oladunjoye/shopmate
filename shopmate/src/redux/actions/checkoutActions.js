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

const getOrder =(orderId) => ({
    type: CHECKOUT.GET_ORDER,
    orderId
})

const setOrder = (order) =>({
    type: CHECKOUT.SET_ORDER,
    order
})

const getOrderDetails = (orderId) => ({
    type: CHECKOUT.GET_ORDER_DETAILS,
    orderId
})


const setOrderDetails = (orderDetails) =>({
    type: CHECKOUT.SET_ORDER,
    orderDetails
})


const updateCustomerAddress =(data) =>({

    type: CHECKOUT.UPDATE,
    data

})

export{createOrder, updateCustomerAddress,getOrder, getOrderDetails, setOrder, setOrderDetails, setOrderId}