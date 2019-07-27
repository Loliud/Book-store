import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/BestSeller.css';
import './css/new-products.css';
import { Link } from 'react-router-dom';

class BestSeller extends Component {


    showProducts = (products) => {
        let showProducts = products.map((product, index) => {
            return (
                <Link to={`/product/${product.id}`}  key={index} onClick={() => this.props.onClickToView(product)}>
                    <div  className="card" style={{color: 'black'}}>
                        <div className="front">
                            <img src={product.image} alt="item" />
                        </div>
                        <div className="back">
                            <div className="name">
                                <p>Lorem There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
                            </div>
                        </div>
                    </div>
                </Link>


            );
        });
        return showProducts;
    }

   

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };

        let { bestSeller } = this.props;

        return (
            <div className="best-seller">
                <div className="description">
                    <h1> BEST <span>SELLER</span> </h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
                </div>
                <Slider {...settings}>
                    {this.showProducts(bestSeller)}
                </Slider>
            </div>
        );
    }
}

export default BestSeller;