import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import worker from '../../../Images/worker.png';
import interiorBg from '../../../Images/interior-bg.jpg';
import { Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const orderBg = {
    background: `url(${interiorBg})`,
    backgroundColor: '#6D8FF9',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 200
}

const OrderBanner = () => {
    return (
        <Box style={orderBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 550, marginTop: '-195px' }}
                        src={worker} alt="" />

                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box>
                        <Typography variant="h6" color="white" sx={{ mb: 2 }}>
                            ORDER NOW
                        </Typography>
                        <Typography variant="h4" color="white" sx={{ fontWeight: 'lighter', fontSize: 35, mb: 1 }}>
                            Make an Order Today
                        </Typography>
                        <Typography variant="body2" color="white" sx={{ boxShadow: 20, mb: 2, p: 1 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem numquam exercitationem, eveniet asperiores deserunt voluptate ipsum modi consequatur non eius earum ex expedita quos iste nam ipsa porro at. Esse ratione, sunt consequuntur nulla doloribus facilis quaerat ipsam amet quod unde ad quam? Distinctio maxime optio soluta commodi voluptate laudantium.
                        </Typography>
                        <NavLink style={{ textDecoration: 'none' }} to="learnmore"><Button variant="contained">LEARN MORE</Button></NavLink>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default OrderBanner;