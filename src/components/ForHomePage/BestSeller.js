import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/BestSeller.css';
import './css/new-products.css';

 class BestSeller extends Component {


    showProducts = (products) => {
        let showProducts = products.map((product, index) => {
            return (

                <div key={index} className="card">
                    <div className="front">
                        <img src={product.image}  alt="item"/>
                    </div>
                    <div className="back">
                        <div className="name">
                            <p>Lorem There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
                        </div>
                        <button className="add-to-card">Add to card</button>
                    </div>
                    <div className="card-content">
                        <h6>{product.name}</h6>
                        <p>$ 48.50 <span> $100.80</span></p>
                    </div>

                </div>


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

        let {bestSeller} = this.props;
        
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