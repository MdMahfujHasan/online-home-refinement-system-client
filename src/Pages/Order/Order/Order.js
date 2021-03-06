import React from 'react';
import Footer from '../../Home/Footer/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Order;