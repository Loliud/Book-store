import React, { Component } from 'react';
import './Item.css';
import { Button } from 'reactstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import *as actions from '../../actions/actions';

class Item extends Component {
  
    addToCart = (item) =>{
        this.props.onAddToCart(item);
    }

    render() {

        let {item} = this.props;
        return (
            <div className="item-page">
                <div className="header">
                    <img src="http://pngimg.com/uploads/book/book_PNG51019.png" alt="item"></img>
                    <h1>Today a <span>reader</span>, tomorrow a <span>leader</span></h1>
                </div>

                <div className="item-setting">
                    <div id="image">
                        <div className="item-product">
                            <img src={item.image} alt="item"></img>
                        </div>
                    </div>
                    <div className="item-content">
                        <h2>{item.name}</h2>

                        <div id="rating">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                        </div>
                        <h3>$ {item.price}</h3>
                        <p>Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear. Thick material blocks out the wind as ribbed cuffs and bottom band seal in body heat.
                                    Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear.</p>
                        <p>Ideal for cold-weather training or work outdoors, the Chaz Hoodie promises superior warmth with every wear.</p>
                        <p id="availability">Availability: <span>in Stock</span></p>
                        <Link to="/cart"> <Button color="primary" onClick={() => this.addToCart(item)}>Add to card</Button> </Link>
                        <p>Categories: Adventure, Kids' Music</p>
                        <div className="link-icon">
                            <h6>Share:</h6>
                            <div className="logo">
                                <a href="github.com"><i className="fab fa-github"></i></a>
                                <a href="facebook.com"><i className="fab fa-facebook-square"></i></a>
                                <a href="twitter.come"><i className="fab fa-twitter"></i></a>
                                <a href="linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                                <a href="google.com"><i className="fab fa-google"></i></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

let mapStateToProps = state =>{
    return{
        item: state.itemView
    }
}
let mapDispatchToProps = (dispatch, props) =>{
    return {
        onAddToCart : (item) =>{
            dispatch(actions.addToCart(item));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);