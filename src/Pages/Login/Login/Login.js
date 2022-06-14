import { Alert, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import id from 'date-fns/esm/locale/id/index.js';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../Images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 10 }} item xs={12} md={6}>
                    <Typography sx={{ mt: 10, fontWeight: 'bold', color: 'primary.main' }} variant="h4" component="h2">
                        LOGIN
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
                        <Button sx={{ width: '25%', m: 1, borderRadius: "20px" }} variant="contained" type="submit">LOGIN</Button>
                        <br />
                        <NavLink style={{ textDecoration: 'none' }} to="/signup">
                            <Button variant="text">NEW USER? PLEASE SIGN UP</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successful!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>}
                </Grid>
                <Grid sx={{ mt: 20 }} item xs={12} md={6}>
                    <img style={{ width: '35%' }} src={login} alt="" />
                </Grid>
            </Grid>

        </Container >
    );
};
export default Login;