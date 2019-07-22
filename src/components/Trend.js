import React, { Component } from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle,  Button, Col, Row
} from 'reactstrap';
import './css/new-products.css';

const products = [
    {
        name: 'Blue in the watter',
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/2.jpg'
    },
    {
        name: 'Moon light sadow',
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/6.jpg'
    },
    {
        name: 'Memorise',
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/4.jpg'
    },
    {
        name: 'Art of illustrator',
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/8.jpg'
    },
    {
        name: 'Blue in the watter',
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/2.jpg'
    },
    {
        name: 'Moon light sadow',
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/6.jpg'
    },
    {
        name: 'Memorise',
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/4.jpg'
    },
    {
        name: 'Art of illustrator',
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/8.jpg'
    },
    {
        name: 'Blue in the watter',
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/2.jpg'
    },
    {
        name: 'Moon light sadow',
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/6.jpg'
    },
    {
        name: 'Memorise',
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/4.jpg'
    },
    {
        name: 'Art of illustrator',
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/8.jpg'
    },
    {
        name: 'Moon light sadow',
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/6.jpg'
    },
    {
        name: 'Memorise',
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/4.jpg'
    },
    {
        name: 'Art of illustrator',
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/8.jpg'
    },
    {
        name: 'Blue in the watter',
        image: 'https://demo.hasthemes.com/boighor-preview/boighor-v3/images/books/2.jpg'
    }
    
];

class Trend extends Component {

    showProducts = (products) => {
        let showProducts = products.map((product, index) => {
            return (
                <Col ke={index} sm={3} className="products-card">
                    <Card>
                        <CardImg top width="100%" src={product.image} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{product.name}</CardTitle>
                            <p>$ 40.78 <span> $ 100.50</span> </p>
                            <Button color="primary">Add to card</Button>
                        </CardBody>
                    </Card>
                </Col>
            );
        });
        return showProducts;
    }
    render() {
        return (
            <div className="new-products">
                <div className="products-description">
                    <h1>NEW <span>PRODUCTS</span></h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
                </div>
                <Row>
                    {this.showProducts(products)}
                </Row>
            </div>
        )
    }
}

export default Trend;
