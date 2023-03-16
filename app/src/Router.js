import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import App from './Pages/App';
import Login from './Pages/Login';
import Register from './Pages/Register';
import NotFound from './Pages/NotFound';
import Cart from './Pages/Cart';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path={"/"} exact component={App}/>
            <Route path={"/login"} component={Login}/>
            <Route path={"/register"} component={Register}/>
            <Route path={"/cart"} component={Cart}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default Router;