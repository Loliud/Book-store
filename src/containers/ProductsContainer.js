import React, { Component } from 'react';
import Products from '../components/ForProductsPage/Products';
import {connect} from 'react-redux';
import axios from 'axios';
class ProductsContainer extends Component {

    constructor(props){
        super(props);
        this.state ={
            products: []
        }
    }

    componentDidMount(){
        axios.get('https://5d3029eb28465b00146aaca5.mockapi.io/api/products')
        .then((res) =>{
            console.log(res.data);
            this.setState({
                products: res.data
            });
        });
    }
    
    render() {
       
       
        return (
           <Products>
               {   // chuyen cho children la 1 object
                   {
                       products: this.state.products
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