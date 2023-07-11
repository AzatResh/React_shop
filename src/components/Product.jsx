function Product(props){
    const {id, displayName, displayDescription, price, displayAssets} = props;
    return(
        <div className="card">
            <img src={displayAssets[0].full_background} className="card-img-top" alt="images"/>
            <div className="card-body">
                <h5 className="card-title">{displayName}</h5>
                <p className="card-text">{displayDescription}</p>
                <p className="card-text">{price.regularPrice}</p>
                <hr />
                <a href="#" className="btn btn-primary">Купить</a>
            </div>
        </div>
    );
}
export {Product};
