import {createContext, useContext, useReducer} from "react";
import {reducer} from './reducer'

export const ShopContext = createContext();

const initialState ={
    products: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: ''
}

export const ContextProvider = ({children}) => {

    const [value, dispatch] = useReducer(reducer, initialState);

    value.handleBasketShow = () =>{
        dispatch({type: 'HANDLE_BASKET_SHOW'});
    }
    value.closeAlert = () =>{
        dispatch({type: 'CLOSE_ALERT'});
    }
    value.addToBasker = (item) =>{
        dispatch({type: 'ADD_TO_BASKET', payload: item});
    }
    value.removeFromBasket =(id)=>{
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: id}});
    }
    value.incQuantity =(id)=>{
        dispatch({type: 'INC_QUANTITY', payload: {id: id}});
    }
    value.decQuantity =(id)=>{
        dispatch({type: 'DEC_QUANTITY', payload: {id: id}});
    }

    return <ShopContext.Provider value = {value}>
        {children}
    </ShopContext.Provider>

}