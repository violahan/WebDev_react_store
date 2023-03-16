import React from 'react';
import {withRouter} from "react-router-dom";
import {toast} from "react-toastify";

class ToolBox extends React.Component {

    state = {
        searchText: '',
    };

    handleChange = e => {
        const value= e.target.value;
        this.setState({
            searchText: value
        });
        this.props.search(value)
    };

    clearSearchText = () => {
        this.setState({
            searchText:''
        });
        this.props.search('');
    };

    goCart= () => {
        if (!global.auth.isLogin()) {
            this.props.history.push('/login');
            toast.info('Please Login First 😣');
            return;
        }
        this.props.history.push('/cart');
    };


    render() {
        return (
            <div className={"tool-box"}>
                <div className={"logo-text"}>Store</div>
                <div className={"search-box"}>
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input search-input"
                                   type="text"
                                   placeholder="Search Product"
                                   value={this.state.searchText}
                                   onChange={this.handleChange}
                            />
                        </div>
                        <div className="control">
                            <a className="button" onClick={this.clearSearchText}>
                                X
                            </a>
                        </div>
                    </div>
                </div>


                <div to="/cart" className={"cart-box"} onClick={this.goCart}>
                    <i className={"fas fa-shopping-cart"}/>
                    <span className={"cart-num"}>({this.props.cartNum})</span>

                </div>
            </div>
        );
    }
}

export default withRouter(ToolBox)