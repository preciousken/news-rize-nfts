import React from "react";
import CardC from "./Cards/Card";

const NewestI = () => {
  return (
    <div
      className="rn-new-items rn-section-gapTop"
      style={{ background: "#13131d" }}
    >
      <div className="container">
        <div className="row mb--50 align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <h3
              className="title mb--0 sal-animate"
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
              Newest Items
            </h3>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
            <div
              className="view-more-btn text-start text-sm-end sal-animate"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <a
                className="btn-transparent"
                href="#"
                style={{ color: "#acacac", textDecoration: "none" }}
              >
                VIEW ALL
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-arrow-right"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="row g-5">
         <CardC/>
         <CardC/>
         <CardC/>
         <CardC/>
         <CardC/>
        </div>
      </div>
    </div>
  );
};

export default NewestI;
