import *as types from '../constants/TypeAction';

let initialState = [
    {  
        id: 1,
        name: 'Blue in the watter',
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/2.jpg'
    },
    { 
        id: 2,  
        name: 'Moon light sadow',
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/6.jpg'
    },
    {
        id: 3,
        name: 'Memorise',
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/4.jpg'
    },
    {
        id: 4,
        name: 'Art of illustrator',
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/8.jpg'
    },
    {
        id: 5,
        name: 'Blue in the watter',
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/2.jpg'
    },
    {
        id: 6,
        name: 'Moon light sadow',
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/6.jpg'
    }
];

let myReducer = (state = initialState, action) =>{
    switch(action.type){
        default:
            return [...state];
    }
}

export default myReducer;



