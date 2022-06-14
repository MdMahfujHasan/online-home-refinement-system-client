import React from 'react';
import Grid from '@mui/material/Grid';
import interior from '../../../Images/interior.jpg';
import topBg from '../../../Images/top-bg.jpg';
import { Button, Typography, Container, Box } from '@mui/material';

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
        <Container style={{}} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography style={{ ...verticalCenter }} variant="h4">
                            Your Home <br />
                            The Story of Who You're <br />
                            A Collection of What You Love
                        </Typography>
                        <Typography variant="body2" style={verticalCenter} sx={{ my: 2 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, voluptatem sapiente veritatis dolores deleniti amet qui explicabo blanditiis aliquid dolorum laborum quis veniam assumenda accusamus animi, tempora soluta molestias sint!
                        </Typography>
                        <Button variant="contained" style={verticalCenter}>
                            GET STARTED
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '100%' }} src={interior} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;