import {GET_ADD_PRODUCT , GET_CART_LIST}  from "../Action/AddToProductAction"
const initialState = {
   AddProductList : [],
   cartList:[]
}

const AddToProductReducer = (state = initialState , action)=>{
  switch(action.type){
    case GET_ADD_PRODUCT :
        return{
            ...state,
            AddProductList:action.payload
        }  
    case GET_CART_LIST :
        return{
            ...state,
            cartList:action.payload
        }
  }
  return state
}
export default AddToProductReducer