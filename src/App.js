import React, { useState, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { commerce } from './lib/commerce.js';

export default ({ history, cart, setCart }) => {
    // const [cartApp, setCartApp] = useState([]);

    const handleUpdateCart = async (lineItemId, quantity) => {
        const response = await commerce.cart.update(lineItemId, { quantity });
        setCart(response.cart);
    };

    const handleRemoveCartItems = async (productId) => {
        const response = await commerce.cart.remove(productId);
        setCart(response.cart);
    }

    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();
        setCart(response.cart);
    }

    return(
        <BrowserRouter history={history}>
            <Routes>
                <Route exact path="/cart" element={
                    <Cart 
                        cart={cart} 
                        handleUpdateCart={handleUpdateCart}
                        handleRemoveCartItems={handleRemoveCartItems}
                        handleEmptyCart={handleEmptyCart}
                    />
                }/>
            </Routes>
        </BrowserRouter>
    )
}
