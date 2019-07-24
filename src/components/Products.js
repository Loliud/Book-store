import React, { Component } from 'react';
import {
    Row, Col
} from 'reactstrap';
import './Products.css'

class Products extends Component {

    showProducts = (products, pageNumber) => {
        let begin = (pageNumber - 1) * 6;
        let end = pageNumber * 6;
        let showProducts = products.slice(begin, end);

        showProducts = showProducts.map((product) => {
            return (
                
                <Col sm="3" className="item-product">
                    <img src={product.image}></img>
                    <div className="content">
                        <h6>{product.name}</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </Col>
            );
        });

        return showProducts;
    }

    render() {

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
        return (
          <div className="list-products">
            <Row width="100%">
                {this.showProducts(products, 1)}
            </Row>
        </div>
        

        );
    }   

};

export default Products;