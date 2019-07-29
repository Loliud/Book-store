import React, { Component } from 'react';
import './style.css';
import {connect} from 'react-redux';
import  *as actions from '../../actions/actions';
class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }


    onSubmit = (event) =>{
        event.preventDefault();
        console.log('hello');
        if(this.state.username === 'ken@gmail.com' && this.state.password === 'kennguyen'){
            const {history} = this.props;
            this.props.onSetUserLogin(this.state);
            history.push('/checkout');
        }
        
    }

    onChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name] : value
        })
        
    }

    render() {
        let {username, password} = this.state;
        return (
            <form id="login-page" onSubmit={this.onSubmit}>
                <h1>Welcome</h1>
                <div class="group-button">
                    <input type="text" id="username" name="username" value={username} onChange={this.onChange} required />
                    <label for="username">Username</label>
                </div>
                <div class="group-button">
                    <input type="password" id="password" name="password" value={password} onChange={this.onChange} required />
                    <label for="password">Password</label>
                </div>
                <button type="submit" >Login</button>
                <p>Don't have an account? <a href="#">Sign Up</a></p>
            </form>
        );
    }

}

let mapDispatchToProps = (dispatch, props) =>{
    return {
        onSetUserLogin: (user) =>{
            dispatch(actions.setUserLogin(user));
        } 
    }
}


export default connect(null, mapDispatchToProps)(LoginPage);