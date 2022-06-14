import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import order from '../../../Images/order.jpg';
import Calendar from '../../Shared/Calendar/Calendar';

const OrderHeader = ({ date, setDate }) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calendar date={date} setDate={setDate}></Calendar>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={order} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default OrderHeader;