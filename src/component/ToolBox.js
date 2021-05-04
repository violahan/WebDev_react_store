import React from 'react';

class ToolBox extends React.Component {
    render() {
        return (
            <div className={"tool-box"}>
                <div className={"logo-text"}>Store</div>
                <div className={"search-box"}>
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input search-input" type="text" placeholder="Search Product"/>
                        </div>
                        <div className="control">
                            <a className="button is-info is-light">
                                Search
                            </a>
                        </div>
                    </div>
                </div>


                <div className={"cart-box"}>
                    <i className={"fas fa-shopping-cart"}/>
                    <span className={"cart-num"}>(0)</span>

                </div>
            </div>
        );
    }
}

export default ToolBox