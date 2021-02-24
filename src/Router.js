import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import App from './Pages/App';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path={"/"} exact component={App}/>
            <Route path={"/login"} component={Login}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default Router;