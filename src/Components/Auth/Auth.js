import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../redux/reducer';

class Auth extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    handleInput = event => {
        // console.log(event.target.name);
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleRegister = () => {
        const {username, password} = this.state;
        axios
            .post('/api/auth/register', {username, password})
            .then(res => {
                // console.log(res.data);
                this.props.getUser(res.data);
                this.props.history.push('/dashboard');
            })
            .catch(err => console.log(err));
    }

    handleLogin = () => {
        const {username, password} = this.state;
        axios
            .post('/api/auth/login', {
                username, 
                password
            })
            .then(res => {
                this.props.getUser(res.data);
                this.props.history.push('/dashboard');
            })
            .catch(err => console.log(err));
    };

    render(){
        return(
            <div>
                <div className='login-box'>
                <div>
                <input placeholder='username' name='username'/>
                <input placeholder='password' name='password' type='password'/>
                </div>
                <div>
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleRegister}>Register</button>
                </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {getUser})(Auth);