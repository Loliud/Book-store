import React, { Component } from 'react';
import Introduce from '../../components/ForHomePage/Introduce';
import NewProductsContainer from '../../containers/NewProductsContainer';
import Subscribe from '../../components/ForHomePage/Subscribe';
import BestSellerContainer from '../../containers/BestSellerContainer';


class HomePage extends Component {
    render() {
        return (
            <div>
                <Introduce />
                <NewProductsContainer />
                <Subscribe />
                <BestSellerContainer />
            </div>
        )
    }
}

export default HomePage;