import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';

const CartItem = ({ item, handleUpdateCart, handleRemoveCartItems }) => {

    return (
        <Card>
            <CardMedia 
                component="div" 
                image={item.media.source} 
                alt={item.name} 
                sx={{height: 260}} 
            />
            <CardContent
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions sx={{justifyContent: 'space-between'}}>
                <div 
                    style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Button type="button" size="small" onClick={() => handleUpdateCart(item.id, item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => handleUpdateCart(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveCartItems(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
