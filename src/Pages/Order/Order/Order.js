import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AvailableOrder from '../AvailableOrder/AvailableOrder';
import OrderHeader from '../OrderHeader/OrderHeader';

const Order = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <OrderHeader date={date} setDate={setDate}></OrderHeader>
            <AvailableOrder date={date}></AvailableOrder>
        </div>
    );
};

export default Order;