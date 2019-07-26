import React, { Component } from 'react';
import './Item.css';
import { Button } from 'reactstrap';
class Item extends Component {
  


    render() {
        return (
            <div className="item-page">
                <div className="header">
                    <img src="http://pngimg.com/uploads/book/book_PNG51019.png" alt="item"></img>
                    <h1>Today a <span>reader</span>, tomorrow a <span>leader</span></h1>
                </div>

                <div className="item-setting">
                    <div id="image">
                        <div className="item-product">
                            <img src="https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/8.jpg" alt="item"></img>
                        </div>
                    </div>
                    <div className="item-content">
                        <h2>Semper Sapien</h2>

                        <div id="rating">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                        </div>
                        <h3>$ 52.00</h3>
                        <p>Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear. Thick material blocks out the wind as ribbed cuffs and bottom band seal in body heat.
                                    Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear.</p>
                        <p>Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear.</p>
                        <p id="availability">Availability: <span>in Stock</span></p>
                        <Button color="primary">Add to card</Button>
                        <p>Categories: Adventure, Kids' Music</p>
                        <div className="link-icon">
                            <h6>Share:</h6>
                            <div className="logo">
                                <a href="github.com"><i class="fab fa-github"></i></a>
                                <a href="facebook.com"><i class="fab fa-facebook-square"></i></a>
                                <a href="twitter.come"><i class="fab fa-twitter"></i></a>
                                <a href="linkedin.com"><i class="fab fa-linkedin-in"></i></a>
                                <a href="google.com"><i class="fab fa-google"></i></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;