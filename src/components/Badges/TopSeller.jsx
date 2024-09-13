import { config } from "../../config";
import React from "react";
import LazyLoadImage from "../lazyImage/LazyImage";

const TopSellerB = ({ seller }) => {
  console.log("....seller", seller.seller);
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
                    <LazyLoadImage
                      src={config.UPLOAD_URL + "uploads/" + item.avatar}
                      placeholder={config.UPLOAD_URL + "uploads/" + item.avatar}
                    />
                  </a>
                </div>
                <div className="top-seller-content">
                  <a
                    href="author"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <h6 className="name">
                      {item.username.slice(0, 8) + "..."}
                    </h6>
                  </a>
                  <span
                    className="count-number"
                    style={{ textDecoration: "none", color: "#acacac" }}
                  >
                    {item.userBio.slice(0, 12) + "..."}
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
