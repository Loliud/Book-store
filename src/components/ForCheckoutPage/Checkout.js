import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container, Toast, ToastHeader, ToastBody } from 'reactstrap';
import './Checkout.css';
import { connect } from 'react-redux';
import *as actions from '../../actions/actions';
class Checkout extends React.Component {


    getSummary = (listItems) => {

        let subTotal = 0;
        listItems.forEach(item => {
            subTotal += item.price * item.quantity;
        });

        return (
            <ToastBody id="cart-checkout">
                <div className="title">
                    <h6>Subtotal</h6>
                    <h6>Shipping</h6>
                    <h5>Total</h5>
                </div>
                <div className="value">
                    <p>{subTotal} $</p>
                    <p>20 $</p>
                    <p id="cart-sum">{subTotal + 20} $</p>
                </div>
            </ToastBody>

        );

    }


    onSubmit = (event) =>{
        event.preventDefault();
        if(!this.props.myCart.length){
            alert('Khong co san pham trong gio hang');
            return;
            
        }
        this.props.onPurchase();
    }

   


    render() {

        let { myCart } = this.props;
        return (
            <div id="checkout-page">
                <div className="header">
                    <img src="http://pngimg.com/uploads/book/book_PNG51019.png" alt="item"></img>
                    <h1>I read <span>a book</span> one day and my whole life was <span>changed !</span></h1>
                </div>

                <Container style={{ marginTop: "5rem", textAlign: 'left' }} >
                    <h1 style={{ marginBottom: "7rem", fontSize: '4rem', textShadow: '0px 0px 4px rgba(0,0,0,0.3)' }}>CHECKOUT FORM</h1>
                    <Row>
                        <Col sm={8}>
                            <h1 style={{ textAlign: 'left', marginBottom: '2rem', fontWeight: 'bold', fontSize: '2rem', textShadow: '0px 0px 4px rgba(0,0,0,0.3)' }}>BILLING DETAILS</h1>
                            <Form onSubmit={this.onSubmit}>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleEmail">First name</Label>
                                            <Input type="text" name="Firstname" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="examplePassword">Last name</Label>
                                            <Input type="text" name="Lastname" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Label for="exampleAddress">Email</Label>
                                    <Input type="text" name="email" placeholder="you@example.com" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAddress">Phone</Label>
                                    <Input type="text" name="phone" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAddress2">Address</Label>
                                    <Input type="text" name="address" id="exampleAddress2" placeholder="1234 Main St" />
                                </FormGroup>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleCity">City</Label>
                                            <Input type="text" name="city" id="exampleCity" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label for="exampleState">State</Label>
                                            <Input type="text" name="state" id="exampleState" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                        <FormGroup>
                                            <Label for="exampleZip">Zip</Label>
                                            <Input type="text" name="zip" id="exampleZip" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <h3 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>PAYMENT</h3>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="method" />{' '}
                                        Credit card
                                     </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="method" />{' '}
                                        Debit card
                                     </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="method" />{' '}
                                        PayPal
                                     </Label>
                                </FormGroup>
                                <Row form style={{marginTop: '1rem'}}>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleEmail">Name on card</Label>
                                            <Input type="text" name="nameCard" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="examplePassword">Credit card number</Label>
                                            <Input type="text" name="cardNumber" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Button color="info" style={{padding: '1rem 5rem', color: 'white', fontWeight: 'bold'}}>Continue to checkout</Button>
                            </Form>
                        </Col>
                        <Col sm={4}>
                            <div className="p-3 bg-secondary my-2 rounded">
                                <Toast>
                                    <ToastHeader>
                                        <h4 style={{ fontWeight: "bold", color: "#4a4242" }}>YOUR CART</h4>
                                    </ToastHeader>
                                    {this.getSummary(myCart)}
                                </Toast>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}


let mapStateToProps = state => {
    return {
        myCart: state.myCart
    }
}

let mapDispatchToProps = (dispatch, props) =>{
    return {
        onPurchase: () =>{
            dispatch(actions.onPurchase())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);