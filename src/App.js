import React, { Component } from 'react';
import Menu from './components/Menu';
import './App.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from './routes';
import ScrollToTop from './components/ScrollToTop';


class App extends Component {

  showPage = (routes) => {
    let showPage = null;
    if (routes.length) {
      showPage = routes.map((route, index) => {
        return (
          <Route key={index} path={route.path} exact={route.exact} component={route.main} />
        );
      });
    }
    return showPage;
  }



  render() {
    return (
      <Router>
        <ScrollToTop>   
          <div className="App">
            <Menu />
            <div id="link-to-head"></div>
            <Switch>
              {this.showPage(routes)}
            </Switch>
            <Footer />
            <div id="goAhead"><a href="#link-to-head"> </a></div>
          </div>
        </ScrollToTop>
      </Router>
    );

  }


}

export default App;
