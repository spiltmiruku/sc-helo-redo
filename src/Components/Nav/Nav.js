import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Nav extends Component {
   
    render(){
        return(
            <div className='nav-links'>
            <Link to='/dashboard'>Home</Link>
            <br/>
            <Link to='/new'>New Post</Link>
            <br/>
            <Link to='/'>Logout</Link>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return ({username: reduxState.username, profile_pic: reduxState.profile_pic});
}

export default connect(mapStateToProps) (Nav);