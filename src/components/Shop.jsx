import React, {useEffect, useContext} from "react";
import {API_KEY, API_URL} from '../config';

import {Preloader} from './Preloader';
import {ProductsList} from './ProductsList';
import {Cart} from './Cart';
import {BasketList} from './BasketList'
import {Alert} from './alert'
import {ShopContext} from "../context";

function Shop(){

    const{loading, order, isBasketShow, alertName, setProducts} = useContext(ShopContext);

    // get Products from api
    useEffect(()=>{
        fetch(API_URL, {
            headers:{ 
                Authorization: API_KEY,
            },
        })
        .then(resp => resp.json())
        .then((data) => {
            setProducts(data.shop);
        })
        // eslint-disable-next-line
    }, [])

    return(
        <main className="container content">

            <Cart quantity = {order.length}/> 
            {isBasketShow && <BasketList/>}
            {
                alertName && <Alert/>
            }
            {loading? <Preloader/>: <ProductsList/>} 
            
        </main>
    )
}

export {Shop};