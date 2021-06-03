import React from 'react'
import Header from "../component/Header";
import Products from "../component/Products";
import Layout from "../Layout";


class App extends React.Component {

    render() {
        return (
            <Layout>
                <Products/>
            </Layout>
        );
    }
}

export default App;
