import React from 'react';
import './workedwithus.css';
import { WhoWorkedWithUsData } from '../../data';

const WorkedWithUs = () => {
    return (
        <section className="who_worked_with">
            <div className="container">
                <div className="who_worked_with_inr">
                    <h2>GOVERNMENTS AND ASSOCIATIONS WHO HAVE WORKED WITH US IN THE PAST</h2>
                    <div className="who_worked_with_list d-flex justify-content-between align-items-center flex-wrap">
                        {WhoWorkedWithUsData && WhoWorkedWithUsData.length > 0 && WhoWorkedWithUsData.map((data, index) => {

                            return (
                                <div className="who_worked_with_box">
                                    <img src={data.img} alt="" />
                                </div>

                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkedWithUs