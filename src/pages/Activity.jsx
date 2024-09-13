import React from "react";

const Activity = () => {
  const data = ["", "", "", ""];
  return (
    <div
      className="rn-activity-area rn-section-gapTop"
      style={{ 
        backgroundColor: "rgba(19, 19, 29, 0.9)" 
      }}

    >
      <div className="container">
        <div className="row mb--30">
          <h3
            className="title"
            style={{
              color: "#ffffff",
              fontSize: "32px",
              fontFamily: "Roboto",
              fontWeight: "bolder",
            }}
          >
            All following Acivity
          </h3>
        </div>
        <div className="row g-6 activity-direction">
          <div className="col-lg-8 mb_dec--15">
            {/* ////////////// */}
            {data.map((data) => {
              return (
                <div className="single-activity-wrapper">
                  <div className="inner">
                    <div className="read-content">
                      <div className="thumbnail">
                        <a href="nft-details">
                          <img
                            src="https://rainbowit.net/html/nuron/assets/images/activity/activity-01.jpg"
                            alt="Nft_Profile"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <a href="nft-details">
                          <h6
                            className="title"
                            style={{ fontSize: "20px", color: "#ffffff" }}
                          >
                            Diamond Dog
                          </h6>
                        </a>
                        <p>
                          10 editions listed by Bits for <span>2.50 ETH</span>{" "}
                          each
                        </p>
                        <div className="time-maintane">
                          <div
                            className="time data"
                            style={{ color: "#acacac" }}
                          >
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
                              className="feather feather-clock"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span>2:30 PM on 19th June, </span>
                          </div>
                          <div
                            className="user-area data"
                            style={{ color: "#acacac" }}
                          >
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
                              className="feather feather-user"
                            >
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            <a
                              href="#"
                              style={{
                                color: "#acacac",
                                textDecoration: "none",
                              }}
                            >
                              John Lee
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="icone-area">
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
                        className="feather feather-message-circle"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* ///////////// */}
          </div>
          <div className="col-lg-4">
            <div className="filter-wrapper">
              <div
                className="widge-wrapper rbt-sticky-top-adjust"
                style={{ top: "100px" }}
              >
                <div className="inner">
                  <h3 style={{ fontSize: "14px", color: "#fff" }}>
                    Market filter
                  </h3>
                  <div className="sing-filter">
                    <button>Purchases</button>
                    <button>Sales</button>
                    <button>Followers</button>
                    <button>Following</button>
                    <button>Reserved</button>
                    <button>Live Auction</button>
                  </div>
                </div>
                <div className="inner">
                  <h3 style={{ fontSize: "14px", color: "#fff" }}>
                    Filter by users
                  </h3>
                  <div className="sing-filter">
                    <button>Love</button>
                    <button>Saved</button>
                    <button>Support us</button>
                    <button>Report</button>
                    <button>Vedio</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
