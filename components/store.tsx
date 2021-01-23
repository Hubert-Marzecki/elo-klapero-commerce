import React, {createContext, useEffect, useState} from 'react';
import {commerce} from "../lib/commerce";

export const CartContext = createContext([]);

export const CartProvider = (props: {children : JSX.Element}) : JSX.Element => {

    const [state, setState] = useState<any>([]);


    useEffect(() => {
        getStore();
    }, [])

    async function getStore() {
       const res = await commerce.cart.contents();
       setState(res)
        console.log(res)
    }
    const updateCart = async ( props: {id : string} ) => {
        // setState(updates)
        commerce.cart.add(props.id, 1).then((response:any) => console.log(response));
        const res = await commerce.cart.contents();
        setState(res)

    }


    return (
        // @ts-ignore
        <CartContext.Provider value={{cart: state, updateCart: updateCart  }} >
            {props.children}
        </CartContext.Provider>
    )
}