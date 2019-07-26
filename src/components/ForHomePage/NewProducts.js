import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import './css/new-products.css';


class NewProducts extends Component {

    showProducts = (products) => {
        let showProducts = products.map((product, index) => {
            return (
                <Col key={index} sm={3} className="products-card">
                    <div className="card">
                        <div className="front">
                            <img src={product.image}  alt="item"/>
                        </div>
                        <div className="back">
                            <div className="name">
                                <p>Lorem There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
                            </div>
                            <button className="add-to-card">Add to card</button>
                        </div>
                        <div className  ="card-content">
                            <h6>{product.name}</h6>
                            <p>$ 48.50 <span> $100.80</span></p>
                        </div>

                    </div>

                </Col>
            );
        });
        return showProducts;
    }
    render() {
        let {newProducts} = this.props;
        return (
            <div className="new-products">
                <div className="products-description">
                    <h1>NEW <span>PRODUCTS</span></h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
                </div>
                <Row>
                    {this.showProducts(newProducts)}
                </Row>
            </div>
        )
    }
}

export default NewProducts;
