import React from "react";
import CardC from "./Cards/Card";
// NFT_portfolio
// Nft_Profile
const ExploreProduct = () => {
  return (
    <div
      className="rn-product-area rn-section-gapTop"
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
              Explore Product
            </h3>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
            <div
              className="view-more-btn text-start text-sm-end sal-animate"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <button className="discover-filter-button discover-filter-activation btn btn-primary ">
                Filter<i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        </div>

        <div
          className="default-exp-wrapper default-exp-expand"
          style={{ display: "block" }}
        >
          <div className="inner">
            <div className="filter-select-option">
              <label className="filter-leble" style={{ color: "#acacac" }}>
                LIKES
              </label>
              <select style={{ display: "none" }}>
                <option data-display="Most liked">Most liked</option>
                <option value="1">Least liked</option>
              </select>
              <div className="nice-select" tabindex="0">
                <span className="current">Most liked</span>
                <ul className="list">
                  <li
                    data-value="Most liked"
                    data-display="Most liked"
                    className="option selected"
                  >
                    Most liked
                  </li>
                  <li data-value="1" className="option">
                    Least liked
                  </li>
                </ul>
              </div>
            </div>

            <div className="filter-select-option">
              <label className="filter-leble" style={{ color: "#acacac" }}>
                Category
              </label>
              <select style={{ display: "none" }}>
                <option data-display="Category">Category</option>
                <option value="1">Art</option>
                <option value="1">Photograph</option>
                <option value="2">Metaverses</option>
                <option value="4">Potato</option>
                <option value="4">Photos</option>
              </select>
              <div className="nice-select" tabindex="0">
                <span className="current">Category</span>
                <ul className="list">
                  <li
                    data-value="Category"
                    data-display="Category"
                    className="option selected"
                  >
                    Category
                  </li>
                  <li data-value="1" className="option">
                    Art
                  </li>
                  <li data-value="1" className="option">
                    Photograph
                  </li>
                  <li data-value="2" className="option">
                    Metaverses
                  </li>
                  <li data-value="4" className="option">
                    Potato
                  </li>
                  <li data-value="4" className="option">
                    Photos
                  </li>
                </ul>
              </div>
            </div>

            <div className="filter-select-option">
              <label className="filter-leble" style={{ color: "#acacac" }}>
                Collections
              </label>
              <select style={{ display: "none" }}>
                <option data-display="Collections">Collections</option>
                <option value="1">BoredApeYachtClub</option>
                <option value="2">MutantApeYachtClub</option>
                <option value="4">Art Blocks Factory</option>
              </select>
              <div className="nice-select" tabindex="0">
                <span className="current">MutantApeYachtClub</span>
                <ul className="list">
                  <li
                    data-value="Collections"
                    data-display="Collections"
                    className="option focus"
                  >
                    Collections
                  </li>
                  <li data-value="1" className="option">
                    BoredApeYachtClub
                  </li>
                  <li data-value="2" className="option selected">
                    MutantApeYachtClub
                  </li>
                  <li data-value="4" className="option">
                    Art Blocks Factory
                  </li>
                </ul>
              </div>
            </div>

            <div className="filter-select-option">
              <label className="filter-leble" style={{ color: "#acacac" }}>
                Sale type
              </label>
              <select style={{ display: "none" }}>
                <option data-display="Sale type">Sale type</option>
                <option value="1">Fixed price</option>
                <option value="2">Timed auction</option>
                <option value="4">Not for sale</option>
                <option value="4">Open for offers</option>
              </select>
              <div className="nice-select" tabindex="0">
                <span className="current">Sale type</span>
                <ul className="list">
                  <li
                    data-value="Sale type"
                    data-display="Sale type"
                    className="option selected focus"
                  >
                    Sale type
                  </li>
                  <li data-value="1" className="option">
                    Fixed price
                  </li>
                  <li data-value="2" className="option">
                    Timed auction
                  </li>
                  <li data-value="4" className="option">
                    Not for sale
                  </li>
                  <li data-value="4" className="option">
                    Open for offers
                  </li>
                </ul>
              </div>
            </div>

            <div className="filter-select-option">
              <label className="filter-leble" style={{ color: "#acacac" }}>
                Price Range
              </label>
              <div className="price_filter s-filter clear">
                <form action="#" method="GET">
                  <div
                    id="slider-range"
                    className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                  >
                    <div
                      className="ui-slider-range ui-widget-header ui-corner-all"
                      style={{ left: "28.9796%", width: "30.2041%" }}
                    ></div>
                    <span
                      className="ui-slider-handle ui-state-default ui-corner-all"
                      tabindex="0"
                      style={{ left: "28.9796%" }}
                    ></span>
                    <span
                      className="ui-slider-handle ui-state-default ui-corner-all"
                      tabindex="0"
                      style={{ left: "59.1837%" }}
                    ></span>
                  </div>
                  <div className="slider__range--output">
                    <div className="price__output--wrap">
                      <div
                        className="price--output"
                        style={{ color: "#acacac" }}
                      >
                        <span>Price :</span>
                        <input
                          type="text"
                          id="amount"
                          value={"$152 - $300"}
                          readonly=""
                        />
                      </div>
                      <div className="price--filter">
                        <a className="btn btn-primary btn-small" href="#">
                          Filter
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
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

export default ExploreProduct;
