import React, { Component } from 'react';
import Menu from './components/Menu';
import './App.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import routes from './routes';


class App extends Component {

  showPage = (routes) => {
      let showPage = null;
      if(routes.length){
        showPage = routes.map((route, index) =>{
          return(
            <Route key={index} path={route.path} exact={route.exact} component={route.main} />
          );
        });
      }
      return showPage;
  }



  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <Switch>
            {this.showPage(routes)}
          </Switch>
          <Footer />
          <div id="goAhead"><a href="#Products"> </a></div>
        </div>
      </Router>
    );

  }


}

export default App;
