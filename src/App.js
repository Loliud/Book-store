import React, { Component } from 'react';
import Menu from './components/Menu';
import './App.css';
import Products from './components/Products';
// import HomePage from './pages/HomePage/HomePage';

class App extends Component {



  render() {
    return (
      <div className="App">
        <Menu />
        {/* <HomePage /> */}
        <Products/>
        <div id="goAhead"><a href="#introduce"> </a></div>
      </div>
    );

  }


}

export default App;
