import {useEffect, useContext} from "react";
import {ShopContext} from "../context";

function Alert(){
    const {closeAlert, alertName} = useContext(ShopContext);

    useEffect(()=>{
        const timerId = setTimeout(closeAlert, 3000);

        return(()=>{
            clearTimeout(timerId);
        })
        // eslint-disable-next-line
    }, [alertName]);

    return(
        <div className="alert alert-dark" role="alert">
            {alertName} добавлен в корзину.
        </div>
    )
}
export {Alert}