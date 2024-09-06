import React from "react";

const NewestI = () => {
  return (
    <div
      className="rn-new-items rn-section-gapTop"
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
              style={{ color: "#ffffff",fontSize:"32px",fontFamily:"Roboto",fontWeight:"bolder" }}
            >
              Newest Items
            </h3>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
            <div
              className="view-more-btn text-start text-sm-end sal-animate"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <a
                className="btn-transparent"
                href="#"
                style={{ color: "#acacac", textDecoration: "none" }}
              >
                VIEW ALL
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
                  className="feather feather-arrow-right"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="row g-5">
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
          <div
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-duration="800"
            className="col-5 col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
            style={{ width: "280px", height: "420px" }}
          >
            <div className="product-style-one no-overlay">
              <div className="card-thumbnail">
                <a href="product-details.html">
                  <img
                    src="assets/images/portfolio/portfolio-02.jpg"
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
                      src="assets/images/client/client-4.png"
                      alt="Nft_Profile"
                    />
                  </a>
                  <a
                    href="author.html"
                    className="avatar"
                    data-tooltip="Nira Ara"
                  >
                    <img
                      src="assets/images/client/client-5.png"
                      alt="Nft_Profile"
                    />
                  </a>
                  <a
                    href="author.html"
                    className="avatar"
                    data-tooltip="Fatima Afrafy"
                  >
                    <img
                      src="assets/images/client/client-6.png"
                      alt="Nft_Profile"
                    />
                  </a>
                  <a className="more-author-text" href="#">
                    10+ Place Bit.
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
              <a href="product-details.html">
                <span className="product-name">Diamond Dog</span>
              </a>
              <span className="latest-bid">Highest bid 5/11</span>
              <div className="bid-react-area">
                <div className="last-bid">0.892wETH</div>
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
                  <span className="number">420</span>
                </div>
              </div>
            </div>
          </div>

          <div
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="800"
            className="col-5 col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
            style={{ width: "280px", height: "420px" }}
          >
            <div className="product-style-one no-overlay">
              <div className="card-thumbnail">
                <a href="product-details.html">
                  <img
                    src="assets/images/portfolio/portfolio-04.jpg"
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
                    data-tooltip="Jone lee"
                  >
                    <img
                      src="assets/images/client/client-3.png"
                      alt="Nft_Profile"
                    />
                  </a>
                  <a
                    href="author.html"
                    className="avatar"
                    data-tooltip="Jone lee"
                  >
                    <img
                      src="assets/images/client/client-5.png"
                      alt="Nft_Profile"
                    />
                  </a>
                  <a className="more-author-text" href="#">
                    8+ Place Bit.
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
              <a href="product-details.html">
                <span className="product-name">Morgan11</span>
              </a>
              <span className="latest-bid">Highest bid 3/16</span>
              <div className="bid-react-area">
                <div className="last-bid">0.265wETH</div>
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
                  <span className="number">20</span>
                </div>
              </div>
            </div>
          </div>

          <div
            data-sal="slide-up"
            data-sal-delay="350"
            data-sal-duration="800"
            className="col-5 col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
            style={{ width: "280px", height: "420px" }}
          >
            <div className="product-style-one no-overlay">
              <div className="card-thumbnail">
                <a href="product-details.html">
                  <img
                    src="assets/images/portfolio/portfolio-05.jpg"
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
                      src="assets/images/client/client-2.png"
                      alt="Nft_Profile"
                    />
                  </a>
                  <a
                    href="author.html"
                    className="avatar"
                    data-tooltip="Jone lee"
                  >
                    <img
                      src="assets/images/client/client-7.png"
                      alt="Nft_Profile"
                    />
                  </a>
                  <a
                    href="author.html"
                    className="avatar"
                    data-tooltip="Jone lee"
                  >
                    <img
                      src="assets/images/client/client-9.png"
                      alt="Nft_Profile"
                    />
                  </a>
                  <a className="more-author-text" href="#">
                    15+ Place Bit.
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
              <a href="product-details.html">
                <span className="product-name">mAtal8</span>
              </a>
              <span className="latest-bid">Highest bid 6/50</span>
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
                  <span className="number">205</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewestI;
