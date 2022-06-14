import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import OrderBanner from '../OrderBanner/OrderBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <OrderBanner></OrderBanner>
        </div>
    );
};

export default Home;