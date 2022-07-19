import React from "react";
import "./oureventshosted.css";

const OurEventsHosted = () => {
  return (
    <section className="our_events_hosted bg-white-main" id="joinuslink">
      <div className="container">
        <div className="title_box wow fadeInUp">
          <h2>OUR EVENTS ARE HOSTED IN THE FOLLOWING COUNTRIES</h2>
        </div>
        <div className="our_events_hosted_inr d-flex row">
          <div className="our_events_hosted_box mx-auto text-center  wow fadeInUp" data-wow-delay="0.2s">
            <img className="mx-auto map_image" src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurEventsHosted;
