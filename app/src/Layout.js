import React, { useMemo } from 'react';
import Header from "./component/Header";
import Cart from "./Pages/Cart";

const Layout = props => {
    const user = useMemo(() => {
        return global.auth.getUser()|| {};
    }, [])

    return (
        <div className="main">
            <Header user={user} />
            {props.children}
        </div>
    );
};

export default Layout
