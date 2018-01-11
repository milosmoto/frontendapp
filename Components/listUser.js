import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class ListUser extends React.Component {
    constructor(){
        super();
        this.state = {
            isLoading: true,
            users: {
                0:{
                    'id':1,
                    'name':'Deprecated'},
                1:{
                    'id':2,
                    'name':'Old one'},
            }
        };
    }
    componentDidMount() {
        $.get('http://backendapp.loc/api/users.json', function (response) {
            this.setState({users : response})
        }.bind(this));

        // fetch('http://backendapp.loc/api/users.json')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        //         this.setState({
        //             isLoading: false,
        //             users: ds.cloneWithRows(responseJson.movies),
        //         });
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }
    render () {
        return (
            <div>
                <Link to="/">Home</Link>
                <br/>
                <Link to="/user/add">Add user</Link>
                <br/>

                { Object.keys(this.state.users).map(function(key){
                        return(
                            <p key={key}>{this.state.users[key].name}</p>
                        );
                    }.bind(this))
                }

            </div>
        );
    }
}

export default ListUser;