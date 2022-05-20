import React, { useEffect } from 'react';
import './home.css';
import WOW from 'wowjs';
import Header from '../Header'
import HeroBanner from '../herobanner'
import Trescon from '../trescon';
import ConnectioningBusiness from '../connectioningbusiness';
import AdvisoryBoard from '../advisoryboard';
import AttendeeSay from '../attendeesay';
import WorkedWithUs from '../workedwithus';
import JoinUs from '../joinus';
import GlobalOffices from '../globaloffices';
import Footer from '../footer';

const Home = () => {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    })
    return (
        <>
            <Header />
            <HeroBanner />
            <Trescon />
            <ConnectioningBusiness />
            <AdvisoryBoard />
            <AttendeeSay />
            <WorkedWithUs />
            <JoinUs />
            <GlobalOffices />
            <Footer />
        </>
    )

}

export default Home;