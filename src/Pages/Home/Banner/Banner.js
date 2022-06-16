import React from 'react';
import Grid from '@mui/material/Grid';
import interior from '../../../Images/interior.jpg';
import topBg from '../../../Images/top-bg.jpg';
import { Button, Typography, Container, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

const bannerBg = {
    background: `url(${topBg})`,

}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left'

}

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ mt: 3 }}>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography style={{ ...verticalCenter }} variant="h3">
                            Your Home <br />
                            The Story of Who You're <br />
                            A Collection of What You Love
                        </Typography>
                        <Typography variant="body2" style={verticalCenter} sx={{ my: 2 }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum consectetur sed iusto dolor minus aliquam quod nam, velit similique laboriosam deleniti doloribus. Quis labore ducimus, eum enim quisquam molestiae repudiandae odit odio itaque similique! Sapiente ad quo placeat, adipisci consequatur labore optio architecto ullam reiciendis. Impedit delectus distinctio a rem?
                        </Typography>
                        <NavLink style={{ textDecoration: 'none' }} to="order">
                            <Button variant="contained" style={verticalCenter}>
                                GET STARTED
                            </Button>
                        </NavLink>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '100%', borderRadius: '10px' }} src={interior} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;