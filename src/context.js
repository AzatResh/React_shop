import {createContext, useContext} from "react";

export const ShopContext = createContext();

export const ContextProvider = ({children}) => {

    const value ={
        test: 'test from context',
    }
    return <ShopContext.Provider value = {value}>
        {children}
    </ShopContext.Provider>

}