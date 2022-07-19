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
                        <div className="trescon_item_box_img">
                            <img src={data.img} alt="" />
                        </div>
                        <div className="trescon_item_box_text">
                            <h2>{data.name}</h2>
                            <p>{data.text}</p>
                            <div className="a_btn bdr_btn_white">
                                {data.link.includes('http') ?
                                    <a href={data.link} target="_blank" rel="noreferrer"> Know more </a>
                                :
                                    <a href={data.link} > Know more </a>
                                }
                                {/* <Link to={`${data.link}`} >Know more</Link> */}
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Trescon