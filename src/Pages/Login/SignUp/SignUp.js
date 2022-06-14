import { Alert, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../Images/login.png';

const SignUp = () => {
    const [loginData, setLoginData] = useState({})

    const { user, registerUser, isLoading, authError } = useAuth()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            return;
        }
        registerUser(loginData.email, loginData.password)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 10 }} item xs={12} md={6}>
                    <Typography sx={{ mt: 10, fontWeight: 'bold', color: 'primary.main' }} variant="h4" component="h2">
                        SIGN UP
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Email"
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Confirm Password"
                            type="password"
                            name="password2"
                            onChange={handleOnChange}
                            variant="standard" />
                        <Button style={{ color: 'white', backgroundColor: 'black' }} sx={{ width: '25%', m: 1, borderRadius: '20px' }} variant="contained" type="submit">SIGN UP</Button>
                        <br />
                        <NavLink style={{ textDecoration: 'none' }} to="/login">
                            <Button variant="text">ALREADY A USER? PLEASE LOGIN</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid sx={{ mt: 20 }} item xs={12} md={6}>
                    <img style={{ width: '35%' }} src={login} alt="" />
                </Grid>
            </Grid>

        </Container >
    );
};

export default SignUp;