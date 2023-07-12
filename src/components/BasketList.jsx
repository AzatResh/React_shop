import { BasketItem } from "./BasketItem";

function BasketList(props){
    const {order, handleBasketShow = Function.prototype, removeFromBasket = Function.prototype} = props;

    const totalPrice = order.reduce((sum, el)=>{
        return sum+el.price.regularPrice * el.quantity
    }, 0)
    return(
        <ul className="list-group basket-list">
            <i onClick={handleBasketShow} className="fa fa-times basket-close"></i>
            <li className="list-group-item disabled bg-primary text-white">Корзина</li>

            {order.length? order.map((item)=>(
                <BasketItem key = {item.id} {...item} removeFromBasket = {removeFromBasket}/>
            )): <li className="list-group-item disabled bg-light">-Пусто-</li>}
            
            <li className="list-group-item disabled bg-primary text-white">Общая стоимость: {totalPrice} руб.</li>
        </ul>
    )
}
export {BasketList};