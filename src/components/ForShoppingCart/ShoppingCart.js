import React, { Component } from 'react';
import './ShoppingCart.css';
import { Button, Toast, ToastBody, ToastHeader } from 'reactstrap';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="shopping-cart">
                <div className="header">
                    <img src="http://pngimg.com/uploads/book/book_PNG51019.png"></img>
                    <h1>I read <span>a book</span> one day and my whole life was <span>changed !</span></h1>
                </div>
                <div className="list">
                    <h1>SHOPPING CART</h1>
                    <table>
                        <tr>
                            <th>IMAGE</th>
                            <th>PRODUCT</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>TOTAL</th>
                            <th>REMOVE</th>
                        </tr>
                        <tr>
                            <td className="slot-image"><img src="https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/2.jpg"></img></td>
                            <td>Blue in the watter</td>
                            <td>160 $</td>
                            <td><input min={1} max={100} type="number" ></input></td>
                            <td>640 $</td>
                            <td><Button color="info">Remove</Button></td>
                        </tr>
                        <tr>
                            <td className="slot-image"><img src="https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/2.jpg"></img></td>
                            <td>Blue in the watter</td>
                            <td>160 $</td>
                            <td><input min={1} max={100} type="number" ></input></td>
                            <td>640 $</td>
                            <td><Button color="info">Remove</Button></td>
                        </tr>
                        <tr>
                            <td className="slot-image"><img src="https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/2.jpg"></img></td>
                            <td>Blue in the watter</td>
                            <td>160 $</td>
                            <td><input min={1} max={100} type="number" ></input></td>
                            <td>640 $</td>
                            <td><Button color="info">Remove</Button></td>
                        </tr>
                        <div className="p-3 bg-warning my-2 rounded sum">
                            <Toast>
                                <ToastHeader>
                                    Summary
                             </ToastHeader>
                                <ToastBody>
                                    <div className="title">
                                        <h6>Subtotal</h6>
                                        <h6>Shipping</h6>
                                        <h5>Total</h5>
                                    </div>
                                    <div className="value">
                                        <p>1000 $</p>
                                        <p>20 $</p>
                                        <p>1020 $</p>
                                        <Button className="submit" color="success">Check out</Button>
                                    </div>

                                    
                                </ToastBody>
                            </Toast>
                        </div>

                    </table>

                </div>


            </div>
        );
    }
}

export default ShoppingCart;