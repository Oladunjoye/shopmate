import {PRODUCTS} from '../constants'

const fetchProducts =() =>({

    type:PRODUCTS.LOAD

})

const getProductsByDept =(department_id) =>({
    type: PRODUCTS. GET_BY_DEPT,
    department_id
})

const getProductsByCat =(category_id) =>({
    type: PRODUCTS. GET_BY_CATEGORY,
    category_id
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
    setProductError, getProductsByCat, getProductsByDept}