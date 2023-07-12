import React, {useState, useEffect} from "react";
import {API_KEY, API_URL} from '../config';

import {Preloader} from './Preloader';
import {ProductsList} from './ProductsList';
import {Cart} from './Cart';
import {BasketList} from './BasketList'

function Shop(){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);

    const handleBasketShow = () =>{
        setBasketShow(!isBasketShow);
    }

    const addToBasker = (item) =>{
        const itemIndex = order.findIndex(orderItem => orderItem.mainId === item.mainId);

        if(itemIndex<0){
            const newItem ={
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem]);
        } else{
            const newOrder = order.map((orderItem, index) => {
                if(index === itemIndex){
                    return{
                        ...orderItem,
                        quantity: orderItem.quantity+1
                    }
                } else{
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }   
    }
    
    const removeFromBasket = (id) =>{
        const newOrder = order.filter((product)=>product.mainId !== id);

        setOrder(newOrder);
    }

    // get Products from api
    useEffect(()=>{
        fetch(API_URL, {
            headers:{ 
                Authorization: API_KEY,
            },
        })
        .then(resp => resp.json())
        .then((data) => {
            data.shop && setProducts(data.shop);
            setLoading(false);
        })
    }, [])

    return(
        <main className="container content">

            <Cart quantity = {order.length} handleBasketShow={handleBasketShow}/> 
            {isBasketShow && <BasketList order = {order} handleBasketShow ={handleBasketShow} removeFromBasket={removeFromBasket}/>}
            {loading? <Preloader/>: <ProductsList products = {products} addToBasker ={addToBasker}/>} 
            
        </main>
    )
}

export {Shop};