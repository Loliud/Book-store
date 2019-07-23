import React, { Component } from 'react';
import './css/Menu.css';
 




class Menu extends Component {

  constructor(props){
    super(props);
    this.state = {
      key : true
    }
  }

  componentDidMount(){
    document.addEventListener('scroll', ()=>{
      let isScroll = window.scrollY < 300;
      if(isScroll !== this.state.key){
        this.setState({
          key: isScroll
        });
      }
    });
  }

  

  render() {
    
    let classBg = this.state.key ? 'bg-navbar' : 'bg-navbar-isScroll';
     

    return (
      <nav className={classBg} id="menu">
        <h3>Coders.thoidai</h3>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">PRODUCTS</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">BLOG</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
        <div className="icon">
          <i className="fas fa-cart-plus"></i>
          <i className="far fa-user"></i>
        </div>
      </nav>
    );

  }


}


export default Menu;
