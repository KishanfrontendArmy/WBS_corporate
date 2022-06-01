import React from 'react';
import './joinus.css';
import { JoinUsData } from '../../data';

const JoinUs = () => {
    return (
        <section className="join_us bg-white-main" id="joinuslink">
            <div className="container">
                <div className="title_box wow fadeInUp">
                    <h2>JOIN US AT TRESCON</h2>
                </div>
                <div className="join_us_inr d-flex row">
                    {JoinUsData && JoinUsData.length > 0 && JoinUsData.map((data, index) => {
                        return (
                            <div className="join_us_box col-sm-12 col-md-6 col-lg-4 wow fadeInUp" key={`join_us${index}`}  data-wow-delay={data.time}>

                                <a href="#.">
                                    <div className="join_us_box_img">
                                        <img src={data.img} alt="" />
                                    </div>
                                    <div className="join_us_box_text wow zoomIn" data-wow-delay={data.time1}>
                                        <h3 className={data.headingColor}>{data.heading}</h3>
                                        <p className={data.textColor}>at Trescon</p>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default JoinUs;