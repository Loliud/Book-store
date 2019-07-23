import React, { Component, useState } from 'react';

import useWindowScrollPosition from "@rehooks/window-scroll-position";
import './css/Menu.css';
 


function TestNav() {
  const [change, setChange] = useState(false);
  const changePosition = 300;

  let position = useWindowScrollPosition();
  // position == { x: 0, y: 0 }

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  let bg = change ? "blue" : "transparent";
  console.log(bg);
   
  return bg;
  
  
}


class Menu extends Component {

  

  render() {
     

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
        <div className="icon">
          <i className="fas fa-cart-plus"></i>
          <i className="far fa-user"></i>
        </div>
      </nav>
    );

  }


}


export default Menu;
