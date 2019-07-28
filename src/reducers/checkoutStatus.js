import *as types from '../constants/TypeAction';

let initialState  = null;

let myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.CHECKOUT_IS_ACTIVE:
            console.log(action);
            state = true;
            return state;
        default:
           return state;
    }
}

export default myReducer;