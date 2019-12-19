import React, {Component} from 'react';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            search: '',
            checkbox: false
        }
    }
    render(){
        return(
            <div>
                <input name='search' />
                <button>Search</button>
                <button>Reset</button>
                <input type="checkbox" />
            </div>
        )
    }
}

export default Dashboard;