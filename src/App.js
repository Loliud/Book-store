import React, {Component} from 'react';
import Menu from './components/Menu';
import Introduce from './components/Introduce';

import './App.css';

class App extends Component {

  render(){
    return (
      <div  className="App">
          <Menu/>
          <Introduce/>
      </div>
    );

  }

 
}

export default App;
