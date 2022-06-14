import React, {useEffect} from 'react';
import './advisoryboard.css';
import { AdvisoryBoardData } from '../../data';
import "./swiper.min.css";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import $ from "jquery";
import 'swiper/css/navigation'
import 'swiper/css/pagination';

import SwiperCore, { Navigation, Scrollbar, Autoplay, Pagination } from 'swiper';
SwiperCore.use([Navigation, Scrollbar, Autoplay, Pagination]);

const AdvisoryBoard = () => {
    const sliderForSingleBreakPoint = {
        // 300: {
        //     slidesPerView: 1,
        //     spaceBetween: 20,
        // },
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        993: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
    }
    
    return (
        <section className="advisory_board bg-white-main">
            <div className="container">
                <div className="title_box wow fadeInUp">
                    <h2>ADVISORY Board Members</h2>
                    <p>Our advisory board consists of top technology experts and some of the brightest minds globally who play a critical role in the development of agendas, effective conference sessions design and cutting-edge content creation.</p>
                </div>
                <div className="advisory_board_list swiper">


                    <Swiper
                        slidesPerView={1}
                        observer={true}
                        observeParents={true}
                        breakpoints={sliderForSingleBreakPoint}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        pagination={{
                            el: ".advisory_board_list_swiper_pagination",
                            clickable: true,
                        }}
                        className="swiper-wrapper"
                    >
                        {AdvisoryBoardData && AdvisoryBoardData.length > 0 && AdvisoryBoardData.map((data, index) => {
                            return (
                                <SwiperSlide key={`advisory_board_box_${index}`}>
                                        <div className="swiper-slide advisory_board_box wow fadeInUp" data-wow-delay={data.time}>
                                            <div className="advisory_board_img_box d-flex align-items-end justify-content-center" >
                                                <img src={data.img} alt="" />
                                            </div>
                                            <h3>{data.name}</h3>
                                            <p>{data.text}</p>
                                            <strong>{data.country}</strong>
                                        </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <div className="advisory_board_list_swiper_pagination swiper_dot_pagination fadeInUp"></div>

                </div>
            </div>
        </section>

    )
}

export default AdvisoryBoard