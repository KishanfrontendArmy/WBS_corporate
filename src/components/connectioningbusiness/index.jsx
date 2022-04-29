import React from 'react';
import './business.css';
import { ConnectioningBusinessData, ConnectioningBusinessImageData } from '../../data';
import "./swiper.min.css";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Thumbs, Scrollbar, Autoplay, Pagination } from 'swiper';
SwiperCore.use([Navigation, Thumbs, Scrollbar, Autoplay, Pagination]);

const ConnectioningBusiness = () => {
    return (
        <section className="connectiong_business">
            <div className="container">
                <div className="connectiong_business_title">
                    <h2>CONNECTING
                        <span>
                            <strong>BUSINESS WITh opportunities</strong>
                        </span>
                    </h2>
                </div>
                <div className="connectiong_business_inr d-flex align-items-center justify-content-between">
                    <div className="connectiong_business_inr_left_slider swiper col-5">
                        <div className="swiper-wrapper">
                            <Swiper
                                slidesPerView={1}

                                // thumbs={{
                                //     swiper: "connectiong_business_inr_img_slide_item",
                                // }}
                                pagination={{
                                    el: ".connectiong_business_swiper-pagination",
                                    clickable: true,
                                }}


                                className="swiper-slide connectiong_business_inr_left_slide_item">

                                {ConnectioningBusinessData && ConnectioningBusinessData.length > 0 && ConnectioningBusinessData.map((data, index) => {
                                    return (
                                        <SwiperSlide>
                                            <>
                                                <h3>{data.heading}</h3>
                                                <strong>{data.text}</strong>
                                                <p>{data.discription}</p>
                                            </>
                                        </SwiperSlide>
                                    )
                                })}

                            </Swiper>
                        </div>
                        <div className="connectiong_business_swiper-pagination swiper_dot_pagination"></div>
                    </div>
                    <div className="connectiong_business_inr_img_slider_otr col-6">

                        <div className="connectiong_business_inr_img_slider_bg">
                            <img src="/images/connectiong_business_img_shape.png" alt="" />
                        </div>
                        <div thumbsSlider="" className="connectiong_business_inr_img_slider swiper">
                            <Swiper
                                allowTouchMove={false}
                                freeMode={true}
                                watchSlidesProgress={true}
                                slidesPerView={1}
                                pagination={{
                                    el: ".connectiong_business_swiper-pagination",
                                    clickable: true,
                                }}
                                className="swiper-wrapper"
                            >
                                {ConnectioningBusinessImageData && ConnectioningBusinessImageData.length > 0 && ConnectioningBusinessImageData.map((data, index) => {
                                    { console.log("data", data) }
                                    return (
                                        <div className="swiper-slide connectiong_business_inr_img_slide_item">
                                            <SwiperSlide>
                                                <img src={data.img} alt="" />
                                            </SwiperSlide>
                                        </div>
                                    )
                                })}

                            </Swiper>
                        </div>




                    </div>
                </div>


            </div>
        </section >

    )
}

export default ConnectioningBusiness