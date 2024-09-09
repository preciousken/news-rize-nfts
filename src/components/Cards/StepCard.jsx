import React from "react";

const StepCard = ({ cls = null, steps }) => {
  return (
    <div className="row g-5">
      {steps.map((step, index) => {
        return (
          <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
              className="rn-service-one color-shape-7 sal-animate"
              style={{ background: "#242435" }}
            >
              <div className="inner">
                <div className="icon">
                  <img src={step.img} alt="Shape" />
                </div>
                <div className="subtitle" style={{ color: "" }}>
                  {"Step-0" + (index + 1)}
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href={step.link} style={{ textDecoration: "none" }}>
                      {step.title}
                    </a>
                  </h4>
                  <p className="description">{step.desc}</p>
                  <a className="read-more-button" href={step.link}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <a className="over-link" href={step.link}></a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepCard;
