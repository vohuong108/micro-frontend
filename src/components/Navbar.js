import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ totalItems }) => {
    const location = useLocation();

    return (
        <>
            <AppBar 
                position="fixed" 
                color="inherit"
                sx={{
                    boxShadow: 'none',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                    width: `calc(100% - ${0}px)`,
                    marginLeft: 0,
                }}
            >
                <Toolbar>
                    <Typography 
                        component={Link} 
                        to='/' 
                        variant="h6" 
                        sx={{
                            flexGrow: 1,
                            alignItems: 'center',
                            display: 'flex',
                            textDecoration: 'none'
                        }} 
                        color="inherit"
                    >
                        <img style={{marginRight: '10px'}} src={'./public/assets/commerce.png'} alt="E-Commerce Shop" height="25px"/>
                        E-Commerce Shop
                    </Typography>
                    <div style={{flexGrow: 1}} />
                    {location.pathname === '/' && (
                        <div>
                            <IconButton component={Link} to='/cart' aria-label="Show Cart Items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            
        </>
    )
}

export default Navbar
