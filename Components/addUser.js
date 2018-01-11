import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class AddUser extends React.Component {
    saveUser () {
        $.ajax({
            crossDomain: true,
            type:"POST",
            contentType: "application/json; charset=utf-8",
            async:false,
            url: 'http://backendapp.loc/api/users',
            data: {'name':this.nameInput.value},
            dataType: "jsonp",
            jsonpCallback: 'functionAll',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(e) {
                console.log('error', e);
            }
        });

        // $.post('http://backendapp.loc/api/users',
        //     {
        //         'headers':{ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        //         'data':{'name':this.nameInput.value},
        //         'dataType' : 'json',
        //         crossdomain:true
        //     }, function(response){
        //     console.log(response);
        // }.bind(this));
    };

    render () {
        return (
            <div>
                <Link to="/">Home</Link>
                    <br/>
                <Link to="/user/list">List users</Link>
                    <br/>

                <input type="text" ref={el => this.nameInput = el} name="name"/>
                <button onClick={() => this.saveUser()}>Add</button>
            </div>
        );
    }
}

export default AddUser;