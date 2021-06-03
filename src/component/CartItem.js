import React from 'react';
import Cart from "../Pages/Cart";
import {formatPrice} from "../commons/helper";


const CartItem = props => {
    const {name, image, price, mount }= props.cart || {}
    const sumPrice = formatPrice(mount* parseInt(price));
    return(
        <div className={"columns is-vcentered"}>
            <div className={"column is-narrow"}>
                <img src={image} alt={name} width={"100"}/>
            </div>

            <div className={"column cart-name"}>
                {name}
            </div>

            <div className={"column"}>
                <span className={"price"}>{formatPrice(price)}</span>
            </div>

            <div className={"column"}>
                <input type={"number"} className={"input num-input"} defaultValue={mount}></input>
            </div>

            <div className={"column"}>
                <span className={"sum-price"}>{sumPrice}</span>
            </div>

            <div className={"column is-narrow"}>
                <span className={"close"}>❌</span>
            </div>
        </div>
    );
};

export default CartItem;