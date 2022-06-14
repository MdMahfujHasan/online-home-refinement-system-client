import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
    const { name, time, price } = booking;

    const handleBookingSubmit = e => {
        e.preventDefault();

        // collect data, send to server

        handleBookingClose();
        alert('submitted')
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h5" component="h2" sx={{ color: 'secondary.dark', fontWeight: 'bold' }}>
                        ${price}
                    </Typography>
                    <Typography id="transition-modal-title" variant="h5" component="h2" sx={{ color: 'info.main', fontWeight: 'light', my: 1 }}>
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            hiddenLabel
                            id="filled-hidden-label-small"
                            defaultValue={time}
                            variant="filled"
                            sx={{ width: '100%' }}
                        />
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            defaultValue="Your Name"
                            variant="filled"
                            sx={{ width: '100%' }}
                        />
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            defaultValue="Your Email"
                            variant="filled"
                            sx={{ width: '100%' }}
                        />
                        <TextField
                            disabled
                            hiddenLabel
                            id="filled-hidden-label-small"
                            defaultValue={date.toDateString()}
                            variant="filled"
                            sx={{ width: '100%' }}
                        />
                        <Button type="submit" variant="contained">BOOK NOW</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;