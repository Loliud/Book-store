import React, { Component } from 'react';
import Products from '../components/ForProductsPage/Products';
import {connect} from 'react-redux';
class ProductsContainer extends Component {
    
    render() {

        let {products} = this.props;
        return (
           <Products>
               {   // chuyen cho children la 1 object
                   {
                       products: products
                   }
               }
           </Products>
        );
    }
};

let mapStateToProps = state =>{
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductsContainer);