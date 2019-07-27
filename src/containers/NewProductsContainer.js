import React, { Component } from 'react';
import {connect} from 'react-redux';
import NewProducts from '../components/ForHomePage/NewProducts';
import *as actions from '../actions/actions';


class NewProductsContainer extends Component {


    componentDidMount(){
        this.props.getNewProducts();
        
    }

    render() {
        let {newProducts} = this.props;
        return (
            <NewProducts newProducts={newProducts} onClickToView={this.props.onClickToView}/>
        )
    }
}

let mapStateToProps = state =>{
    return {
        newProducts: state.newProducts
    }
}

let mapDispatchToProps = (dispatch, props) =>{
    return {
        getNewProducts: () =>{
            dispatch(actions.getNewProductsRequest())
        },
        onClickToView: (product) =>{
            dispatch(actions.setViewItem(product))
        }
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(NewProductsContainer);
