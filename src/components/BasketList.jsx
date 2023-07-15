import { useContext } from "react";
import { BasketItem } from "./BasketItem";
import {ShopContext} from '../context'

function BasketList(){
    const {order, handleBasketShow, removeFromBasket, incQuantity, decQuantity} = useContext(ShopContext);

    const totalPrice = order.reduce((sum, el)=>{
        return sum+el.price.regularPrice * el.quantity
    }, 0)
    return(
        <ul className="list-group basket-list">
            <i onClick={handleBasketShow} className="fa fa-times basket-close"></i>
            <li className="list-group-item disabled bg-success text-white">Корзина</li>

            {order.length? order.map((item)=>(
                <BasketItem key = {item.id} {...item} removeFromBasket = {removeFromBasket} incQuantity={incQuantity} decQuantity={decQuantity}/>
            )): <li className="list-group-item disabled bg-light">-Пусто-</li>}

            <li className="list-group-item disabled bg-success text-white">Общая стоимость: {totalPrice} руб.</li>
            <li className="list-group-item disabled bg-light text-white"><button className="btn btn-primary bg-success">Оформить</button></li>
        </ul>
    )
}
export {BasketList};