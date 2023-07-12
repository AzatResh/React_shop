import {Product} from './Product';

function ProductsList(props){
    const {products = [], addToBasker = Function.prototype} = props;

    if(!products.length){
        return;
    }
    return(
        <div className='products py-3'>

            {products.map((product) => (
                <Product key = {product.id} {...product} addToBasker={addToBasker}/>
            ))}

        </div>
    );
}
export {ProductsList};