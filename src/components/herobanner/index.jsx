import React from "react";
import "./herobanner.css";
import {
  HeroBannerImageData,
  HeroBannerVideoData,
  HeroImageSwipeData,
} from "../../data";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "./swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, {
  Navigation,
  Scrollbar,
  Autoplay,
  Pagination,
} from "swiper";
SwiperCore.use([Navigation, Scrollbar, Autoplay, Pagination]);

const HeroBanner = () => {
  const [focus, setFocus] = React.useState(false);

  return (
    <section className="hero_banner" id="Homelink">
      <div className="hero_banner_trescon_logo">
        <img
          src={HeroBannerImageData.tresconlogo}
          alt={HeroBannerImageData.tresconlogo}
        />
      </div>
      <div className="hero_banner_video">
        <video autoPlay muted playsInline loop>
          <source src={HeroBannerVideoData.bannervideo} type="video/mp4" />
        </video>
      </div>
      <div className="hero_banner_slider swiper">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: ".hero_banner_slider_btns .swiper-button-next",
            prevEl: ".hero_banner_slider_btns .swiper-button-prev",
          }}
          className="swiper-wrapper"
        >
          {HeroImageSwipeData?.map((res, index) => {
              return (
                <div key={`hero_image_${index}`} className="swiper-slide">
                  <SwiperSlide className="hero_banner_slide_item">
                    <div className="hero_banner_text">
                      <img
                        className="wow fadeInUp"
                        src={res.img}
                        alt={res.img}
                      />
                      <div
                        className="media_coverage_list d-flex align-items-center justify-content-center"
                        id="media_list_id1"
                      >
                        {res?.data?.map((res1, ind) => {
                            return (
                              <div
                                key={`media_coverage_0${ind}`}
                                className="media_coverage_box wow fadeInUp"
                                data-wow-delay={res1.time}
                              >
                                <div className="number_media_box">
                                  <strong className="russo-one">
                                    {" "}
                                    <CountUp
                                      start={focus ? 0 : null}
                                      end={res1.title}
                                      duration={2}
                                      redraw={true}
                                    >
                                      {({ countUpRef }) => (
                                        <VisibilitySensor
                                          onChange={(isVisible) => {
                                            if (isVisible) {
                                              setFocus(true);
                                            }
                                          }}
                                        >
                                          <span ref={countUpRef} />
                                        </VisibilitySensor>
                                      )}
                                    </CountUp>
                                    <span>{res1.sign}</span>
                                  </strong>
                                </div>
                                <p>{res1.description}</p>
                              </div>
                            );
                          })}
                      </div>
                      <div className="a_btn bdr_btn_white wow fadeInUp">
                        <a
                          href="https://wbsevent.netlify.app/#bookticketslink"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BOOK TICKETS
                        </a>
                      </div>
                      <small className="wow fadeInUp">
                        Reserve your tickets for upcoming events at special
                        prices
                      </small>
                    </div>
                  </SwiperSlide>
                </div>
              );
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
  );
};

export default HeroBanner;
