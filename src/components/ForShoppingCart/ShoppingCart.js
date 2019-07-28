import React, { Component } from 'react';
import './ShoppingCart.css';
import { Button, Toast, ToastBody, ToastHeader } from 'reactstrap';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 1
        }
    }

    onChange = (event) => {
        let value = event.target.value;
        let id = event.target.name;
        this.props.setQuantity(id, value);
    }

    showList = (listItems) => {
        let showList = null;
        if (listItems.length) {
            showList = listItems.map((item, index) => {
                return (
                    <tr key={index}>
                        <td className="slot-image"><img src={item.image} alt="item"></img></td>
                        <td>{item.name}</td>
                        <td>{item.price} $</td>
                        <td><input min={1} max={100} type="number" value={item.quantity} onChange={this.onChange} name={item.id}></input></td>
                        <td>{item.quantity * item.price} $</td>
                        <td><Button color="info">Remove</Button></td>
                    </tr>
                )
            });
        }
        return showList;
    }

    getSummary = (listItems) => {

        let subTotal = 0;
        listItems.forEach(item => {
            subTotal += item.price * item.quantity;
        });
        
        return (
            <ToastBody>
                <div className="title">
                    <h6>Subtotal</h6>
                    <h6>Shipping</h6>
                    <h5>Total</h5>
                </div>
                <div className="value">
                    <p>{subTotal} $</p>
                    <p>20 $</p>
                    <p>{subTotal + 20} $</p>
                    <Button className="submit" color="success">Check out</Button>
                </div>

            </ToastBody>

        );

    }

    render() {

        const {listItems} = this.props;
        return (
            <div className="shopping-cart">
                <div className="header">
                    <img src="http://pngimg.com/uploads/book/book_PNG51019.png" alt="item"></img>
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
                        {this.showList(listItems)}

                        <div className="p-3 bg-warning my-2 rounded sum">
                            <Toast>
                                <ToastHeader>
                                    Summary
                             </ToastHeader>
                                {this.getSummary(listItems)}
                            </Toast>
                        </div>

                    </table>

                </div>


            </div>
        );
    }
}

export default ShoppingCart;