import {combineReducers} from 'redux';
import products from './products';
import newProducts from './newProducts';
import bestSeller from './bestSeller';

let myReducer = combineReducers({
    products,
    newProducts,
    bestSeller
});


export default myReducer;