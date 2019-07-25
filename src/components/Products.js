import React, { Component } from 'react';
import './Products.css'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


class Products extends Component {
    constructor(props){
        super(props);
        this.state={
            page: 1
        }
    }

    showProducts = (products, pageNumber) => {
        let begin = (pageNumber - 1) * 8;
        let end = pageNumber * 8;
        let showProducts = products.slice(begin, end);

        showProducts = showProducts.map((product, index) => {
            return (
                <a key={index} href="#">
                    <div className="item-product">
                        <div className="overlay">
                            <img src={product.image}></img>
                            <div className="content">
                                <h6>{product.name}</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </a>
            );
        });

        return showProducts;
    }

    changePage = (newPage) =>{
        console.log(newPage);
        this.setState({
            page: newPage
        });
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

        let {page} = this.state;
        let lastPage = page  - 1;
        let nextPage = page + 1;
        
        return (
            <div className="Products" id="Products">

                <div className="header">
                    <img src="http://pngimg.com/uploads/book/book_PNG51019.png"></img>
                    <h1>Today a <span>reader</span>, tomorrow a <span>leader</span></h1>
                </div>
                <div className="list-products">

                    <h1>Products</h1>
                    <div className="input">
                        <input type="text" name="search" />
                        <button>Search</button>
                    </div>

                    {this.showProducts(products, page)}
                    <Pagination className="pagination-custom">
                        <PaginationItem>
                            <PaginationLink previous onClick={() =>  this.changePage(page === 1 ? 1 : page - 1)} />
                        </PaginationItem>
                        <PaginationItem active>
                            <PaginationLink  >
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                        <PaginationLink next onClick={() => this.changePage(page + 1)}/>
                        </PaginationItem>
                    </Pagination>

                </div>

            </div>


        );
    }

};

export default Products;