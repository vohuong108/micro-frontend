import React from 'react';
import { Grid } from '@mui/material';
import Product from './Product/Product';

// const products = [
//     {id: '1', name: 'Shoes', description: 'Running Shoes', price: '$5', image: ''},
//     {id: '2', name: 'Macbook', description: 'Apple Macbook', price: '$10', image: ''}
// ];

const Products = ({ products, onAddToCart }) => {

    return (
        <main 
            style={{
                flexGrow: 1,
                padding: '24px',
                backgroundColor: '#fafafa'
            }}
        >
            <div style={{
                minHeight: '64px'
            }}/>
            <Grid container justify="center" spacing={4}>
                {products.map(product => (
                    //item type, xs to full width on mobile device, xs to small device that take 6/12
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))
                }
            </Grid>
        </main>

    )
}

export default Products;