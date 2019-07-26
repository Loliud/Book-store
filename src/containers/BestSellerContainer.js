import React, { Component } from "react";
import {connect} from 'react-redux';
import BestSeller from '../components/ForHomePage/BestSeller';


class BestSellerContainer extends Component {

    render() {
        let {bestSeller} = this.props;
        return (
           <BestSeller bestSeller={bestSeller} />
        );
    }
}

let mapStatetoProps = state =>{
    return {
        bestSeller: state.bestSeller
    }
}

export default connect(mapStatetoProps, null)(BestSellerContainer);