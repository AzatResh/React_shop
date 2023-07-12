function BasketItem(props){
    const {
        mainId, 
        displayName,
        price, 
        quantity,
        removeFromBasket = Function.prototype
    } = props

    return(
        <li className="list-group-item bg-light d-flex justify-content-between align-items-center"> {displayName} x {quantity} = {(price.regularPrice*quantity)}
        <span onClick={()=>{removeFromBasket(mainId)}} className="btn btn-primary text-end"><i className="fa fa-times"></i></span> </li>
    );
}
export {BasketItem};