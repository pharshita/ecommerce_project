import { category_LIST, PRODUCT_LIST , CATEGORY_PRODUCT_LIST} from "../Action/CategoryAction"
const initialValue = {
    categorylist: [],
    productList: [],
    productCategoryList:[]
}

const CategoryReducer = (state = initialValue, action) => {
    switch (action.type) {
        case category_LIST:
            return {
                ...state,
                categorylist: action.payload == 'no result found' ? [] : action.payload
            }
        case PRODUCT_LIST:
            return {
                ...state,
                productList: action.payload == 'no result found' ? [] : action.payload
            } 
        case CATEGORY_PRODUCT_LIST:
            return {
                ...state,
                productCategoryList: action.payload == 'no result found' ? [] : action.payload
            }
    }
    return state
}
export default CategoryReducer