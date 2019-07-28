import React, {Component} from 'react';
import ShoppingCartContainer from '../../containers/ShoppingCartContainer';


class ShoppingCartPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
       let {history} = this.props;
        return (
            <ShoppingCartContainer history={history}/>
        );
    }
}




export default ShoppingCartPage;