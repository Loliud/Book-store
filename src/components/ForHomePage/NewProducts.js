import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import './css/new-products.css';
import {Link} from 'react-router-dom';


class NewProducts extends Component {

    showProducts = (products) => {
        let showProducts = products.map((product, index) => {
            return (
                <Col key={index} sm={3} className="products-card">
                    <Link to={`product/${product.id}`} onClick={() => this.props.onClickToView(product)}>
                    <div className="card">
                        <div className="front">
                            <img src={product.image}  alt="item"/>
                        </div>
                        <div className="back">
                            <div className="name">
                                <p>Lorem There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
                            </div>
                        </div>
                        <div className  ="card-content">
                            <h6>{product.name}</h6>
                            <p>{`$ ${Math.floor(product.price * 0.6)}`}<span>{`$ ${product.price}`}</span></p>
                        </div>
                    </div>
                    </Link>
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
