import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';





class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: true
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      let isScroll = window.scrollY < 300;
      if (isScroll !== this.state.key) {
        this.setState({
          key: isScroll
        });
      }
    });
  }

  // showMenu = (routes) =>{
  //   let showMenu = null;
  //   if(routes.length){
  //     showMenu = routes.map(route =>{
  //       return (
  //         <li>
  //            <Link  to={routeexact={true.toString()} .path}={route.exact}>{route.name}</Link>
  //         </li>

  //       )
  //     });
  //   }
  //   return showMenu;
  // }


  render() {

    let classBg = this.state.key ? 'bg-navbar' : 'bg-navbar-isScroll';


    return (
      <nav className={classBg} id="menu">
        <h3>Coders.thoidai</h3>
        <ul>
          <li>
            <Link exact={true.toString()} to="/">HOME</Link>
          </li>
          <li>
            <Link to="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link to='/about' >ABOUT</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/contact" >CONTACT</Link>
          </li>
        </ul>
        <div className="icon">
          <Link to="/cart"><i className="fas fa-cart-plus"></i></Link>
          <i className="far fa-user"></i>
        </div>
      </nav>
    );

  }


}


export default Menu;
