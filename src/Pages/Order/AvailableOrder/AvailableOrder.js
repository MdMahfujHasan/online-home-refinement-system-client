import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Interior Design',
        time: '08.00 AM - 12.00 PM',
        price: 35,
        space: 10,
    },
    {
        id: 2,
        name: 'Vehicle Repair',
        time: '02.00 PM - 4.00 PM',
        price: 30,
        space: 8,
    },
    {
        id: 3,
        name: 'Laundry',
        time: '7.00 AM - 10.00 AM',
        price: 15,
        space: 9,
    },
    {
        id: 4,
        name: 'Home Cleaning',
        time: '7.00 AM - 10.00 AM',
        price: 20,
        space: 5,
    },
    {
        id: 5,
        name: 'Washroom Cleaning',
        time: '07.30 AM - 10.00 AM',
        price: 25,
        space: 10,
    },
    {
        id: 6,
        name: 'Personal Chef',
        time: '06.30 AM - 12.30 PM',
        price: 50,
        space: 10,
    },
]

const AvailableOrder = ({ date }) => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom component="div" sx={{ color: 'info.main', my: 3 }}>
                Available Bookings for Today <br />
                <span style={{ color: 'violet' }}>Selected: {date.toDateString()}</span>
            </Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableOrder;