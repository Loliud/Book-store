import React, { Component } from 'react';
import {connect} from 'react-redux';
import NewProducts from '../components/ForHomePage/NewProducts';


class NewProductsContainer extends Component {

    render() {
        let {newProducts} = this.props;
        return (
            <NewProducts newProducts={newProducts}/>
        )
    }
}

let mapStateToProps = state =>{
    return {
        newProducts: state.newProducts
    }
}

export default  connect(mapStateToProps, null)(NewProductsContainer);
