import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import OrderBanner from '../OrderBanner/OrderBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import ServiceProvided from '../ServiceProvided/ServiceProvided';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <OrderBanner></OrderBanner>
            <WhyChooseUs></WhyChooseUs>
            <ServiceProvided></ServiceProvided>
            <Footer></Footer>
        </div>
    );
};

export default Home;