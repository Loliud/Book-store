import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ShoppingCartPage from './pages/ShoppingCartPage/ShoppingCartPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ItemPage from './pages/ItemPage/ItemPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import TrackDeliveryPage from './pages/TrackDeliveryPage/TrackDeliveryPage';
import LoginPage from './pages/LoginPage/LoginPage';

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
        main: ({history}) => <ShoppingCartPage history={history}/>
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
        main: ({history}) => <CheckoutPage history={history}/>
    },
    {
        name: '',
        path: '/delivery',
        exact: false,
        main: () => <TrackDeliveryPage/>
    },
    {
        name: '',
        path: '/login',
        exact: false,
        main: ({history}) => <LoginPage history={history}/>
    },
    {
        name: 'NOTFOUND',
        path: '',
        exact: false,
        main: () => <NotFoundPage/>
    }
];

export default routes;