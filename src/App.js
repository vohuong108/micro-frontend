import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CartApp from './components/CartApp';
import ProductApp from './components/ProductApp';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { createBrowserHistory } from "history";
import { commerce } from './lib/commerce.js';

const history = createBrowserHistory();

export default () => {
    const [cart, setCart] = useState([]);

    const fetchCart = async () => {
        const cartList = await commerce.cart.retrieve();
        setCart(cartList);
        console.log("fetch cart in container: ", cartList)
    }

    useEffect(() => {
        fetchCart()
    }, []);

    return (
        <BrowserRouter history={history}>
            <Navbar totalItems={cart.total_items} />
            <Routes>
                <Route exact path='/cart' element={<CartApp cart={cart} setCart={setCart} />}/>
                <Route 
                    path='/' 
                    element={
                        <ProductApp history={history} setCart={setCart}/>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}