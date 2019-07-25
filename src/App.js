import React, { Component } from 'react';
import Menu from './components/Menu';
import './App.css';
import Footer from './components/Footer';

// import HomePage from './pages/HomePage/HomePage';
// import ProductsPage from './pages/ProductsPage/ProductsPage';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ShoppingCart from './components/ForShoppingCart/ShoppingCart';

class App extends Component {



  render() {
    return (
      <div className="App">
        <Menu />
        {/* <HomePage /> */}
        {/* <ProductsPage/> */}
        {/* <NotFoundPage/> */}
        <ShoppingCart/>
        <Footer/>
        <div id="goAhead"><a href="#Products"> </a></div>
      </div>
    );

  }


}

export default App;
