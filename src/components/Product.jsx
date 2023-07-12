function Product(props){
    const {mainId, displayName, displayDescription, price, displayAssets, addToBasker = Function.prototype} = props;
    return(
        <div className="card">
            <img src={displayAssets[0].full_background} className="card-img-top" alt="images"/>
            <div className="card-body">
                <div className="card-container h-50">
                <h5 className="card-title">{displayName}</h5>
                <p className="card-text">{displayDescription}</p>
                </div>
                <hr />
                <div className="d-flex flex-row align-self-center justify-content-between">
                    <a href="#" className="btn btn-primary" onClick={()=>{addToBasker({ mainId, displayName, price })}}>Купить</a>
                    <div className="align-self-center">
                        <p className="m-0 me-1 fs-4">{price.regularPrice} руб.</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export {Product};
