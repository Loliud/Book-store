import *as types from '../constants/TypeAction';
let initialState = null;

let myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.GET_ITEM_VIEW:
            
            state = action.product;
            return state;
        default:
            return state;
    }
}

export default myReducer;