import *as types from '../constants/TypeAction';

let initialState = null



let myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.ON_LOGIN:
            state = action.user;
            return state;  
        default:
            return state
    
    }
}

export default myReducer;



