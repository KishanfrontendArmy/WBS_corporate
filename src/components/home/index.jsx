import React, { useState, useEffect, Suspense } from "react";
import "./home.css";
import WOW from "wowjs";
import Header from "../Header";
import HeroBanner from "../herobanner";

const Trescon = React.lazy(() => import("../trescon"));
const ConnectioningBusiness = React.lazy(() =>
  import("../connectioningbusiness")
);
const AdvisoryBoard = React.lazy(() => import("../advisoryboard"));
const AttendeeSay = React.lazy(() => import("../attendeesay"));
const WorkedWithUs = React.lazy(() => import("../workedwithus"));
const OurEventsHosted = React.lazy(() => import("../oureventshosted"));
const JoinUs = React.lazy(() => import("../joinus"));
const GlobalOffices = React.lazy(() => import("../globaloffices"));
const Footer = React.lazy(() => import("../footer"));

const Home = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  });
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setVisible(true);
    } else if (scrolled <= 400) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <div style={{ display: visible ? "block" : "none" }}>
        <button className="Top_icon" onClick={scrollToTop}>
          <img src="/images/bottom_up.svg" alt="" />
        </button>
      </div>
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
        <OurEventsHosted />
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
  );
};

export default Home;
