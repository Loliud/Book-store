import React, {Component} from 'react';
import Menu from './components/Menu';
import Introduce from './components/Introduce';
import NewProducts from './components/NewProducts';

import './App.css';

class App extends Component {

  

  render(){
    return (
      <div  className="App">
          <Menu/>
          <Introduce/>
          <NewProducts/>
      </div>
    );

  }

 
}

export default App;
