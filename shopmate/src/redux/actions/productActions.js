import {PRODUCTS} from '../constants'

const fetchProducts =() =>({

    type:PRODUCTS.LOAD

})

const setProducts =(products) =>({

    type:PRODUCTS.LOAD_SUCCESS,
    products


})

const setProductError =(error) =>({

    type:PRODUCTS.LOAD_FAILURE,
    error
})

export{
    fetchProducts,
    setProducts,
    setProductError}