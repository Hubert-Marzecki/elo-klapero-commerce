import '../styles/globals.css'
import {Global, css} from '@emotion/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header";
import {CartProvider} from "../components/store";
import {useEffect, useState} from "react";
import getFromUrl from "./client";
import {commerce} from "../lib/commerce";
import {useContext} from "react";
import {CartContext} from "../components/store";


function MyApp({Component, pageProps}) {

    const [cartItems, setCartItems] = useState([]);

    async function getStore() {
        const res = await commerce.cart.retrieve();
        setCartItems(res)
        console.log(res)
    }

    const context = useContext(CartContext);


    useEffect(() => {
        getStore()
    }, []);

    const addToCart = ({id}) => {
        // const item = await commerce.cart.add(id)
        // setCartItems(item.cart)
        console.log("DA")
    }


    return (
        <>
            <CartProvider  >
                <Global
                    styles={css`
                      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
                      font-family: 'Roboto', sans-serif;
                    `}
                />
                <Header />
                <Component {...pageProps} addToCart={addToCart}/>
            </CartProvider>
        </>
    )

}

export default MyApp
