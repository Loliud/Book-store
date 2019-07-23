import React, {Component} from 'react';
import Menu from './components/Menu';
import Introduce from './components/Introduce';
import NewProducts from './components/NewProducts';
import Subscribe from './components/Subscribe';
import BestSeller from './components/BestSeller';
import Footer from './components/Footer';
import './App.css';


class App extends Component {

  

  render(){
    return (
      <div  className="App">
          <Menu/>
          <Introduce/>
          <NewProducts/>
          <Subscribe/>
          <BestSeller/>
          <Footer/>
          <div id="goAhead"><a href="#introduce"></a></div>
      </div>
    );

  }

 
}

export default App;
