import *as types from '../constants/TypeAction';

let initialState = [
    

]

let myReducer = (state = initialState, action) =>{
    switch(action.type){
        case  types.GET_NEW_PRODUCTS:
            state = action.products.slice(0, 8);
            return [...state];
        default:
            return [...state];
    }
}

export default myReducer;

