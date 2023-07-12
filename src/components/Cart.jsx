import React, {useState} from "react";

function Cart(props){

    const {quantity = 0, handleBasketShow = Function.prototype} = props;

    return(
        <div className="cart bg-primary text-white" onClick={handleBasketShow}>
            <i class="fa fa-cart-plus"></i>
            {quantity? <span className="cart__quantity"> {quantity} </span>: null}
        </div>
    )
}
export {Cart};