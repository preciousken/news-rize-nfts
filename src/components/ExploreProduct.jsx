import React from "react";
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
              <button className="discover-filter-button discover-filter-activation btn btn-primary open">
                Filter<i className="feather-filter"></i>
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
              <label className="filter-leble">LIKES</label>
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
              <label className="filter-leble">Category</label>
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
              <label className="filter-leble">Collections</label>
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
              <label className="filter-leble">Sale type</label>
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
              <label className="filter-leble">Price Range</label>
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
                      <div className="price--output">
                        <span>Price :</span>
                        <input type="text" id="amount" readonly="" />
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
          {/* <!-- start single product --> */}
          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            className="col-5 col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
            style={{ width: "280px", height: "420px" }}
          >
            <div className="product-style-one no-overlay">
              <div className="card-thumbnail">
                <a href="product-details.html">
                  <img
                    src="assets/images/portfolio/portfolio-01.jpg"
                    alt="NFT_portfolio"
                  />
                </a>
              </div>
              <div className="product-share-wrapper">
                <div className="profile-share">
                  <a
                    href="author.html"
                    className="avatar"
                    data-tooltip="Jone lee"
                  >
                    <img
                      src="assets/images/client/client-1.png"
                      alt="Nft_Profile"
                    />
                  </a>
                  <a
                    href="author.html"
                    className="avatar"
                    data-tooltip="Jone Due"
                  >
                    <img
                      src="assets/images/client/client-2.png"
                      alt="Nft_Profile"
                    />
                  </a>
                  <a
                    href="author.html"
                    className="avatar"
                    data-tooltip="Nisat Tara"
                  >
                    <img
                      src="assets/images/client/client-3.png"
                      alt="Nft_Profile"
                    />
                  </a>
                  <a className="more-author-text" href="#">
                    9+ Place Bit.
                  </a>
                </div>
                <div className="share-btn share-btn-activation dropdown">
                  <button
                    className="icon"
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

                  <div
                    className="share-btn-setting dropdown-menu dropdown-menu-end"
                    // style=""
                  >
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
              <a href="product-details.html">
                <span className="product-name">Preatent</span>
              </a>
              <span className="latest-bid">Highest bid 1/20</span>
              <div className="bid-react-area">
                <div className="last-bid">0.244wETH</div>
                <div className="react-area">
                  <svg
                    viewBox="0 0 17 16"
                    fill="none"
                    width="16"
                    height="16"
                    className="sc-bdnxRM sc-hKFxyN kBvkOu"
                  >
                    <path
                      d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                      stroke="currentColor"
                      stroke-width="2"
                    ></path>
                  </svg>
                  <span className="number">322</span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end single product -->
            <!-- start single product --> */}
          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            className="col-5 col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
            style={{ width: "280px", height: "420px" }}
          >
            <div className="product-style-one no-overlay">
              <div className="card-thumbnail">
                <a href="product-details.html">
                  <img
                    src="assets/images/portfolio/portfolio-01.jpg"
                    alt="NFT_portfolio"
                  />
                </a>
              </div>
              <div className="product-share-wrapper">
                <div className="profile-share">
                  <a
                    href="author.html"
                    className="avatar"
                    data-tooltip="Jone lee"
                  >
                    <img
                      src="assets/images/client/client-1.png"
                      alt="Nft_Profile"
                    />
                  </a>
                  <a
                    href="author.html"
                    className="avatar"
                    data-tooltip="Jone Due"
                  >
                    <img
                      src="assets/images/client/client-2.png"
                      alt="Nft_Profile"
                    />
                  </a>
                  <a
                    href="author.html"
                    className="avatar"
                    data-tooltip="Nisat Tara"
                  >
                    <img
                      src="assets/images/client/client-3.png"
                      alt="Nft_Profile"
                    />
                  </a>
                  <a className="more-author-text" href="#">
                    9+ Place Bit.
                  </a>
                </div>
                <div className="share-btn share-btn-activation dropdown">
                  <button
                    className="icon"
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

                  <div
                    className="share-btn-setting dropdown-menu dropdown-menu-end"
                    // style=""
                  >
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
              <a href="product-details.html">
                <span className="product-name">Preatent</span>
              </a>
              <span className="latest-bid">Highest bid 1/20</span>
              <div className="bid-react-area">
                <div className="last-bid">0.244wETH</div>
                <div className="react-area">
                  <svg
                    viewBox="0 0 17 16"
                    fill="none"
                    width="16"
                    height="16"
                    className="sc-bdnxRM sc-hKFxyN kBvkOu"
                  >
                    <path
                      d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                      stroke="currentColor"
                      stroke-width="2"
                    ></path>
                  </svg>
                  <span className="number">322</span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end single product -->
            <!-- start single product --> */}
          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            className="col-5 col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
            style={{ width: "280px", height: "420px" }}
          >
            <div className="product-style-one no-overlay">
              <div className="card-thumbnail">
                <a href="product-details.html">
                  <img
                    src="assets/images/portfolio/portfolio-01.jpg"
                    alt="NFT_portfolio"
                  />
                </a>
              </div>
              <div className="product-share-wrapper">
                <div className="profile-share">
                  <a
                    href="author.html"
                    className="avatar"
                    data-tooltip="Jone lee"
                  >
                    <img
                      src="assets/images/client/client-1.png"
                      alt="Nft_Profile"
                    />
                  </a>
                  <a
                    href="author.html"
                    className="avatar"
                    data-tooltip="Jone Due"
                  >
                    <img
                      src="assets/images/client/client-2.png"
                      alt="Nft_Profile"
                    />
                  </a>
                  <a
                    href="author.html"
                    className="avatar"
                    data-tooltip="Nisat Tara"
                  >
                    <img
                      src="assets/images/client/client-3.png"
                      alt="Nft_Profile"
                    />
                  </a>
                  <a className="more-author-text" href="#">
                    9+ Place Bit.
                  </a>
                </div>
                <div className="share-btn share-btn-activation dropdown">
                  <button
                    className="icon"
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

                  <div
                    className="share-btn-setting dropdown-menu dropdown-menu-end"
                    // style=""
                  >
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
              <a href="product-details.html">
                <span className="product-name">Preatent</span>
              </a>
              <span className="latest-bid">Highest bid 1/20</span>
              <div className="bid-react-area">
                <div className="last-bid">0.244wETH</div>
                <div className="react-area">
                  <svg
                    viewBox="0 0 17 16"
                    fill="none"
                    width="16"
                    height="16"
                    className="sc-bdnxRM sc-hKFxyN kBvkOu"
                  >
                    <path
                      d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                      stroke="currentColor"
                      stroke-width="2"
                    ></path>
                  </svg>
                  <span className="number">322</span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end single product -->
            <!-- start single product --> */}
          <div
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
            className="col-5 col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
            style={{ width: "280px", height: "420px" }}
          >
            <div className="product-style-one no-overlay">
              <div className="card-thumbnail">
                <a href="product-details.html">
                  <img
                    src="assets/images/portfolio/portfolio-01.jpg"
                    alt="NFT_portfolio"
                  />
                </a>
              </div>
              <div className="product-share-wrapper">
                <div className="profile-share">
                  <a
                    href="author.html"
                    className="avatar"
                    data-tooltip="Jone lee"
                  >
                    <img
                      src="assets/images/client/client-1.png"
                      alt="Nft_Profile"
                    />
                  </a>
                  <a
                    href="author.html"
                    className="avatar"
                    data-tooltip="Jone Due"
                  >
                    <img
                      src="assets/images/client/client-2.png"
                      alt="Nft_Profile"
                    />
                  </a>
                  <a
                    href="author.html"
                    className="avatar"
                    data-tooltip="Nisat Tara"
                  >
                    <img
                      src="assets/images/client/client-3.png"
                      alt="Nft_Profile"
                    />
                  </a>
                  <a className="more-author-text" href="#">
                    9+ Place Bit.
                  </a>
                </div>
                <div className="share-btn share-btn-activation dropdown">
                  <button
                    className="icon"
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

                  <div
                    className="share-btn-setting dropdown-menu dropdown-menu-end"
                    // style=""
                  >
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
              <a href="product-details.html">
                <span className="product-name">Preatent</span>
              </a>
              <span className="latest-bid">Highest bid 1/20</span>
              <div className="bid-react-area">
                <div className="last-bid">0.244wETH</div>
                <div className="react-area">
                  <svg
                    viewBox="0 0 17 16"
                    fill="none"
                    width="16"
                    height="16"
                    className="sc-bdnxRM sc-hKFxyN kBvkOu"
                  >
                    <path
                      d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                      stroke="currentColor"
                      stroke-width="2"
                    ></path>
                  </svg>
                  <span className="number">322</span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end single product --> */}
        </div>
      </div>
    </div>
  );
};

export default ExploreProduct;
