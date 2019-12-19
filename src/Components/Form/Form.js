import React, {Component} from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            img: '',
            content: ''
        }
    }

    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render(){
        return(
            <div>
                <input placeholder='title' name='title' type="text"/>
                <input placeholder='img url' name='img' type="text"/>
                <input placeholder='content' name='content' type="text"/>
                <button>Post</button>
            </div>
        )
    }
}

export default Form;