import React from "react";
import SubNav from "../components/SubNav";
import CardC from "../components/Cards/Card";
import Filter from "../components/Filter";

const ProductDetails = () => {
  return (
    <div style={{ background: "#13131d" }}>
      <SubNav title="Product Details" />
      <div className="product-details-area rn-section-gapTop">
        <div className="container">
          <div className="row g-5">
            {/* <!-- product image area --> */}

            <div className="col-lg-7 col-md-12 col-sm-12">
              <div
                className="product-tab-wrapper rbt-sticky-top-adjust"
                style={{ top: "100px" }}
              >
                <div className="pd-tab-inner">
                  <div
                    className="tab-content rn-pd-content"
                    id="v-pills-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <div className="rn-pd-thumbnail">
                        <img
                          src="https://rainbowit.net/html/nuron/assets/images/portfolio/lg/portfolio-01.jpg"
                          alt="Nft_Profile"
                        />
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <div className="rn-pd-thumbnail">
                        <img
                          src="assets/images/portfolio/lg/portfolio-02.jpg"
                          alt="Nft_Profile"
                        />
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      <div className="rn-pd-thumbnail">
                        <img
                          src="assets/images/portfolio/lg/portfolio-03.jpg"
                          alt="Nft_Profile"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- product image area end --> */}

            <div className="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
              <div className="rn-pd-content-area">
                <div className="pd-title-area">
                  <h4
                    className="title"
                    style={{ color: "30px", color: "#ffffff" }}
                  >
                    The Amazing Game
                  </h4>
                  <div className="pd-react-area">
                    <div className="heart-count">
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
                        className="feather feather-heart"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                      <span>33</span>
                    </div>
                    <div className="count">
                      <div className="share-btn share-btn-activation dropdown">
                        <button
                          className="icon"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <svg
                            viewBox="0 0 14 4"
                            fill="none"
                            width="16"
                            height="16"
                            className="sc-bdnxRM sc-hKFxyN hOiKLt"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>

                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                          <button
                            type="button"
                            className="btn-setting-text share-text"
                            data-bs-toggle="modal"
                            data-bs-target="#shareModal"
                          >
                            Share
                          </button>
                          <button
                            type="button"
                            className="btn-setting-text report-text"
                            data-bs-toggle="modal"
                            data-bs-target="#reportModal"
                          >
                            Report
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="bid" style={{ color: "#acacac" }}>
                  Height bid <span className="price">0.11wETH</span>
                </span>
                <h6 className="title-name" style={{ color: "#acacac" }}>
                  #22 Portal , Info bellow
                </h6>
                <div className="catagory-collection">
                  <div className="catagory">
                    <span>
                      Catagory <span className="color-body">10% royalties</span>
                    </span>
                    <div className="top-seller-inner-one">
                      <div className="top-seller-wrapper">
                        <div className="thumbnail">
                          <a href="#">
                            <img
                              src="assets/images/client/client-1.png"
                              alt="Nft_Profile"
                            />
                          </a>
                        </div>
                        <div className="top-seller-content">
                          <a
                            href="#"
                            style={{ textDecoration: "none", color: "#fff" }}
                          >
                            <h6 className="name">Brodband</h6>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="collection">
                    <span style={{ fontSize: "14px" }}>Collections</span>
                    <div className="top-seller-inner-one">
                      <div className="top-seller-wrapper">
                        <div className="thumbnail">
                          <a href="#">
                            <img
                              src="assets/images/client/client-2.png"
                              alt="Nft_Profile"
                            />
                          </a>
                        </div>
                        <div className="top-seller-content">
                          <a
                            href="#"
                            style={{ textDecoration: "none", color: "#fff" }}
                          >
                            <h6 className="name">Brodband</h6>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <a className="btn btn-primary-alta" href="#">
                  Unlockable content included
                </a> */}
                <div className="rn-bid-details">
                  <div className="tab-wrapper-one">
                    <nav className="tab-button-one">
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                          className="nav-link"
                          id="nav-home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-home"
                          type="button"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="false"
                        >
                          Bids
                        </button>
                        <button
                          className="nav-link active"
                          id="nav-profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-profile"
                          type="button"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="true"
                        >
                          Details
                        </button>
                        <button
                          className="nav-link"
                          id="nav-contact-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-contact"
                          type="button"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                        >
                          History
                        </button>
                      </div>
                    </nav>
                    <div
                      className="tab-content rn-bid-content"
                      id="nav-tabContent"
                    >
                      <div
                        className="tab-pane fade"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >
                        {/* <!-- single creator --> */}
                        <div className="top-seller-inner-one">
                          <div className="top-seller-wrapper">
                            <div className="thumbnail">
                              <a href="#">
                                <img
                                  src="assets/images/client/client-3.png"
                                  alt="Nft_Profile"
                                />
                              </a>
                            </div>
                            <div className="top-seller-content">
                              <span
                                style={{
                                  textDecoration: "none",
                                  color: "#acacac",
                                }}
                              >
                                0.11wETH by{" "}
                                <a
                                  href="#"
                                  style={{
                                    textDecoration: "none",
                                    color: "#fff",
                                  }}
                                >
                                  Allen Waltker
                                </a>
                              </span>
                              <span
                                className="count-number"
                                style={{
                                  textDecoration: "none",
                                  color: "#acacac",
                                }}
                              >
                                1 hours ago
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="top-seller-inner-one">
                          <div className="top-seller-wrapper">
                            <div className="thumbnail">
                              <a href="#">
                                <img
                                  src="assets/images/client/client-3.png"
                                  alt="Nft_Profile"
                                />
                              </a>
                            </div>
                            <div className="top-seller-content">
                              <span
                                style={{
                                  textDecoration: "none",
                                  color: "#acacac",
                                }}
                              >
                                0.11wETH by{" "}
                                <a
                                  href="#"
                                  style={{
                                    textDecoration: "none",
                                    color: "#fff",
                                  }}
                                >
                                  Allen Waltker
                                </a>
                              </span>
                              <span
                                className="count-number"
                                style={{
                                  textDecoration: "none",
                                  color: "#acacac",
                                }}
                              >
                                1 hours ago
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <!-- single creator --> */}
                      </div>
                      <div
                        className="tab-pane fade show active"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                      >
                        {/* <!-- single --> */}
                        <div className="rn-pd-bd-wrapper">
                          <div className="top-seller-inner-one">
                            <h6 className="name-title">Owner</h6>
                            <div className="top-seller-wrapper">
                              <div className="thumbnail">
                                <a
                                  href="#"
                                  style={{
                                    textDecoration: "none",
                                    color: "#fff",
                                  }}
                                >
                                  <img
                                    src="assets/images/client/client-1.png"
                                    alt="Nft_Profile"
                                  />
                                </a>
                              </div>
                              <div className="top-seller-content">
                                <a
                                  href="#"
                                  style={{
                                    textDecoration: "none",
                                    color: "#fff",
                                  }}
                                >
                                  <h6 className="name">Brodband</h6>
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* <!-- single --> */}
                          <div className="rn-pd-sm-property-wrapper">
                            <h6 className="pd-property-title">Property</h6>
                            <div className="property-wrapper">
                              {/* <!-- single property --> */}
                              <div className="pd-property-inner">
                                <span className="color-body type">
                                  HYPE TYPE
                                </span>
                                <span className="color-white value">
                                  CALM AF (STILL)
                                </span>
                              </div>
                              {/* <!-- single property End --> */}
                              {/* <!-- single property --> */}
                              <div className="pd-property-inner">
                                <span className="color-body type">
                                  BASTARDNESS
                                </span>
                                <span className="color-white value">
                                  C00LIO BASTARD
                                </span>
                              </div>
                              {/* <!-- single property End --> */}
                              {/* <!-- single property --> */}
                              <div className="pd-property-inner">
                                <span className="color-body type">TYPE</span>
                                <span className="color-white value">APE</span>
                              </div>
                              {/* <!-- single property End --> */}
                              {/* <!-- single property --> */}
                              <div className="pd-property-inner">
                                <span className="color-body type">
                                  ASTARDNESS
                                </span>
                                <span className="color-white value">
                                  BASTARD
                                </span>
                              </div>
                              {/* <!-- single property End --> */}
                              {/* <!-- single property --> */}
                              <div className="pd-property-inner">
                                <span className="color-body type">
                                  BAD HABIT(S)
                                </span>
                                <span className="color-white value">PIPE</span>
                              </div>
                              {/* <!-- single property End --> */}
                              {/* <!-- single property --> */}
                              <div className="pd-property-inner">
                                <span className="color-body type">BID</span>
                                <span className="color-white value">
                                  BPEYti
                                </span>
                              </div>
                              {/* <!-- single property End --> */}
                              {/* <!-- single property --> */}
                              <div className="pd-property-inner">
                                <span className="color-body type">
                                  ASTRAGENAKAR
                                </span>
                                <span className="color-white value">
                                  BASTARD
                                </span>
                              </div>
                              {/* <!-- single property End --> */}
                              {/* <!-- single property --> */}
                              <div className="pd-property-inner">
                                <span className="color-body type">CITY</span>
                                <span className="color-white value">TOKYO</span>
                              </div>
                              {/* <!-- single property End --> */}
                            </div>
                          </div>
                          {/* <!-- single --> */}
                          {/* <!-- single --> */}
                          <div className="rn-pd-sm-property-wrapper">
                            <h6 className="pd-property-title">Catagory</h6>
                            <div className="catagory-wrapper">
                              {/* <!-- single property --> */}
                              <div className="pd-property-inner">
                                <span className="color-body type">ZARY</span>
                                <span className="color-white value">APP</span>
                              </div>
                              {/* <!-- single property End --> */}
                              {/* <!-- single property --> */}
                              <div className="pd-property-inner">
                                <span className="color-body type">
                                  SOMALIAN
                                </span>
                                <span className="color-white value">
                                  TRIBUTE
                                </span>
                              </div>
                              {/* <!-- single property End --> */}
                              {/* <!-- single property --> */}
                              <div className="pd-property-inner">
                                <span className="color-body type">TUNA</span>
                                <span className="color-white value">PIPE</span>
                              </div>
                              {/* <!-- single property End --> */}
                              {/* <!-- single property --> */}
                              <div className="pd-property-inner">
                                <span className="color-body type">BID</span>
                                <span className="color-white value">
                                  BPEYti
                                </span>
                              </div>
                              {/* <!-- single property End --> */}
                              {/* <!-- single property --> */}
                              <div className="pd-property-inner">
                                <span className="color-body type">
                                  ASTRAGENAKAR
                                </span>
                                <span className="color-white value">
                                  BASTARD
                                </span>
                              </div>
                              {/* <!-- single property End --> */}
                              {/* <!-- single property --> */}
                              <div className="pd-property-inner">
                                <span className="color-body type">CITY</span>
                                <span className="color-white value">TOKYO</span>
                              </div>
                              {/* <!-- single property End --> */}
                            </div>
                          </div>
                          {/* <!-- single --> */}
                        </div>
                        {/* <!-- single --> */}
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-contact"
                        role="tabpanel"
                        aria-labelledby="nav-contact-tab"
                      >
                        {/* <!-- single creator --> */}
                        <div className="top-seller-inner-one">
                          <div className="top-seller-wrapper">
                            <div className="thumbnail">
                              <a href="#">
                                <img
                                  src="assets/images/client/client-3.png"
                                  alt="Nft_Profile"
                                />
                              </a>
                            </div>
                            <div className="top-seller-content">
                              <span
                                style={{
                                  textDecoration: "none",
                                  color: "#acacac",
                                }}
                              >
                                0.11wETH by{" "}
                                <a
                                  href="#"
                                  style={{
                                    textDecoration: "none",
                                    color: "#fff",
                                  }}
                                >
                                  Allen Waltker
                                </a>
                              </span>
                              <span
                                className="count-number"
                                style={{
                                  textDecoration: "none",
                                  color: "#acacac",
                                }}
                              >
                                1 hours ago
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="top-seller-inner-one">
                          <div className="top-seller-wrapper">
                            <div className="thumbnail">
                              <a href="#">
                                <img
                                  src="assets/images/client/client-3.png"
                                  alt="Nft_Profile"
                                />
                              </a>
                            </div>
                            <div className="top-seller-content">
                              <span
                                style={{
                                  textDecoration: "none",
                                  color: "#acacac",
                                }}
                              >
                                0.11wETH by{" "}
                                <a
                                  href="#"
                                  style={{
                                    textDecoration: "none",
                                    color: "#fff",
                                  }}
                                >
                                  Allen Waltker
                                </a>
                              </span>
                              <span
                                className="count-number"
                                style={{
                                  textDecoration: "none",
                                  color: "#acacac",
                                }}
                              >
                                1 hours ago
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <!-- single creator --> */}
                      </div>
                    </div>
                  </div>
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
                              <span
                                className="count-number"
                                style={{ color: "#acacac" }}
                              >
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
                        <div
                          className="countdown mt--15"
                          data-date="2025-12-09"
                        >
                          <div className="countdown-container days">
                            <span className="countdown-value days-bottom">
                              456
                            </span>
                            <span className="countdown-heading days-top">
                              Day
                            </span>
                          </div>
                          <div className="countdown-container hours">
                            <span className="countdown-value hours-bottom">
                              11
                            </span>
                            <span className="countdown-heading hours-top">
                              Hr's
                            </span>
                          </div>
                          <div className="countdown-container minutes">
                            <span className="countdown-value minutes-bottom">
                              02
                            </span>
                            <span className="countdown-heading minutes-top">
                              Min's
                            </span>
                          </div>
                          <div className="countdown-container seconds">
                            <span className="countdown-value seconds-bottom">
                              54
                            </span>
                            <span className="countdown-heading seconds-top">
                              Sec
                            </span>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Filter />

        <div className="row g-5">
          <CardC />
          <CardC />
          <CardC />
          <CardC />
          <CardC />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
