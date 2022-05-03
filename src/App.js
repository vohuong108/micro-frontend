import React, { useState, useEffect } from 'react';
import Products from './components/Products/Products';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { commerce } from './lib/commerce.js';

export default ({ history, setCart }) => {
    const [products, setProducts] = useState([]);

    const handleAddToCart = async (productId, quantity) => {
        const result = await commerce.cart.add(productId, quantity);
        setCart(result.cart);
    }

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        console.log(data)
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts()
    }, []);


    return(
        <BrowserRouter history={history}>
            <Routes>
                <Route path="/" element={<Products products={products} onAddToCart={handleAddToCart} />} />
            </Routes>
        </BrowserRouter>
    )
}
