import React, {Component} from 'react';
import Menu from './components/Menu';
import Introduce from './components/Introduce';
import NewProducts from './components/NewProducts';
import Subscribe from './components/Subscribe';

import './App.css';


class App extends Component {

  

  render(){
    return (
      <div  className="App">
          <Menu/>
          <Introduce/>
          <NewProducts/>
          <Subscribe/>
          {/* <BestSeller/> */}
      </div>
    );

  }

 
}

export default App;
