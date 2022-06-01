import React from 'react';
import './trescon.css';
import { TresconData } from '../../data';
import { Link } from 'react-router-dom';

const Trescon = () => {
    return (
        <section className="trescon_detail" id="aboutlink">
            {TresconData && TresconData.length > 0 && TresconData.map((data, index) => {
                return (
                    <div className="trescon_item_box" key={`trescon_detail${index}`}>
                        <div className="trescon_item_box_img wow fadeInUp">
                            <img src={data.img} alt="" />
                        </div>
                        <div className="trescon_item_box_text wow fadeInUp">
                            <h2>{data.name}</h2>
                            <p>{data.text}</p>
                            <div className="a_btn bdr_btn_white">
                                <Link to={`${data.link}`} >Know more</Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Trescon