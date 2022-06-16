import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const ServiceProvided = () => {
    return (
        <>
            <Typography sx={{ fontWeight: 'bold', color: 'blue', m: 5 }} variant="h6" component="div">
                OUR PERFORMANCE
            </Typography>
            <Grid container spacing={2}>
                <Grid sx={{ boxShadow: 3, backgroundColor: '#F5F5DC' }} item xs={12} md={3.9}>
                    <Typography variant="h3" gutterBottom component="div">
                        15,000 +
                    </Typography>
                    <Typography sx={{ fontWeight: 300 }} variant="h6" gutterBottom component="div">
                        Service Providers
                    </Typography>
                </Grid>
                <Grid sx={{ boxShadow: 3, mx: 2, backgroundColor: '#F5F5DC' }} item xs={12} md={3.9}>
                    <Typography variant="h3" gutterBottom component="div">
                        2,00,000 +
                    </Typography>
                    <Typography sx={{ fontWeight: 300 }} variant="h6" gutterBottom component="div">
                        Order Served
                    </Typography>
                </Grid>
                <Grid sx={{ boxShadow: 3, backgroundColor: '#F5F5DC' }} item xs={12} md={3.9}>
                    <Typography variant="h3" gutterBottom component="div">
                        1,00,000 +
                    </Typography>
                    <Typography sx={{ fontWeight: 300 }} variant="h6" gutterBottom component="div">
                        5 Star Received
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default ServiceProvided;