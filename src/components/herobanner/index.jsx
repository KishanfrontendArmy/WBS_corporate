import React from 'react';
import './herobanner.css';
import { HeroBannerData, HeroBannerImageData, HeroImageSwipeData } from '../../data';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "./swiper.min.css";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';

import SwiperCore, { Navigation, Scrollbar, Autoplay, Pagination } from 'swiper';
SwiperCore.use([Navigation, Scrollbar, Autoplay, Pagination]);


const HeroBanner = () => {
    const [focus, setFocus] = React.useState(false);

    return (
        <section className="hero_banner">

            <div className="hero_banner_trescon_logo">
                <img src={HeroBannerImageData.tresconlogo} alt="" />
            </div>

            <div className="hero_banner_slider swiper">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    navigation={{
                        nextEl: ".hero_banner_slider_btns .swiper-button-next",
                        prevEl: ".hero_banner_slider_btns .swiper-button-prev"
                    }}
                    className="swiper-wrapper"
                >
                    {HeroImageSwipeData && HeroImageSwipeData.length > 0 && HeroImageSwipeData.map((data, index) => {
                        return (
                            <div className="swiper-slide">
                                <SwiperSlide className='hero_banner_slide_item'>
                                    <div className="hero_banner_video">
                                        <video autoPlay muted loop>
                                            <source src={data.video} type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className="hero_banner_text">
                                        <img className="wow fadeInUp" src={data.img} alt="" />
                                        <div className="media_coverage_list d-flex align-items-center justify-content-center" id="media_list_id1">
                                            {HeroBannerData && HeroBannerData.length > 0 && HeroBannerData.map((data, index) => {
                                                return (
                                                    <>
                                                        <div className="media_coverage_box wow fadeInUp" data-wow-delay={data.time}>
                                                            <div className="number_media_box">
                                                                <strong className="russo-one"> <CountUp
                                                                    start={focus ? 0 : null}
                                                                    end={data.title}
                                                                    duration={2}
                                                                    redraw={true}
                                                                >
                                                                    {({ countUpRef }) => (
                                                                        <VisibilitySensor onChange={(isVisible) => {
                                                                            if (isVisible) { setFocus(true); }
                                                                        }}>
                                                                            <span ref={countUpRef} />
                                                                        </VisibilitySensor>
                                                                    )}
                                                                </CountUp><span>{data.sign}</span></strong>
                                                            </div>
                                                            <p>{data.description}</p>
                                                        </div>
                                                    </>
                                                )
                                            })}
                                        </div>
                                        <div className="a_btn bdr_btn_white wow fadeInUp">
                                            <a href="#.">BOOK TICKETS</a>
                                        </div>
                                        <small className="wow fadeInUp">Reserve your tickets for upcoming events at special prices</small>
                                    </div>
                                </SwiperSlide>
                            </div>

                        )
                    })}
                </Swiper>
                <div className="hero_banner_slider_btns d-flex justify-content-between flex-row-reverse">
                    <div className="swiper-button-next" onClick={() => setFocus(false)}>
                        <img src="/images/right_arrow_white.png" alt="" />

                    </div>
                    <div className="swiper-button-prev" onClick={() => setFocus(false)}>
                        <img src="/images/left_arrow_white.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner;