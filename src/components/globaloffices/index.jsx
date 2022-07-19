import React from 'react';
import './globaloffices.css';
import { GlobalOfficesData } from '../../data';

const GlobalOffices = () => {
    return (

        <section className="global_offices bg-white-main" id="contactlink">
            <div className="container">
                <div className="title_box">

                    <h2>GLOBAL OFFICES</h2>
                </div>
                <h3 className="d-flex align-items-center justify-content-center">
                    REACH US ON +91 81059 75937
                    <span className="wht_icon">
                        <img src="/images/whatsapp_icon.png" alt="" />
                    </span>
                </h3>
                <div className="global_offices_list row">
                    {GlobalOfficesData && GlobalOfficesData.length > 0 && GlobalOfficesData.map((data, index) => {
                        return (
                            <div className="offices_box col-sm-12 col-md-6 col-lg-4 wow fadeInUp" key={`global_offices${index}`} data-wow-delay={data.time}>
                                <>
                                    <h4>{data.heading}</h4>
                                    <pre dangerouslySetInnerHTML={{ __html: data.textb1}} >
                                        {/* {data.textb1}
                                        {data.textb2}
                                        {data.textb3} 
                                        {data.text4}
                                        {data.text5} */}
                                    </pre>
                                </>

                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default GlobalOffices;