import *as types from '../constants/TypeAction';

let initialState = [
    {
        id:1,
        name: 'Blue in the watter',
        price: 120,
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/4.jpg'
    },
    {
        id: 2,
        name: 'Blue in the watter',
        price: 120,
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/4.jpg'
    },
    {
        id: 3,
        name: 'Blue in the watter',
        price: 120,
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/4.jpg'
    },
    {
        id: 4,
        name: 'Blue in the watter',
        price: 120,
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/4.jpg'
    },
    {
        id: 5,
        name: 'Blue in the watter',
        price: 120,
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/4.jpg'
    },
    {
        id: 6,
        name: 'Blue in the watter',
        price: 120,
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/4.jpg'
    },
    {
        id:1,
        name: 'Blue in the watter',
        price: 120,
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/4.jpg'
    },
    {
        id: 2,
        name: 'Blue in the watter',
        price: 120,
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/4.jpg'
    },
    {
        id: 3,
        name: 'Blue in the watter',
        price: 120,
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/4.jpg'
    },
    {
        id: 4,
        name: 'Blue in the watter',
        price: 120,
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/4.jpg'
    },
    {
        id: 5,
        name: 'Blue in the watter',
        price: 120,
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/4.jpg'
    },
    {
        id: 6,
        name: 'Blue in the watter',
        price: 120,
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/4.jpg'
    }
];

let myReducer = (state = initialState, action) =>{
    switch(action.type){
        default:
            return [...state];
    }
}

export default myReducer;