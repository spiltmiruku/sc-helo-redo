import React, {Component} from 'react';
import axios from 'axios';


class Auth extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    handleInput = event => {
        console.log(event.target.name);
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleRegister = () => {
        const {username, password} = this.state;
        axios
            .post('/api/auth/register', {username, password})
            .then(res => {
                this.props.getUser(res.data);
                this.props.history.push('/dashboard');
            })
            .catch(err => console.log(err));
    }

    handleLogin = () => {
        const {username, password} = this.state;
        axios
            .post('/api/auth/login', {
                username: this.state.username, 
                password: this.state.password
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
                <input name='username'/>
                <input name='password' type='password'/>
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleRegister}>Register</button>
            </div>
        )
    }
}

export default Auth;