import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    render () {
        return (
            <div>
                <Link to="/user/list">List users</Link>
                <br/>
                <Link to="/user/add">Add user</Link>
            </div>
        );
    }
}

export default Home;