import React from "react";

const TopSellerB = ({ seller }) => {
  //   console.log("....seller", seller.seller);
  //   console.log("....buyer", seller.buyer);
  return (
    <div className="row justify-sm-center g-5 top-seller-list-wrapper">
      {seller?.seller?.map((item) => {
        return (
          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list sal-animate"
          >
            <div className="top-seller-inner-one">
              <div className="top-seller-wrapper">
                <div className="thumbnail varified">
                  <a href="author">
                    <img
                      src="assets/images/client/client-12.png"
                      alt="Nft_Profile"
                    />
                  </a>
                </div>
                <div className="top-seller-content">
                  <a
                    href="author"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <h6 className="name">Brodband</h6>
                  </a>
                  <span
                    className="count-number"
                    style={{ textDecoration: "none", color: "#acacac" }}
                  >
                    $2500,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopSellerB;
