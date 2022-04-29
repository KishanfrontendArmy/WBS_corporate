import React from 'react';
import './globaloffices.css';
import { GlobalOfficesData } from '../../data';

const GlobalOffices = () => {
    return (

        <section className="global_offices">
            <div className="container">
                <div className="title_box">

                    <h2>GLOBAL OFFICES</h2>
                </div>
                <h3 className="d-flex align-items-center justify-content-center">
                    REACH US ON +91 7338503007
                    <span className="wht_icon">
                        <img src="/images/whatsapp_icon.png" alt="" />
                    </span>
                </h3>
                <div className="global_offices_list">
                    {GlobalOfficesData && GlobalOfficesData.length > 0 && GlobalOfficesData.map((data, index) => {
                        return (
                            <div className="offices_box">
                                <>
                                    <h4>{data.heading}</h4>
                                    <pre>
                                        {data.textb1}<br />{data.textb2}<br />{data.textb3} <br /> {data.text4}<br /> {data.text5}</pre>
                                </>

                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default GlobalOffices