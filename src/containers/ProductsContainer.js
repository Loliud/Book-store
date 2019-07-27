import React, { Component } from 'react';
import Products from '../components/ForProductsPage/Products';
import {connect} from 'react-redux';
import *as actions from '../actions/actions';
class ProductsContainer extends Component {

    constructor(props){
        super(props);
        this.state ={
            products: []
        }
    }

    componentDidMount(){
       this.props.getDataFromApi();
    }
    
    render() {
       
       
        return (
           <Products>
               {   // chuyen cho children la 1 object
                   {
                       products: this.props.products
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

let mapDispatchToProps = (dispatch, props) =>{
    return {
        getDataFromApi: () =>{
            dispatch(actions.getDataFromApiRequest());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);