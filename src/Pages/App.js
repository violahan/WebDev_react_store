import React from 'react'
import Header from "../component/Header";
import Products from "../component/Products";


class App extends React.Component {

    render() {
        return (
            <div className={"main"}>
                <Header nickname={"Admin"}/>
                <Products/>
            </div>
        )
    }
}

export default App;
