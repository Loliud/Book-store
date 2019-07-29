import {combineReducers} from 'redux';
import products from './products';
import newProducts from './newProducts';
import bestSeller from './bestSeller';
import itemView from './item';
import myCart from './myCart';
import checkoutStatus from './checkoutStatus';
import user from './user';

let myReducer = combineReducers({
    products,
    newProducts,
    bestSeller,
    itemView,
    myCart,
    checkoutStatus,
    user
});


export default myReducer;