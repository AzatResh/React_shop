import { useContext } from 'react';
import {Product} from './Product';
import {ShopContext} from '../context';

function ProductsList(){
    const {products = []} = useContext(ShopContext);

    if(!products.length){
        return <h3>Nothing here...</h3>;
    }
    return(
        <div className='products py-3'>

            {products.map((product) => (
                <Product key = {product.id} {...product}/>
            ))}

        </div>
    );
}
export {ProductsList};