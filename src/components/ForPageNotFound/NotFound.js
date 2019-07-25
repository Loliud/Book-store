import React, { Component } from 'react';
import './NotFound.css';
class NotFound extends Component {


    render() {
        return (
            <div className="not-found">
                <div className="header">
                    <img src="http://pngimg.com/uploads/book/book_PNG51019.png"></img>
                    <h1>Wear the old <span>coat</span> and buy the <span>new book</span></h1>
                </div>
                <div className="notification">          
                    <img src="https://demo.hasthemes.com/boighor-preview/boighor-v3/images/others/404.png"></img>
                    <h1>404 - PAGE NOT FOUND</h1>  
                </div>

            </div>
        );
    }
}

export default NotFound;