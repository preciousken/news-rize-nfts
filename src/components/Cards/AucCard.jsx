import React from "react";

const AucCard = ({ hasCountdown = false }) => {
  return (
    <div
      className="single-slide-product slick-slide"
      style={{ width: "265px" }}
      tabindex="-1"
      data-slick-index="3"
      aria-hidden="true"
      role="tabpanel"
      id="slick-slide03"
      aria-describedby="slick-slide-control03"
    >
      <div className="product-style-one">
        <div className="card-thumbnail">
          <a href="nft-details.html" tabindex="-1">
            <img
              src="assets/images/portfolio/portfolio-04.jpg"
              alt="NFT_portfolio"
            />
          </a>
          {hasCountdown && (
            <div className="countdown" data-date="2024-10-08">
              <div className="countdown-container days">
                <span className="countdown-value days-bottom">32</span>
                <span className="countdown-heading days-top">Day</span>
              </div>
              <div className="countdown-container hours">
                <span className="countdown-value hours-bottom">04</span>
                <span className="countdown-heading hours-top">Hr's</span>
              </div>
              <div className="countdown-container minutes">
                <span className="countdown-value minutes-bottom">11</span>
                <span className="countdown-heading minutes-top">Min's</span>
              </div>
              <div className="countdown-container seconds">
                <span className="countdown-value seconds-bottom">56</span>
                <span className="countdown-heading seconds-top">Sec</span>
              </div>
            </div>
          )}
        </div>
        <div className="product-share-wrapper">
          <div className="profile-share">
            <a
              href="author"
              className="avatar"
              data-tooltip="Falak Sabbir"
              tabindex="-1"
            >
              <img src="assets/images/client/client-2.png" alt="Nft_Profile" />
            </a>
            <a
              href="author"
              className="avatar"
              data-tooltip="Sabbir"
              tabindex="-1"
            >
              <img src="assets/images/client/client-1.png" alt="Nft_Profile" />
            </a>
            <a
              href="author"
              className="avatar"
              data-tooltip="Falak"
              tabindex="-1"
            >
              <img src="assets/images/client/client-11.png" alt="Nft_Profile" />
            </a>
            <a className="more-author-text" href="#" tabindex="-1">
              16+ Place Bit.
            </a>
          </div>
          <div className="share-btn share-btn-activation dropdown">
            <button
              className="icon"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              tabindex="-1"
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
                tabindex="-1"
              >
                Share
              </button>
              <button
                type="button"
                className="btn-setting-text report-text"
                data-bs-toggle="modal"
                data-bs-target="#reportModal"
                tabindex="-1"
              >
                Report
              </button>
            </div>
          </div>
        </div>
        <a href="nft-details.html" tabindex="-1">
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
  );
};

export default AucCard;
