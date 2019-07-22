import React, {Component} from 'react';
import Menu from './components/Menu';
import Introduce from './components/Introduce';
import Trend from './components/Trend';

import './App.css';

class App extends Component {

  

  render(){
    return (
      <div  className="App">
          <Menu/>
          <Introduce/>
          <Trend/>
      </div>
    );

  }

 
}

export default App;
