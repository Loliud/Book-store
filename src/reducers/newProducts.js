import *as types from '../constants/TypeAction';

let initialState = [
    {
        id: 1,   
        name: 'Blue in the watter',
        price: 80,
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/2.jpg',
        newItem: true,
        bestSeller: false,
        inventory: 20
    },
    {
        id: 2,   
        name: 'Tory',
        price: 120,
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/2.jpg',
        newItem: true,
        bestSeller: false,
        inventory: 20
    },
    {
        id: 3,   
        name: 'Blue in the watter',
        price: 120,
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/2.jpg',
        newItem: true,
        bestSeller: false,
        inventory: 20
    },
    {
        id: 4,   
        name: 'Blue in the watter',
        price: 200,
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/2.jpg',
        newItem: true,
        bestSeller: false,
        inventory: 20
    },
    {
        id: 5,   
        name: 'Blue in the watter',
        price: 170,
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/2.jpg',
        newItem: true,
        bestSeller: false,
        inventory: 20
    },
    {
        id: 6,   
        name: 'Blue in the watter',
        price: 150,
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/2.jpg',
        newItem: true,
        bestSeller: false,
        inventory: 20
    }
    

]

let myReducer = (state = initialState, action) =>{
    switch(action.type){
        default:
            return [...state];
    }
}

export default myReducer;

