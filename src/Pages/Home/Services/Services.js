import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import interiorDesign from '../../../Images/interior-design.png';
import vehicleRepair from '../../../Images/vehicle-repair.png';
import laundry from '../../../Images/laundry.png';
import homeCleaning from '../../../Images/home-cleaning.png';
import washroomCleaning from '../../../Images/washroom-cleaning.png';
import personalChef from '../../../Images/personal-chef.png';

const services = [
    {
        name: 'Interior Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: interiorDesign
    },
    {
        name: 'Vehicle Repair',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: vehicleRepair
    },
    {
        name: 'Laundry',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: laundry
    },
    {
        name: 'Home Cleaning',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: homeCleaning
    },
    {
        name: 'Washroom Cleaning',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: washroomCleaning
    },
    {
        name: 'Personal Chef',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: personalChef
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container maxWidth="lg">
                <Typography sx={{ fontWeight: 'bold', color: 'blue', m: 2 }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 'lighter', fontSize: 35, m: 2, color: 'info.main' }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box >
    );
};

export default Services;