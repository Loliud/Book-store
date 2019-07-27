import *as types from '../constants/TypeAction';

let initialState = [
    
];

let myReducer = (state = initialState, action) =>{
    switch(action.type){
        case  types.ADD_TO_CART:
            state.push(action.item);
            return [...state];
        default:
            return [...state];
    }
}

export default myReducer;

