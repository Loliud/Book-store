import *as types from '../constants/TypeAction';
let data = JSON.parse(localStorage.getItem('cart'));
let initialState = data ? data : [];

let findIndex = (products,item) =>{
    let index;
    products.forEach((product, i) =>{
        if(product.id === item.id ){
            index = i;
        }
    });
    return index;

}

let myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            let key = false;
            state.forEach(item => {
                if (item.id === action.item.id) {
                    item.quantity += 1;
                    key = true;
                }
            });
            if (key === false) {
                let newItem = action.item;
                newItem.quantity = 1;
                state.push(newItem);
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        case types.SET_QUANTITY:
            state.forEach(item => {
                if (item.id === action.id) {
                    item.quantity = parseInt(action.quantity);
                }
            });
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];

        case types.REMOVE_ITEM:
            let index = findIndex(state, action.id);
            state.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];

        case types.ON_PURCHASE:
            console.log('asdadasda');
            console.log(action);
            state = [];
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}

export default myReducer;

