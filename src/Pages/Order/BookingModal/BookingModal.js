import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from '../../../Hooks/useAuth';

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

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {
    const { name, time, price } = booking;
    const { user } = useAuth();
    const initialInfo = { name: user.displayName, email: user.email, number: '' }

    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {

        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocalDateString()
        }
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose();
                }
            })

        handleBookingClose();
        e.preventDefault();
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
                            name="name"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            variant="filled"
                            sx={{ width: '100%', my: 1 }}
                        />
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            variant="filled"
                            sx={{ width: '100%' }}
                        />
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            defaultValue="Phone Number"
                            name="number"
                            onBlur={handleOnBlur}
                            variant="filled"
                            sx={{ width: '100%', my: 1 }}
                        />
                        <TextField
                            disabled
                            hiddenLabel
                            id="filled-hidden-label-small"
                            defaultValue={date.toDateString()}
                            variant="filled"
                            sx={{ width: '100%', mb: 1 }}
                        />
                        <Button type="submit" variant="contained">BOOK NOW</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;