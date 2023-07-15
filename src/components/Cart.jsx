import {useContext} from "react";
import {ShopContext} from '../context';

function Cart(props){

    const {quantity = 0} = props;

    const{handleBasketShow} = useContext(ShopContext);

    return(
        <div className="cart bg-primary text-white" onClick={handleBasketShow}>
            <i className="fa fa-cart-plus"></i>
            {quantity? <span className="cart__quantity"> {quantity} </span>: null}
        </div>
    )
}
export {Cart};