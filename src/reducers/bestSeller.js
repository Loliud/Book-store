import *as types from '../constants/TypeAction';

let initialState = [
   
];

let myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.GET_BEST_SELLER:
            state = action.products;
            return [...state];
        default:
            return [...state];
    }
}

export default myReducer;