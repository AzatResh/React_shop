import React, {useState, useEffect} from "react";
import {API_KEY, API_URL} from '../config';

import {Preloader} from './Preloader';
import {ProductsList} from './ProductsList';
import {Cart} from './Cart';

function Shop(){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);

    // get Products from api
    useEffect(()=>{
        fetch(API_URL, {
            headers:{ 
                Authorization: API_KEY,
            },
        })
        .then(resp => resp.json())
        .then((data) => {
            console.log(data.shop);
            data.shop && setProducts(data.shop);
            setLoading(false);
        })
    }, [])

    return(
        <main className="container content">

            <Cart quantity = {products.length}/> 
            {loading? <Preloader/>: <ProductsList products = {products}/>} 

        </main>
    )
}

export {Shop};