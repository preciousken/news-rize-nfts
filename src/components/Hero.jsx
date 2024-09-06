import React from "react";

const Hero = () => {
  return (
    <div className="slider-one rn-section-gapTop" style={{ background: "#13131d" }}>
      <div className="container">
        <div className="row row-reverce-sm align-items-center">
          <div className="col-lg-5 col-md-6 col-sm-12 mt_sm--50">
            <h2
              className="title sal-animate"
              data-sal-delay="200"
              data-sal="slide-up"
              data-sal-duration="800"
              style={{ color: "#ffffff" }}
            >
              Discover Digital Art, Collect and Sell Your Specific NFTs.
            </h2>
            <p
              className="slide-disc sal-animate"
              data-sal-delay="300"
              data-sal="slide-up"
              data-sal-duration="800"
              style={{ color: "#acacac" }}
            >
              Partner with one of the world’s largest retailers to showcase your
              brand and products.
            </p>
            <div className="button-group">
              <a
                className="btn btn-large btn-primary sal-animate"
                href="#"
                data-sal-delay="400"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                Get Started
              </a>
              <a
                className="btn btn-large btn-primary-alta sal-animate"
                href="create.html"
                data-sal-delay="500"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                Create
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 offset-lg-1">
            <div className="slider-thumbnail">
              <img
                src="assets/images/slider/slider-1.png"
                alt="Slider Images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
