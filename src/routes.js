import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ShoppingCartPage from './pages/ShoppingCartPage/ShoppingCartPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ItemPage from './pages/ItemPage/ItemPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

const routes =[
    {
        name: 'HOME',
        path: '/',
        exact: true,
        main: () => <HomePage/>
    },
    {
        name: 'PRODUCTS',
        path: '/products',
        exact: false,
        main: () => <ProductsPage/>
    },
    {
        name: 'CART',
        path: '/cart',
        exact: false,
        main: () => <ShoppingCartPage/>
    },
    {
        name: '',
        path: '/product/:id',
        exact: false,
        main: () => <ItemPage/>
    },
    {
        name: '',
        path: '/checkout',
        exact: false,
        main: () => <CheckoutPage/>
    },
    {
        name: 'NOTFOUND',
        path: '',
        exact: false,
        main: () => <NotFoundPage/>
    }
];

export default routes;