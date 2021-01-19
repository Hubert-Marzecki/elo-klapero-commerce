import React, {createContext, useEffect, useState} from 'react';
import {commerce} from "../lib/commerce";

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {

    const [state, setState] = useState([]);


    useEffect(() => {
        getStore()
    }, [])

    async function getStore() {
       const res = await commerce.cart.contents();
       setState(res)
    }
    const updateCart =(updates) => {
        setState(updates)
    }

    return (
        <CartContext.Provider value={{cart: state, updateCart: updateCart  }} >
            {children}
        </CartContext.Provider>
    )
}