import React from "react";
import AucCard from "./Cards/AucCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Bidding = () => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Reduce to 3 to allow space for partial views of the 1st and last card
    slidesToScroll: 1,
    arrows: true,
    centerMode: true, // Enable center mode
    centerPadding: "5%", // Adjust to show half parts of first and last cards
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "8%", // Adjust for smaller screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerPadding: "5%", // Adjust for tablet-sized screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "0", // Full width on mobile
        },
      },
    ],
  };

  return (
    <div
      className="rn-live-bidding-area rn-section-gapTop"
      style={{ background: "#13131d" }}
    >
      <div className="container">
        <div className="row mb--50">
          <div className="col-lg-12">
            <div className="section-title">
              <h3
                className="title mb--0 live-bidding-title sal-animate"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
                style={{
                  color: "#ffffff",
                  fontSize: "32px",
                  fontFamily: "Roboto",
                  fontWeight: "bolder",
                }}
              >
                Live Bidding
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div style={{ height: "400px", overflow: "visible" }}>
              <Slider {...sliderSettings}>
                <AucCard />
                <AucCard />
                <AucCard hasCountdown={true} />
                <AucCard />
                <AucCard />
                <AucCard />
                <AucCard />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bidding;
