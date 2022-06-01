import React from 'react';
import './attendeesay.css';
import { Link } from "react-router-dom";
import { AttendeeSayData } from '../../data';
const AttendeeSay = () => {
    const playpause = () => {
        const ele = document.getElementsByClassName('play-pause-btn')[0];
        if(ele.getAttribute('data-click') === 1) {
            ele.setAttribute('data-click', 0);
            ele.classList.remove('videosPlay');
            document.getElementById('video').pause();
            // document.getElementsByClassName('what_attendees_say')[0].classList.remove('hide_content');
        } else {
            ele.setAttribute('data-click', 1);
            ele.classList.add('videosPlay');
            document.getElementById('video').play();
            // document.getElementsByClassName('what_attendees_say')[0].classList.add('hide_content');
        }
    }

    return (
        <section className="what_attendees_say what_attendees_top_position what_attendees_say what_attendees_top_position" id="forwardschelink">
            {AttendeeSayData && AttendeeSayData.length > 0 && AttendeeSayData.map((data, index) => {
                return (
                    <>
                        {/* Images And Videos Fixed BG Start  */}
                        <div className="what_attendees_bg_fixed_videos">
                            {/* <img src={data.img} alt="" /> */}
                            <video autoplay id="video">
                                <source src={data.img} type="video/mp4" au/>
                            </video>
                        </div>
                        {/* Images And Videos Fixed BG End */}
                        <div className="what_attendees_say_text">
                            <div className="container">
                                <div className="what_attendees_say_inr d-flex align-items-center justify-content-between">
                                    <div className="what_attendees_say_left col-auto wow fadeInLeft">
                                        <h2>{data.text1}
                                            <strong className="mr_dafoe">{data.text2}</strong>
                                        </h2>
                                        <div className="a_btn bdr_btn_white">
                                            <Link to="/attendees">{data.text3}</Link>
                                        </div>
                                    </div>
                                    <div className="what_attendees_say_right col-auto">
                                    {/* <button onclick="playVid()" type="button">Play Video</button>
                                    <button onclick="pauseVid()" type="button">Pause Video</button> */}
                                        <a data-click="0" onClick={() => playpause()} className="play-pause-btn d-flex align-items-center justify-content-center wow zoomIn">
                                            <svg className="btn_play_icon" width="75" height="98" viewBox="0 0 75 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M10.9177 0C14.5824 0.671118 17.4658 2.83308 20.4116 4.90875C36.1477 15.9966 51.8942 27.0692 67.6511 38.1267C70.2109 39.9219 72.3873 42.0144 73.4826 45.0128C75.4001 50.2739 73.6936 55.9065 68.9574 59.3292C62.2654 64.1613 55.4823 68.8687 48.7328 73.6192C38.6468 80.7187 28.5545 87.8174 18.4557 94.9153C16.2243 96.4852 13.7148 97.3433 11.0591 97.837C10.8779 97.8811 10.6995 97.9355 10.5246 98H8.04623C7.94613 97.9294 7.83633 97.8737 7.72025 97.8346C5.04537 97.3552 3.05598 95.9004 1.70895 93.5467C0.385893 91.2241 0 88.705 0 86.0853C0 61.4313 0 36.7789 0 12.1281C0 11.5528 0 10.9776 0.0407465 10.4071C0.323575 7.24088 1.21041 4.34069 3.70553 2.15716C5.06694 0.95874 6.73275 0.453005 8.42972 0H10.9177ZM6.17189 48.9676C6.17189 61.1836 6.17189 73.3995 6.17189 85.6155C6.17179 86.4439 6.22222 87.2715 6.32289 88.0938C6.75672 91.5165 9.16076 92.703 12.152 90.97C12.8375 90.5722 13.4655 90.0712 14.1174 89.6134C30.5982 78.0239 47.0757 66.4311 63.5501 54.8351C64.4957 54.1868 65.3579 53.4245 66.1171 52.5653C68.4373 49.8617 68.1784 46.6571 65.3621 44.452C62.7783 42.429 60.0555 40.5859 57.371 38.6995C42.9595 28.5497 28.5369 18.4142 14.1031 8.2931C12.9916 7.50803 11.7639 6.90225 10.4646 6.49786C8.54717 5.92262 7.02517 6.88375 6.57696 8.82041C6.3185 9.96892 6.18827 11.1426 6.18867 12.3198C6.1599 24.5374 6.15431 36.7533 6.17189 48.9676Z" fill="black" />
                                            </svg>
                                            
                                           
                                            {/* <svg  className="btn_pause_icon" width="39" height="61" viewBox="0 0 39 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="29" width="10" height="61" rx="5" fill="black"/>
                                                <rect width="10" height="61" rx="5" fill="black"/>
                                            </svg> */}
                                            <svg className="btn_pause_icon" width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.6275 10.6417C30.8704 10.6417 29.1852 11.0438 27.9424 11.7595C26.6996 12.4752 26.0009 13.446 26 14.4584V89.5416C26 90.5544 26.6982 91.5257 27.9411 92.2418C29.184 92.958 30.8697 93.3603 32.6275 93.3603C34.3852 93.3603 36.0709 92.958 37.3138 92.2418C38.5567 91.5257 39.2549 90.5544 39.2549 89.5416V14.4584C39.254 13.446 38.5553 12.4752 37.3125 11.7595C36.0697 11.0438 34.3845 10.6417 32.6275 10.6417V10.6417Z" fill="black"/>
<path d="M70.8823 10.6417C69.1252 10.6417 67.44 11.0438 66.1973 11.7595C64.9545 12.4752 64.2558 13.446 64.2549 14.4584V89.5416C64.2549 90.5544 64.9531 91.5257 66.196 92.2418C67.4389 92.958 69.1246 93.3603 70.8823 93.3603C72.64 93.3603 74.3258 92.958 75.5686 92.2418C76.8115 91.5257 77.5098 90.5544 77.5098 89.5416V14.4584C77.5089 13.446 76.8102 12.4752 75.5674 11.7595C74.3246 11.0438 72.6394 10.6417 70.8823 10.6417Z" fill="black"/>
</svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </section>
    )
}

export default AttendeeSay;