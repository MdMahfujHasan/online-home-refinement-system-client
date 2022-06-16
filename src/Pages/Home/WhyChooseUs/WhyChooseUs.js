import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import React from 'react';
import worker2 from '../../../Images/worker2.jpg';
import mask from '../../../Images/mask.png';
import support from '../../../Images/support.png';
import sanitizer from '../../../Images/sanitizer.png';
import gloves from '../../../Images/gloves.png';

const WhyChooseUs = () => {

    return (
        <div>
            <Typography sx={{ fontWeight: 'bold', color: 'blue', m: 5 }} variant="h6" component="div">
                WHY CHOOSE US
            </Typography>
            <Grid sx={{ mb: 5, justifyContent: 'space-evenly' }} container spacing={2} >
                <Grid sx={{ boxShadow: 1, backgroundColor: '#E0FFFF' }} item xs={12} md={2.5}>
                    <Typography variant="h6" gutterBottom component="div">
                        Ensuring Masks
                    </Typography>
                    <img src={mask} alt="" />
                </Grid>
                <Grid sx={{ boxShadow: 1, backgroundColor: '#E0FFFF', mx: 2 }} item xs={12} md={2.5}>
                    <Typography variant="h6" gutterBottom component="div">
                        Ensuring Masks
                    </Typography>
                    <img src={support} alt="" />
                </Grid>
                <Grid sx={{ boxShadow: 1, backgroundColor: '#E0FFFF', mr: 2 }} item xs={12} md={2.5}>
                    <Typography variant="h6" gutterBottom component="div">
                        Ensuring Masks
                    </Typography>
                    <img src={sanitizer} alt="" />
                </Grid>
                <Grid sx={{ boxShadow: 1, backgroundColor: '#E0FFFF' }} item xs={12} md={2.5}>
                    <Typography variant="h6" gutterBottom component="div">
                        Ensuring Masks
                    </Typography>
                    <img style={{ color: 'blue' }} src={gloves} alt="" />
                </Grid>
            </Grid>
        </div>
    );
};

export default WhyChooseUs;