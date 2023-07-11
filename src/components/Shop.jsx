import React, {useState, useEffect} from "react";
import {API_KEY, API_URL} from '../config';

import {Preloader} from './Preloader';
import {ProductsList} from './ProductsList';

function Shop(){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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

            {loading? <Preloader/>: <ProductsList products = {products}/>} 

        </main>
    )
}

export {Shop};