import React from 'react';
import './home.css';

import Header from '../../components/Header'
import HeroBanner from '../../components/herobanner'
import Trescon from '../../components/trescon';
import ConnectioningBusiness from '../../components/connectioningbusiness';
import AdvisoryBoard from '../../components/advisoryboard';
import AttendeeSay from '../../components/attendeesay';
import WorkedWithUs from '../../components/workedwithus';
import JoinUs from '../../components/joinus';
import GlobalOffices from '../../components/globaloffices';
import Footer from '../../components/footer';

const Home = () => {
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

export default Home