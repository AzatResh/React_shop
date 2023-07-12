function BasketItem(props){
    const {
        mainId, 
        displayName,
        price, 
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype, 
        decQuantity = Function.prototype
    } = props

    return(
        <li className="list-group-item bg-light d-flex justify-content-between align-items-center"> {displayName} x {quantity} = {(price.regularPrice*quantity)}
        <i onClick={()=>{decQuantity(mainId)}} className="fa fa-minus mx-3 basket-btn"></i> <i onClick={()=>{incQuantity(mainId)}} className="fa fa-plus basket-btn"></i>
        <span onClick={()=>{removeFromBasket(mainId)}} className="btn btn-primary text-end ms-auto p-2"><i className="fa fa-times"></i></span> </li>
    );
}
export {BasketItem};