import React from "react";
import AucCard from "./Cards/AucCard";

const Bidding = () => {
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
            <div className="banner-one-slick slick-activation-03 slick-arrow-style-one rn-slick-dot-style slick-gutter-15 slick-initialized slick-slider slick-dotted">
              <div className="slick-list draggable" style={{ height: "648px" }}>
                <div
                  className="slick-track"
                  style={{
                    opacity: 1,
                    width: "6071px",
                    transform: "translate3d(-467px, 0px, 0px)",
                  }}
                >
                  <AucCard />
                  <AucCard />
                  <AucCard hasCountdown={true} />
                  <AucCard />
                  <AucCard />
                  <AucCard />
                  <AucCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bidding;
