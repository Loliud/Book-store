import React, { Component } from 'react';
import Introduce from '../../components/ForHomePage/Introduce';
import NewProducts from '../../components/ForHomePage/NewProducts';
import Subscribe from '../../components/ForHomePage/Subscribe';
import BestSeller from '../../components/ForHomePage/BestSeller';
import Footer from '../../components/ForHomePage/Footer';


class HomePage extends Component {
    render() {
        return (
            <div>
                <Introduce />
                <NewProducts />
                <Subscribe />
                <BestSeller />
                <Footer />
            </div>
        )
    }
}

export default HomePage;