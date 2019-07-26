import React, { Component } from 'react';
import './Products.css'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
    }

    showProducts = (products, pageNumber) => {
        let begin = (pageNumber - 1) * 12;
        let end = pageNumber * 12;
        let showProducts = products.slice(begin, end);
        showProducts = showProducts.map((product, index) => {
            return (
                <Link to={`/product/${product.id}`} key={index} href="#">
                    <div className="item-product">
                        <img src={product.image} alt="item"></img>
                        <div className="content">
                            <h6>{product.name}</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </Link >
            );
        });
        return showProducts;
    }

    changePage = (newPage) => {
        console.log(newPage);
        this.setState({
            page: newPage
        });
    }

    render() {
        let { products } = this.props.children;
        let { page } = this.state;
        return (
            <div className="Products" id="Products">
                <div className="header">
                    <img src="http://pngimg.com/uploads/book/book_PNG51019.png" alt="item"></img>
                    <h1>Today a <span>reader</span>, tomorrow a <span>leader</span></h1>
                </div>
                <div className="list-products" id="list-products">
                    <h1>Products</h1>
                    <div className="input">
                        <input type="text" name="search" />
                        <button>Search</button>
                    </div>
                    {this.showProducts(products, page)}
                    <Pagination className="pagination-custom">
                        <PaginationItem>
                            <PaginationLink href="#list-products" previous onClick={() => this.changePage(page === 1 ? 1 : page - 1)} />
                        </PaginationItem>
                        <PaginationItem active>
                            <PaginationLink href="#list-products" >
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#list-products" next onClick={() => this.changePage(page + 1)} />
                        </PaginationItem>
                    </Pagination>
                </div>
            </div>
        );
    }
};

export default Products;