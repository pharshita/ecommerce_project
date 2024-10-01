import axios from "axios"
import swal from '@sweetalert/with-react'
export const category_LIST = "category_LIST"
export const PRODUCT_LIST = "PRODUCT_LIST"
export const CATEGORY_PRODUCT_LIST = "CATEGORY_PRODUCT_LIST"

export const categoryResponse = (data)=>{
 return{
    type:category_LIST,
    payload:data
 }
}
export const productResponse = (data)=>{
 return{
    type:PRODUCT_LIST,
    payload:data
 }
}
export const CategoriesProductResponse = (data)=>{
 return{
    type:CATEGORY_PRODUCT_LIST,
    payload:data
 }
}

export const CategoryList = ()=>{
    return(dispatch)=>{
        axios.get("http://localhost:5000/product-category")
        .then((res) => {
            dispatch(categoryResponse(res.data))
        })
    }
}

export const ProdutList =()=>{
    return(dispatch)=>{
        axios.get('http://localhost:5000/add-product')
        .then((res) => {
            dispatch(productResponse(res.data))
        })
    }
}

export const CategoriesProductList = (event)=>{
    return(dispatch)=>{
        axios.get(`http://localhost:5000/product-category/${event.target.value}`)
        .then((res) => {
            dispatch(CategoriesProductResponse(res.data))
        })
    }
}
export const AddToCart = (id , navigate)=>{
    return(dispatch)=>{
        axios.post(`http://localhost:5000/cart/${id}`)
        .then((res) => {
            navigate(`/cart`)
        })
    }
}
export const DeleteProductID = (id)=>{
    return(dispatch)=>{
        axios.delete(`http://localhost:5000/add-product/${id}`).then((res) => {
            swal({
              text: "Document removed successfully!",
              icon: "success",
              buttons: false,
              timer: 2000,
            });
            dispatch(ProdutList())
          })
    }
}
export const UpdateProductID = (id ,payload)=>{
    return(dispatch)=>{
        axios.put(`http://localhost:5000/add-product/${id}`, payload)
      .then((res) => {  
        dispatch(ProdutList())
      })
    }
}
