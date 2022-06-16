import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Navigation from '../../Shared/Navigation/Navigation';
import working1 from '../../../Images/working1.jpg';
import working2 from '../../../Images/working2.jpg';
import working3 from '../../../Images/working3.jpg';
import Footer from '../Footer/Footer';

const LearnMore = () => {
    return (
        <>
            <Navigation></Navigation>
            <Grid sx={{ mt: 3 }} container spacing={2}>
                <Grid item xs={12} md={7}>
                    <img style={{ width: '70%', padding: '5px', border: '1px dashed black' }} src={working2} alt="" />
                </Grid>
                <Grid sx={{ justifyContent: 'space-evenly' }} style={{ textAlign: 'left' }} item xs={12} md={4}>
                    <Typography variant="h5" gutterBottom component="div">
                        1. Select the Service
                    </Typography>
                    <Typography variant="body2" gutterBottom component="div">
                        Pick the service you are looking for- from the website or the app.
                    </Typography>
                    <Typography variant="h5" gutterBottom component="div">
                        2. Pick your schedule
                    </Typography>
                    <Typography variant="body2" gutterBottom component="div">
                        Pick your convenient date and time to avail the service. Pick the service provider based on their rating.
                    </Typography>
                    <Typography variant="h5" gutterBottom component="div">
                        3. Place Your Order
                    </Typography>
                    <Typography variant="body2" gutterBottom component="div">
                        Review and place the order. Now just sit back and relax. We'll assign the expert service provider's schedule for you.
                    </Typography>
                </Grid>
            </Grid>
            <Grid sx={{ mb: 5, justifyContent: 'space-evenly', mt: 5 }} container spacing={2} >
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={working1}
                            alt=""
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Determination
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus laborum tempore corrupti blanditiis quaerat, ipsa animi ab nam reprehenderit sed voluptas provident. Ullam natus voluptas sunt quibusdam veritatis quis repudiandae, dolor totam eum tempore cum ratione praesentium doloribus perspiciatis unde!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={working2}
                            alt=""
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Persistence
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus laborum tempore corrupti blanditiis quaerat, ipsa animi ab nam reprehenderit sed voluptas provident. Ullam natus voluptas sunt quibusdam veritatis quis repudiandae, dolor totam eum tempore cum ratione praesentium doloribus perspiciatis unde!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={working3}
                            alt=""
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Measurement
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus laborum tempore corrupti blanditiis quaerat, ipsa animi ab nam reprehenderit sed voluptas provident. Ullam natus voluptas sunt quibusdam veritatis quis repudiandae, dolor totam eum tempore cum ratione praesentium doloribus perspiciatis unde!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Footer></Footer>
        </>
    );
};

export default LearnMore;