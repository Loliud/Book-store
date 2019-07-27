import {combineReducers} from 'redux';
import products from './products';
import newProducts from './newProducts';
import bestSeller from './bestSeller';
import itemView from './item';
import myCart from './myCart';

let myReducer = combineReducers({
    products,
    newProducts,
    bestSeller,
    itemView,
    myCart
});


export default myReducer;