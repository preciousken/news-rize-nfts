import React from "react";

const AuctionCard = () => {
  return (
    <div className="place-bet-area">
      <div className="rn-bet-create">
        <div className="bid-list winning-bid">
          <h6 className="title" style={{ color: "#fff" }}>
            Winning bit
          </h6>
          <div className="top-seller-inner-one">
            <div className="top-seller-wrapper">
              <div className="thumbnail">
                <a href="#">
                  <img
                    src="assets/images/client/client-7.png"
                    alt="Nft_Profile"
                  />
                </a>
              </div>
              <div className="top-seller-content">
                <span
                  className="heighest-bid"
                  style={{ color: "#acacac", fontSize: "14px" }}
                >
                  Heighest bid{" "}
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    Atif aslam
                  </a>
                </span>
                <span className="count-number" style={{ color: "#acacac" }}>
                  0.115wETH
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bid-list left-bid">
          <h6 className="title" style={{ color: "#fff" }}>
            Auction has ended
          </h6>
          <div className="countdown mt--15" data-date="2025-12-09">
            <div className="countdown-container days">
              <span className="countdown-value days-bottom">456</span>
              <span className="countdown-heading days-top">Day</span>
            </div>
            <div className="countdown-container hours">
              <span className="countdown-value hours-bottom">11</span>
              <span className="countdown-heading hours-top">Hr's</span>
            </div>
            <div className="countdown-container minutes">
              <span className="countdown-value minutes-bottom">02</span>
              <span className="countdown-heading minutes-top">Min's</span>
            </div>
            <div className="countdown-container seconds">
              <span className="countdown-value seconds-bottom">54</span>
              <span className="countdown-heading seconds-top">Sec</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- <a className="btn btn-primary-alta mt--30" href="#">Place a Bid</a> --> */}
      <button
        type="button"
        className="btn btn-primary-alta mt--30"
        data-bs-toggle="modal"
        data-bs-target="#placebidModal"
      >
        Place a Bid
      </button>
    </div>
  );
};

export default AuctionCard;
