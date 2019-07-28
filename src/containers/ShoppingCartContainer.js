import React, { Component } from 'react';
import ShoppingCart from '../components/ForShoppingCart/ShoppingCart';
import *as actions from '../actions/actions';
import {connect} from 'react-redux';

class ShoppingCartContainer extends Component {
   

    render() {
        return (
          <ShoppingCart listItems={this.props.listItems} setQuantity={this.props.setQuantity}/>
        );
    }
}

let mapStateToProps = state =>{
    return {
        listItems: state.myCart
    }
}

let mapDisPatchToProps = (dispatch, props) =>{
    return {
        setQuantity: (id, quantity) =>{
            dispatch(actions.setQuantity(id, quantity))
        }
    }
}

export default  connect(mapStateToProps, mapDisPatchToProps)(ShoppingCartContainer);