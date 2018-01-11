import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "./home"
import ListUser from "./listUser"
import AddUser from "./addUser"

//TODO Import some css

export const Root = () => {
    return (
        <BrowserRouter id="react-id">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/user/list" component={ListUser}/>
                <Route path="/user/add" component={AddUser} />
            </Switch>
        </BrowserRouter>
    );
};
render(<Root />, document.getElementById('main'));