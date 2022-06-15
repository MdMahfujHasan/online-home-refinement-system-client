import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Online Home Refinement System
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'white', backgroundColor: '#32CD32', borderRadius: '5px', marginRight: '5px' }} to="/order">
                        <Button color="inherit">ORDER</Button>
                    </NavLink>
                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white', borderRadius: '5px', marginRight: '5px' }} to="/dashboard">
                                    <Button color="inherit">DASHBOARD</Button>
                                    <Button style={{ textDecoration: 'none', color: 'white', backgroundColor: '#DC143C', borderRadius: '5px', marginRight: '5px' }} onClick={logOut} color="inherit">LOGOUT</Button>
                                </NavLink>
                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'black', backgroundColor: 'white', borderRadius: '5px', marginRight: '5px' }} to="/login">
                                <Button color="inherit">LOGIN</Button>
                            </NavLink>
                    }
                    <NavLink style={{ textDecoration: 'none', color: 'white', backgroundColor: 'black', borderRadius: '5px' }} to="/signup">
                        <Button color="inherit">SIGN UP</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;