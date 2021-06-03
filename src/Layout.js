import React from 'react';
import Header from "./component/Header";
import Cart from "./Pages/Cart";

const Layout = props => (
    <div className={"main"}>
        <Header/>
        {props.children}
    </div>
);

export default Layout
