import React, { useEffect, Suspense } from 'react';
import './home.css';
import WOW from 'wowjs';
import Header from '../Header'
import HeroBanner from '../herobanner'

const Trescon = React.lazy(() => import('../trescon'));
const ConnectioningBusiness = React.lazy(() => import ('../connectioningbusiness'));
const AdvisoryBoard = React.lazy(() => import('../advisoryboard'));
const AttendeeSay = React.lazy(() => import('../attendeesay'));
const WorkedWithUs = React.lazy(() => import('../workedwithus'));
const JoinUs = React.lazy(() => import('../joinus'));
const GlobalOffices = React.lazy(() => import('../globaloffices'));
const Footer = React.lazy(() => import('../footer'));

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
            <Suspense fallback={<></>}>
                <Trescon />
            </Suspense>
            <Suspense fallback={<></>}>
                <ConnectioningBusiness />
            </Suspense>
            <Suspense fallback={<></>}>
                <AdvisoryBoard />
            </Suspense>
            <Suspense fallback={<></>}>
                <AttendeeSay />
            </Suspense>
            <Suspense fallback={<></>}>
                <WorkedWithUs />
            </Suspense>
            <Suspense fallback={<></>}>
                <JoinUs />
            </Suspense>
            <Suspense fallback={<></>}>
                <GlobalOffices />
            </Suspense>
            <Suspense fallback={<></>}>
                <Footer />
            </Suspense>
        </>
    )

}

export default Home;