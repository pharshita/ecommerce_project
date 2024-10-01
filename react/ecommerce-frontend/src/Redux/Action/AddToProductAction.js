import axios from "axios"
export const GET_ADD_PRODUCT = "GET_ADD_PRODUCT"
export const GET_CART_LIST = "GET_CART_LIST"

export const addproductResponse = (data)=>{
    return{
       type:GET_ADD_PRODUCT,
       payload:data
    }
}
export const cartResponse = (data)=>{
    return{
       type:GET_CART_LIST,
       payload:data
    }
}

export const getAddProduct = (productId)=>{
    return(dispatch)=>{
        axios.get(`http://localhost:5000/product-category/categoryId/${productId}`)
        .then((res) => {
            dispatch(addproductResponse(res.data))
        })
    }
}

export const getCartList = ()=>{
    return(dispatch)=>{
        axios.get(`http://localhost:5000/cart`)
        .then((res) => {
            dispatch(cartResponse(res.data))
        })
    }
}
export const deleteCartID= (id)=>{
    return(dispatch)=>{
        axios.delete(`http://localhost:5000/cart/${id}`)
        .then((res) => {
            dispatch(getCartList())
        })
    }
}
export const UpdateCartIDPlus= (data,obj)=>{
    debugger
    return(dispatch)=>{
        axios.patch(`http://localhost:5000/cart/${data._id.toString()}`, obj)
        .then((res) => {
                debugger
                dispatch(getCartList())
            })
    }
}
export const UpdateCartID= (data,obj)=>{
    return(dispatch)=>{
        axios.patch(`http://localhost:5000/cart/${data._id.toString()}`, obj)
            .then((res) => {
                if(res.data.Number==0){
                    deleteCartID(data._id.toString())
                }
                dispatch(getCartList())
            })
    }
}
