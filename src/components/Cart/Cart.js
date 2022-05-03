import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import CartItem from './CartItem/CartItem.js';
import { Link } from 'react-router-dom';

const Cart = ({ cart, handleUpdateCart, handleRemoveCartItems, handleEmptyCart }) => {

    if(!cart.line_items) {
        return (<>Loading...</>);
    }
    
    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your cart, start adding some!
            {/* <Link to='/' style={{textDecoration: 'none'}}> start adding some! </Link> */}
        </Typography>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart?.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id} >
                        <CartItem 
                            item={item}
                            handleUpdateCart={handleUpdateCart}
                            handleRemoveCartItems={handleRemoveCartItems}
                        />
                    </Grid>
                ))}
            </Grid>
            <div
                style={{
                    display: 'flex',
                    marginTop: '10%',
                    width: '100%',
                    justifyContent: 'space-between',
                }}
            >
                <Typography variant="h4">Subtotal: {cart?.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button 
                        size="large" 
                        type="button" 
                        variant="contained" 
                        color="secondary" 
                        onClick={() => handleEmptyCart()}
                        sx={{
                            minWidth: '150px',
                            marginRight: '20px',
                        }}
                    >EMPTY CART</Button>
                    <Button 
                        component={Link} 
                        to='/checkout' 
                        size="large" 
                        type="button" 
                        variant="contained" 
                        color="primary"
                        sx={{minWidth: '150px'}}
                    >CHECKOUT</Button>
                </div>
            </div>

        </>
    )

    return (
        <Container>
            <div style={{minHeight: '64px'}} />
            <Typography sx={{marginTop: '5%'}} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            { !cart?.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
