import React from "react";

const TopSeller = () => {
  return (
    <div
      className="rn-top-top-seller-area nice-selector-transparent rn-section-gapTop"
      style={{ background: "#13131d" }}
    >
      <div className="container">
        <div className="row  mb--30">
          <div className="col-12 justify-sm-center d-flex">
            <h3
              className="title sal-animate"
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
              Top Seller in
            </h3>
            <select style={{ display: "none" }}>
              <option data-display="1 day"> 1 day</option>
              <option value="1">7 Day's</option>
              <option value="2">15 Day's</option>
              <option value="4">30 Day's</option>
            </select>
            <div className="nice-select" tabindex="0">
              <span className="current">1 day</span>
              <ul className="list">
                <li
                  data-value="1 day"
                  data-display="1 day"
                  className="option selected focus"
                >
                  {" "}
                  1 day
                </li>
                <li data-value="1" className="option">
                  7 Day's
                </li>
                <li data-value="2" className="option">
                  15 Day's
                </li>
                <li data-value="4" className="option">
                  30 Day's
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row justify-sm-center g-5 top-seller-list-wrapper">
          {/* <!-- start single top-seller --> */}
          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list sal-animate"
          >
            <div className="top-seller-inner-one">
              <div className="top-seller-wrapper">
                <div className="thumbnail varified">
                  <a href="author.html">
                    <img
                      src="assets/images/client/client-12.png"
                      alt="Nft_Profile"
                    />
                  </a>
                </div>
                <div className="top-seller-content">
                  <a href="author.html">
                    <h6 className="name">Brodband</h6>
                  </a>
                  <span className="count-number">$2500,000</span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End single top-seller --> */}

          {/* <!-- start single top-seller --> */}
          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list sal-animate"
          >
            <div className="top-seller-inner-one">
              <div className="top-seller-wrapper">
                <div className="thumbnail">
                  <a href="author.html">
                    <img
                      src="assets/images/client/client-2.png"
                      alt="Nft_Profile"
                    />
                  </a>
                </div>
                <div className="top-seller-content">
                  <a href="author.html">
                    <h6 className="name">Ms. Parkline</h6>
                  </a>
                  <span className="count-number">$2300,000</span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End single top-seller --> */}

          {/* <!-- start single top-seller --> */}
          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list sal-animate"
          >
            <div className="top-seller-inner-one">
              <div className="top-seller-wrapper">
                <div className="thumbnail">
                  <a href="author.html">
                    <img
                      src="assets/images/client/client-3.png"
                      alt="Nft_Profile"
                    />
                  </a>
                </div>
                <div className="top-seller-content">
                  <a href="author.html">
                    <h6 className="name">Methods</h6>
                  </a>
                  <span className="count-number">$2100,000</span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End single top-seller --> */}

          {/* <!-- start single top-seller --> */}
          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list sal-animate"
          >
            <div className="top-seller-inner-one">
              <div className="top-seller-wrapper">
                <div className="thumbnail varified">
                  <a href="author.html">
                    <img
                      src="assets/images/client/client-4.png"
                      alt="Nft_Profile"
                    />
                  </a>
                </div>
                <div className="top-seller-content">
                  <a href="author.html">
                    <h6 className="name">Jone sone</h6>
                  </a>
                  <span className="count-number">$2000,000</span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End single top-seller --> */}

          {/* <!-- start single top-seller --> */}
          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list sal-animate"
          >
            <div className="top-seller-inner-one">
              <div className="top-seller-wrapper">
                <div className="thumbnail">
                  <a href="author.html">
                    <img
                      src="assets/images/client/client-5.png"
                      alt="Nft_Profile"
                    />
                  </a>
                </div>
                <div className="top-seller-content">
                  <a href="author.html">
                    <h6 className="name">Siddhart</h6>
                  </a>
                  <span className="count-number">$200,000</span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End single top-seller --> */}

          {/* <!-- start single top-seller --> */}
          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list sal-animate"
          >
            <div className="top-seller-inner-one">
              <div className="top-seller-wrapper">
                <div className="thumbnail varified">
                  <a href="author.html">
                    <img
                      src="assets/images/client/client-6.png"
                      alt="Nft_Profile"
                    />
                  </a>
                </div>
                <div className="top-seller-content">
                  <a href="author.html">
                    <h6 className="name">Sobuj Mk</h6>
                  </a>
                  <span className="count-number">$2000,000</span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End single top-seller --> */}

          {/* <!-- start single top-seller --> */}
          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list sal-animate"
          >
            <div className="top-seller-inner-one">
              <div className="top-seller-wrapper">
                <div className="thumbnail varified">
                  <a href="author.html">
                    <img
                      src="assets/images/client/client-7.png"
                      alt="Nft_Profile"
                    />
                  </a>
                </div>
                <div className="top-seller-content">
                  <a href="author.html">
                    <h6 className="name">Trodband</h6>
                  </a>
                  <span className="count-number">$2500,000</span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End single top-seller --> */}

          {/* <!-- start single top-seller --> */}
          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list sal-animate"
          >
            <div className="top-seller-inner-one">
              <div className="top-seller-wrapper">
                <div className="thumbnail">
                  <a href="author.html">
                    <img
                      src="assets/images/client/client-8.png"
                      alt="Nft_Profile"
                    />
                  </a>
                </div>
                <div className="top-seller-content">
                  <a href="author.html">
                    <h6 className="name">Yash</h6>
                  </a>
                  <span className="count-number">$2500,000</span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End single top-seller --> */}

          {/* <!-- start single top-seller --> */}
          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list sal-animate"
          >
            <div className="top-seller-inner-one">
              <div className="top-seller-wrapper">
                <div className="thumbnail">
                  <a href="author.html">
                    <img
                      src="assets/images/client/client-9.png"
                      alt="Nft_Profile"
                    />
                  </a>
                </div>
                <div className="top-seller-content">
                  <a href="author.html">
                    <h6 className="name">YASHKIB</h6>
                  </a>
                  <span className="count-number">$2500,000</span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End single top-seller --> */}

          {/* <!-- start single top-seller --> */}
          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list sal-animate"
          >
            <div className="top-seller-inner-one">
              <div className="top-seller-wrapper">
                <div className="thumbnail varified">
                  <a href="author.html">
                    <img
                      src="assets/images/client/client-10.png"
                      alt="Nft_Profile"
                    />
                  </a>
                </div>
                <div className="top-seller-content">
                  <a href="author.html">
                    <h6 className="name">Brodband</h6>
                  </a>
                  <span className="count-number">$2500,000</span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End single top-seller --> */}
        </div>
      </div>
    </div>
  );
};

export default TopSeller;
