import React, {Component} from 'react';
import './css/Menu.css';

class Menu extends Component {


  render(){
    return (
     <nav>
       <h3>Coders.thoidai</h3>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">PRODUCTS</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">BLOG</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
     </nav>
    );

  }

 
}

export default Menu;
