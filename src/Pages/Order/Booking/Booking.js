import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, price, space } = { booking };
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography variant="h4" gutterBottom component="div" sx={{ color: 'blueviolet', fontWeight: 400 }}>
                        ${booking.price}
                    </Typography>
                    <Typography variant="h5" gutterBottom component="div" sx={{ color: 'info.main', fontWeight: 'light' }}>
                        {booking.name}
                    </Typography>
                    <Typography variant="body2" gutterBottom component="div">
                        {booking.time}
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom sx={{ color: 'white', backgroundColor: 'success.light', fontWeight: 600 }}>
                        {booking.space} available for today
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">PLACE ORDER</Button>
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;