import React from "react";

const ColCard = () => {
  return (
    <div
      data-sal="slide-up"
      data-sal-delay="150"
      data-sal-duration="800"
      className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 sal-animate"
    >
      <a href="nft-details.html" className="rn-collection-inner-one">
        <div className="collection-wrapper">
          <div className="collection-big-thumbnail">
            <img
              src="assets/images/collection/collection-lg-01.jpg"
              alt="Nft_Profile"
            />
          </div>
          <div className="collenction-small-thumbnail">
            <img
              src="assets/images/collection/collection-sm-01.jpg"
              alt="Nft_Profile"
            />
            <img
              src="assets/images/collection/collection-sm-02.jpg"
              alt="Nft_Profile"
            />
            <img
              src="assets/images/collection/collection-sm-03.jpg"
              alt="Nft_Profile"
            />
          </div>
          <div className="collection-profile">
            <img src="assets/images/client/client-15.png" alt="Nft_Profile" />
          </div>
          <div className="collection-deg">
            <h6 className="title">Cubic Trad</h6>
            <span className="items">27 Items</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ColCard;
