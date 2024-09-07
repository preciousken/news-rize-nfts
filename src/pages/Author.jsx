import React from "react";

const Author = () => {
  return (
    <div style={{ background: "#13131d" }}>
      {/* /////////// */}
      <div className="rn-author-bg-area bg_image--9 bg_image ptb--150">
        <div className="container">
          <div className="row"></div>
        </div>
      </div>
      {/* ///////// */}
      <div className="rn-author-area mb--30 mt_dec--120">
        <div className="container">
          <div className="row padding-tb-50 align-items-center d-flex">
            <div className="col-lg-12">
              <div className="author-wrapper">
                <div className="author-inner">
                  <div className="user-thumbnail">
                    <img
                      src="https://rainbowit.net/html/nuron/assets/images/slider/banner-06.png"
                      alt=""
                    />
                  </div>
                  <div className="rn-author-info-content">
                    <h4 className="title">MRS SUNAYRA AHSAN</h4>
                    <a href="#" className="social-follw">
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
                        className="feather feather-twitter"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                      <span className="user-name">it0bsession</span>
                    </a>
                    <div className="follow-area">
                      <div className="follow followers">
                        <span>
                          186k{" "}
                          <a href="#" className="color-body">
                            followers
                          </a>
                        </span>
                      </div>
                      <div className="follow following">
                        <span>
                          156{" "}
                          <a href="#" className="color-body">
                            following
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="author-button-area">
                      <span className="btn at-follw follow-button">
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
                          className="feather feather-user-plus"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="8.5" cy="7" r="4"></circle>
                          <line x1="20" y1="8" x2="20" y2="14"></line>
                          <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>{" "}
                        Follow
                      </span>
                      <span
                        className="btn at-follw share-button"
                        data-bs-toggle="modal"
                        data-bs-target="#shareModal"
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
                          className="feather feather-share-2"
                        >
                          <circle cx="18" cy="5" r="3"></circle>
                          <circle cx="6" cy="12" r="3"></circle>
                          <circle cx="18" cy="19" r="3"></circle>
                          <line
                            x1="8.59"
                            y1="13.51"
                            x2="15.42"
                            y2="17.49"
                          ></line>
                          <line
                            x1="15.41"
                            y1="6.51"
                            x2="8.59"
                            y2="10.49"
                          ></line>
                        </svg>
                      </span>
                      <div className="count at-follw">
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
                              className="btn-setting-text report-text"
                              data-bs-toggle="modal"
                              data-bs-target="#reportModal"
                            >
                              Report
                            </button>
                            <button
                              type="button"
                              className="btn-setting-text report-text"
                            >
                              Claim Owenership
                            </button>
                          </div>
                        </div>
                      </div>
                      <a
                        href="edit-profile.html"
                        className="btn at-follw follow-button edit-btn"
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
                          className="feather feather-edit"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //////// */}
      <div class="rn-authore-profile-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="tab-wrapper-one">
                <nav class="tab-button-one">
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      class="nav-link"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="false"
                    >
                      On Sale
                    </button>
                    <button
                      class="nav-link active"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="true"
                    >
                      Owned
                    </button>
                    <button
                      class="nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Created
                    </button>
                    <button
                      class="nav-link"
                      id="nav-liked-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-liked"
                      type="button"
                      role="tab"
                      aria-controls="nav-liked"
                      aria-selected="false"
                    >
                      Liked
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div class="tab-content rn-bid-content" id="nav-tabContent">
            <div
              class="tab-pane row g-5 d-flex fade"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              {/* <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-09.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Sadikur Ali"
                      >
                        <img
                          src="assets/images/client/client-2.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Ali">
                        <img
                          src="assets/images/client/client-3.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Sadikur"
                      >
                        <img
                          src="assets/images/client/client-4.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        9+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">BadBo66</span>
                  </a>
                  <span class="latest-bid">Highest bid 6/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.234wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-10.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Updane Jack"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Jack">
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Updane"
                      >
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        10+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Preatent</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-06.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Rabbanin"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Sadik Rabbanin"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Sadika"
                      >
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        10+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">ModaL6</span>
                  </a>
                  <span class="latest-bid">Highest bid 2/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.344wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-04.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Saladin"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="David Saladin"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="David">
                        <img
                          src="assets/images/client/client-9.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        21+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Tabs38</span>
                  </a>
                  <span class="latest-bid">Highest bid 3/30</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.544wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">422</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-05.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Jope Baiden"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Jope">
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Baiden"
                      >
                        <img
                          src="assets/images/client/client-9.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        12+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">TopBad</span>
                  </a>
                  <span class="latest-bid">Highest bid 6/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">124</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-06.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Tawhid Sabir"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Tawhid"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Sabir">
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        5+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">NameStroam</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">532</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-07.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Total Mars"
                      >
                        <img
                          src="assets/images/client/client-6.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Total">
                        <img
                          src="assets/images/client/client-5.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Mars">
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        9+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Scourd</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-05.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="David Worner"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Worner"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="David">
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        16+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Resord</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.264wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">622</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-09.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Sobuj Shaikh"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Sobuj">
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Shaikh"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        22+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Jackpot</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-10.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="MArk Jone"
                      >
                        <img
                          src="assets/images/client/client-4.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="MArk">
                        <img
                          src="assets/images/client/client-5.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Jone">
                        <img
                          src="assets/images/client/client-8.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        13+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Xtreames</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">922</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product --> */}
            </div>
            <div
              class="tab-pane row g-5 d-flex fade show active"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              {/* <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-06.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Tawhid Sabir"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Tawhid"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Sabir">
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        5+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">NameStroam</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">532</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-07.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Total Mars"
                      >
                        <img
                          src="assets/images/client/client-6.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Total">
                        <img
                          src="assets/images/client/client-5.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Mars">
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        9+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Scourd</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-05.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="David Worner"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Worner"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="David">
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        16+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Resord</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.264wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">622</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-09.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Sobuj Shaikh"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Sobuj">
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Shaikh"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        22+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Jackpot</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-10.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="MArk Jone"
                      >
                        <img
                          src="assets/images/client/client-4.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="MArk">
                        <img
                          src="assets/images/client/client-5.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Jone">
                        <img
                          src="assets/images/client/client-8.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        13+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Xtreames</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">922</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-06.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Tawhid Sabir"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Tawhid"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Sabir">
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        5+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">NameStroam</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">532</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-07.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Total Mars"
                      >
                        <img
                          src="assets/images/client/client-6.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Total">
                        <img
                          src="assets/images/client/client-5.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Mars">
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        9+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Scourd</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-05.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="David Worner"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Worner"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="David">
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        16+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Resord</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.264wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">622</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-09.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Sobuj Shaikh"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Sobuj">
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Shaikh"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        22+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Jackpot</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-10.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="MArk Jone"
                      >
                        <img
                          src="assets/images/client/client-4.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="MArk">
                        <img
                          src="assets/images/client/client-5.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Jone">
                        <img
                          src="assets/images/client/client-8.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        13+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Xtreames</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">922</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product --> */}
            </div>
            <div
              class="tab-pane row g-5 d-flex fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              {/* <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-09.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Sadikur Ali"
                      >
                        <img
                          src="assets/images/client/client-2.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Ali">
                        <img
                          src="assets/images/client/client-3.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Sadikur"
                      >
                        <img
                          src="assets/images/client/client-4.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        9+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">BadBo66</span>
                  </a>
                  <span class="latest-bid">Highest bid 6/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.234wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-10.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Updane Jack"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Jack">
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Updane"
                      >
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        10+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Preatent</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-06.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Rabbanin"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Sadik Rabbanin"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Sadika"
                      >
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        10+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">ModaL6</span>
                  </a>
                  <span class="latest-bid">Highest bid 2/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.344wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-04.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Saladin"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="David Saladin"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="David">
                        <img
                          src="assets/images/client/client-9.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        21+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Tabs38</span>
                  </a>
                  <span class="latest-bid">Highest bid 3/30</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.544wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">422</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-05.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Jope Baiden"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Jope">
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Baiden"
                      >
                        <img
                          src="assets/images/client/client-9.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        12+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">TopBad</span>
                  </a>
                  <span class="latest-bid">Highest bid 6/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">124</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-06.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Tawhid Sabir"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Tawhid"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Sabir">
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        5+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">NameStroam</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">532</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-07.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Total Mars"
                      >
                        <img
                          src="assets/images/client/client-6.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Total">
                        <img
                          src="assets/images/client/client-5.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Mars">
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        9+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Scourd</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-05.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="David Worner"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Worner"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="David">
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        16+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Resord</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.264wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">622</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-09.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Sobuj Shaikh"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Sobuj">
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Shaikh"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        22+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Jackpot</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-10.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="MArk Jone"
                      >
                        <img
                          src="assets/images/client/client-4.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="MArk">
                        <img
                          src="assets/images/client/client-5.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Jone">
                        <img
                          src="assets/images/client/client-8.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        13+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Xtreames</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">922</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product --> */}
            </div>
            <div
              class="tab-pane row g-5 d-flex fade"
              id="nav-liked"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              {/* <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-06.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Tawhid Sabir"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Tawhid"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Sabir">
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        5+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">NameStroam</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">532</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-07.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Total Mars"
                      >
                        <img
                          src="assets/images/client/client-6.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Total">
                        <img
                          src="assets/images/client/client-5.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Mars">
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        9+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Scourd</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-05.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="David Worner"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Worner"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="David">
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        16+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Resord</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.264wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">622</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-09.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Sobuj Shaikh"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Sobuj">
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Shaikh"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        22+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Jackpot</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-10.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="MArk Jone"
                      >
                        <img
                          src="assets/images/client/client-4.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="MArk">
                        <img
                          src="assets/images/client/client-5.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Jone">
                        <img
                          src="assets/images/client/client-8.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        13+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Xtreames</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">922</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-06.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Tawhid Sabir"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Tawhid"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Sabir">
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        5+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">NameStroam</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">532</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-07.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Total Mars"
                      >
                        <img
                          src="assets/images/client/client-6.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Total">
                        <img
                          src="assets/images/client/client-5.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Mars">
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        9+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Scourd</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-05.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="David Worner"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Worner"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="David">
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        16+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Resord</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.264wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">622</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-09.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Sobuj Shaikh"
                      >
                        <img
                          src="assets/images/client/client-10.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Sobuj">
                        <img
                          src="assets/images/client/client-11.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="Shaikh"
                      >
                        <img
                          src="assets/images/client/client-1.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        22+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Jackpot</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">322</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product -->
                    <!-- start single product --> */}
              <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="product-style-one no-overlay with-placeBid">
                  <div class="card-thumbnail">
                    <a href="product-details.html">
                      <img
                        src="assets/images/portfolio/portfolio-10.jpg"
                        alt="NFT_portfolio"
                      />
                    </a>
                    <a href="product-details.html" class="btn btn-primary">
                      Place Bid
                    </a>
                  </div>
                  <div class="product-share-wrapper">
                    <div class="profile-share">
                      <a
                        href="author.html"
                        class="avatar"
                        data-tooltip="MArk Jone"
                      >
                        <img
                          src="assets/images/client/client-4.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="MArk">
                        <img
                          src="assets/images/client/client-5.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a href="author.html" class="avatar" data-tooltip="Jone">
                        <img
                          src="assets/images/client/client-8.png"
                          alt="NFT_Profile"
                        />
                      </a>
                      <a class="more-author-text" href="#">
                        13+ Place Bit.
                      </a>
                    </div>
                    <div class="share-btn share-btn-activation dropdown">
                      <button
                        class="icon"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          viewBox="0 0 14 4"
                          fill="none"
                          width="16"
                          height="16"
                          class="sc-bdnxRM sc-hKFxyN hOiKLt"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>

                      <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                        <button
                          type="button"
                          class="btn-setting-text share-text"
                          data-bs-toggle="modal"
                          data-bs-target="#shareModal"
                        >
                          Share
                        </button>
                        <button
                          type="button"
                          class="btn-setting-text report-text"
                          data-bs-toggle="modal"
                          data-bs-target="#reportModal"
                        >
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="product-details.html">
                    <span class="product-name">Xtreames</span>
                  </a>
                  <span class="latest-bid">Highest bid 1/20</span>
                  <div class="bid-react-area">
                    <div class="last-bid">0.244wETH</div>
                    <div class="react-area">
                      <svg
                        viewBox="0 0 17 16"
                        fill="none"
                        width="16"
                        height="16"
                        class="sc-bdnxRM sc-hKFxyN kBvkOu"
                      >
                        <path
                          d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <span class="number">922</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end single product --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
