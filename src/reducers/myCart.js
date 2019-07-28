import *as types from '../constants/TypeAction';
let data = JSON.parse(localStorage.getItem('cart'));
let initialState = data ? data : [];

let myReducer = (state = initialState, action) =>{
    switch(action.type){
        case  types.ADD_TO_CART:
            let newItem = action.item;
            newItem.quantity = 1;
            state.push(newItem);
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        case types.SET_QUANTITY:
            state.forEach(item =>{
                if(item.id === action.id){
                    item.quantity = parseInt(action.quantity);
                }
            });
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}

export default myReducer;

