import React from 'react'
import ToolBox from "./ToolBox";
import Product from "./Product";
import axios from "../commons/axios";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Panel from "./Panel";
import AddInventory from "./AddInventory";


class Products extends React.Component {

    state = {
        products: [],
        sourceProducts: []
    };

    componentDidMount() {
        axios.get('/products').then(response => {
            console.log(response.data);
            this.setState({
                products: response.data,
                sourceProducts: response.data
            });
        });

    }

    search = text => {
        console.log(text);
        let _products = [...this.state.sourceProducts];

        _products = _products.filter(p => {
            const matchArray = p.name.match(new RegExp(text, 'gi'));
            return !!matchArray;
        });

        this.setState({
            products: _products
        });
    };

    toAdd = () => {
        Panel.open({
            component: AddInventory,
            callback: data =>{
                if (data){
                    this.add(data);
                }
            }
        });
    };

    add = product =>{
        const _products = [...this.state.products];
        _products.push(product);
        const _sProducts = [...this.state.sourceProducts];
        _sProducts.push(product);

        this.setState({
            products:_products,
            sourceProducts: _sProducts
        });
    };

    update = product =>{
        const _products = [...this.state.products];
        const _index = _products.findIndex(p => p.id === product.id)
        _products.splice(_index,1,product)
        const _sProducts = [...this.state.sourceProducts];
        const _sIndex = _products.findIndex(p => p.id === product.id)
        _sProducts.splice(_sIndex,1,product)

        this.setState({
            products:_products,
            sourceProducts: _sProducts
        });
    };


    render() {
        return (
            <div>
                <ToolBox search={this.search}/>
                <div className="products">
                    <div className="columns is-multiline is-desktop">
                        <TransitionGroup component={null}>
                            {
                                this.state.products.map(p => {
                                    return (
                                        <CSSTransition classNames="product-fade"
                                                       timeout={300}
                                                       key={p.id}
                                        >
                                            <div className="column is-3" key={p.id}>
                                                <Product product={p} update={this.update}/>
                                            </div>
                                        </CSSTransition>
                                    );
                                })}
                        </TransitionGroup>
                    </div>
                    <button className={"button is-primary add-btn"} onClick={this.toAdd}>Add Product</button>
                </div>
            </div>

        )

    }

}

export default Products;
