import React from 'react';
import './attendeesay.css';
import { AttendeeSayData } from '../../data';

const AttendeeSay = () => {
    return (
        <section className="what_attendees_say">
            {AttendeeSayData && AttendeeSayData.length > 0 && AttendeeSayData.map((data, index) => {
                return (
                    <>
                        <div className="what_attendees_say_video">
                            <img src={data.img} alt="" />
                        </div>

                        <div className="what_attendees_say_text">
                            <div className="container">
                                <div className="what_attendees_say_inr d-flex align-items-center justify-content-between">
                                    <div className="what_attendees_say_left">
                                        <h2>{data.text1}
                                            <strong className="mr_dafoe">{data.text2}</strong>
                                        </h2>
                                        <div className="a_btn bdr_btn_white">
                                            <a href="#.">{data.text3}</a>
                                        </div>
                                    </div>
                                    <div className="what_attendees_say_right">
                                        <a href="#." className="d-flex align-items-center justify-content-center">
                                            <svg width="75" height="98" viewBox="0 0 75 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M10.9177 0C14.5824 0.671118 17.4658 2.83308 20.4116 4.90875C36.1477 15.9966 51.8942 27.0692 67.6511 38.1267C70.2109 39.9219 72.3873 42.0144 73.4826 45.0128C75.4001 50.2739 73.6936 55.9065 68.9574 59.3292C62.2654 64.1613 55.4823 68.8687 48.7328 73.6192C38.6468 80.7187 28.5545 87.8174 18.4557 94.9153C16.2243 96.4852 13.7148 97.3433 11.0591 97.837C10.8779 97.8811 10.6995 97.9355 10.5246 98H8.04623C7.94613 97.9294 7.83633 97.8737 7.72025 97.8346C5.04537 97.3552 3.05598 95.9004 1.70895 93.5467C0.385893 91.2241 0 88.705 0 86.0853C0 61.4313 0 36.7789 0 12.1281C0 11.5528 0 10.9776 0.0407465 10.4071C0.323575 7.24088 1.21041 4.34069 3.70553 2.15716C5.06694 0.95874 6.73275 0.453005 8.42972 0H10.9177ZM6.17189 48.9676C6.17189 61.1836 6.17189 73.3995 6.17189 85.6155C6.17179 86.4439 6.22222 87.2715 6.32289 88.0938C6.75672 91.5165 9.16076 92.703 12.152 90.97C12.8375 90.5722 13.4655 90.0712 14.1174 89.6134C30.5982 78.0239 47.0757 66.4311 63.5501 54.8351C64.4957 54.1868 65.3579 53.4245 66.1171 52.5653C68.4373 49.8617 68.1784 46.6571 65.3621 44.452C62.7783 42.429 60.0555 40.5859 57.371 38.6995C42.9595 28.5497 28.5369 18.4142 14.1031 8.2931C12.9916 7.50803 11.7639 6.90225 10.4646 6.49786C8.54717 5.92262 7.02517 6.88375 6.57696 8.82041C6.3185 9.96892 6.18827 11.1426 6.18867 12.3198C6.1599 24.5374 6.15431 36.7533 6.17189 48.9676Z" fill="black" />
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

export default AttendeeSay