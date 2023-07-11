import React, {useState, useEffect} from "react";
import {API_KEY, API_URL} from '../config';

function Shop(){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // get Products from api
    useEffect(()=>{
        fetch(API_URL, {
            headers:{ 
                'Authorization': API_KEY,
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

            Shop

        </main>
    )
}

export {Shop};