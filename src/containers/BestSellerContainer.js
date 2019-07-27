import React, { Component } from "react";
import {connect} from 'react-redux';
import BestSeller from '../components/ForHomePage/BestSeller';
import *as actions from '../actions/actions';


class BestSellerContainer extends Component {

    componentDidMount(){
        this.props.getDataBestSeller();
    }


    

    render() {
        let {bestSeller} = this.props;
        return (
           <BestSeller bestSeller={bestSeller} onClickToView={this.props.onClickToView}/>
        );
    }
}

let mapStatetoProps = state =>{
    return {
        bestSeller: state.bestSeller
    }
}

let mapDispatchtoProps = (dispatch, props) =>{
    return {
        getDataBestSeller: () =>{
            dispatch(actions.getBestSellerRequest())
        },
        onClickToView : (product) =>{
            dispatch(actions.setViewItem(product))
        }
    }
}


export default connect(mapStatetoProps, mapDispatchtoProps)(BestSellerContainer);