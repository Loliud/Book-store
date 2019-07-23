import React, { Component } from 'react';
import './css/Subscribe.css';

class Subscribe extends Component {
    render() {
        return (
            <div className="stay-with-us">
                <div className="image">
                    <img src="http://pngimg.com/uploads/book/book_PNG51114.png"></img>
                    <img height={200} src="http://pngimg.com/uploads/book/book_PNG51019.png"></img>
                </div>
                <div className="subscribe">
                    <h1>STAY WITH UST</h1>
                    <p>Subscribe to our newsletters now and stay up-to-date with new collections, the latest lookbooks and exclusive offers.</p>
                    <input type="email" placeholder="Enter your e-mail" required></input>
                    <button type="submit">Subscribe</button>
                </div>
            </div>
        );
    }
}

export default Subscribe;