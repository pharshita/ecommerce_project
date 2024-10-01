import { combineReducers } from 'redux';
import CategoryReducer from './CategoryReducer';
import AddToProductReducer from './AddToProductReducer';

export default combineReducers({
    CategoryReducer,
    AddToProductReducer
})