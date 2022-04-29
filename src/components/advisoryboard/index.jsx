import React from 'react';
import './advisoryboard.css';
import { AdvisoryBoardData } from '../../data';
import "./swiper.min.css";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';

import SwiperCore, { Navigation, Scrollbar, Autoplay, Pagination } from 'swiper';
SwiperCore.use([Navigation, Scrollbar, Autoplay, Pagination]);


const AdvisoryBoard = () => {
    return (
        <section className="advisory_board">
            <div className="container">
                <div className="title_box">
                    <h2>ADVISORY Board Members</h2>
                    <p>Our advisory board consists of top technology experts and some of the brightest minds globally who play a critical role in the development of agendas, effective conference sessions design and cutting-edge content creation.</p>
                </div>
                <div className="advisory_board_list swiper">

                    <div className="swiper-wrapper">
                        <Swiper
                            slidesPerView={3}
                            pagination={{
                                el: ".advisory_board_list_swiper_pagination",
                                clickable: true,
                            }}
                            className="swiper-slide advisory_board_box"
                        >
                            {AdvisoryBoardData && AdvisoryBoardData.length > 0 && AdvisoryBoardData.map((data, index) => {
                                return (
                                    <SwiperSlide key={`advisory_board_box ${index}`}>
                                        <>
                                            <div className="advisory_board_img_box d-flex align-items-end justify-content-center">
                                                <img src={data.img} alt="" />
                                            </div>
                                            <h3>{data.name}</h3>
                                            <p>{data.text}</p>
                                            <strong>{data.country}</strong>
                                        </>
                                    </SwiperSlide>
                                )
                            })}
                            <div className="advisory_board_list_swiper_pagination swiper_dot_pagination"></div>
                        </Swiper>
                    </div>

                    {/* </div> */}

                </div>
            </div>
        </section >

    )
}

export default AdvisoryBoard