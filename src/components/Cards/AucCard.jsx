import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getLinkPathToJSON,
  getSystemTime,
  isJsonObject,
  isVideo,
} from "../../lib/utils";

const AucCard = ({ item, hasCountdown = false }) => {
  console.log("......", item);

  const currentUsr = null; //get the current user here
  const [isLiked, setIsLiked] = useState(false);
  const [nftItem, setNftItem] = useState({});
  // const [hideFav, setHideFav] = useState(props?.hideHeart || false);
  const [timeLeft, setTimeLeft] = useState({});
  const [sysTime, setSysTime] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [auctionEnded, setAuctionEnded] = useState(false);
  const [nftName, setNftName] = useState("No Name");
  const [imageUrl, setImageUrl] = useState("");
  const [thumbnailURL, setThumbnailURL] = useState("");
  const curTime = useRef(0);
  const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  const [blurContent, setBlurContent] = useState(false);
  // const [DEMO_NFT_ID] = React.useState(nanoid());
  // const [isHovered, setIsHovered] = useState(!props.isHome);
  // const [isProfile, setIsProfile] = useState(!props.isProfile);

  const fetchJson = useCallback(async () => {
    if (
      nftItem?.metadataURI === undefined ||
      nftItem?.metadataURI === "" ||
      nftItem?.name !== ""
    ) {
      setNftName(nftItem?.name);
      setImageUrl(nftItem?.logoURL);
      setThumbnailURL(nftItem?.thumbnailURL);
      return;
    }
    const response = await fetch(
      getLinkPathToJSON(nftItem?.metadataURI, nftItem?.name)
    );

    // console.log("(&^^(::::::;;tresponse",response.data)

    if (response.data) {
      if (isJsonObject(response.data)) {
        setNftName(JSON.parse(response.data).name);
        setImageUrl(JSON.parse(response.data).image.replace("ipfs://", ""));
      } else {
        setNftName(response.data.name);
        setImageUrl(response.data.image.replace("ipfs://", ""));
      }
    }
  }, [nftItem]);

  useEffect(() => {
    let need2blur = false;
    if (nftItem?.blur) need2blur = true;
    if (nftItem?.explicit?.includes(currentUsr?._id) === true) need2blur = true;
    setBlurContent(need2blur);
    fetchJson();
  }, [nftItem, currentUsr]);

  useEffect(() => {
    // setHideFav(props?.hideHeart);
    // if (props.className) setClassName(props.className);

    if (item) {
      setNftItem(item);
      var isIn = item?.likes?.includes(currentUsr?._id) || false;
      setIsLiked(isIn);
    }

    // if (item?.isSale === 2 && !props.isHome) {
    //   (async () => {
    //     const res = await getSystemTime();
    //     setSysTime(res);
    //   })();
    // }
  }, []);

  return (
    <div
      className="single-slide-product slick-slide"
      style={{ width: "265px" }}
      tabIndex="-1"
      data-slick-index="3"
      aria-hidden="true"
      role="tabpanel"
      id="slick-slide03"
      aria-describedby="slick-slide-control03"
    >
      <div className="product-style-one">
        <div
          className="card-thumbnail"
          style={{
            height: "200px", // Fixed height for thumbnail
            overflow: "hidden",
            position: "relative", // Required for absolutely positioning child
          }}
        >
          <a
            href="nft-details.html"
            tabIndex="-1"
            style={{ display: "block", height: "100%", width: "100%" }}
          >
            <img
              src={nftItem?.thumbnailURL}
              alt="NFT_portfolio"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover", // Cover the entire container
                position: "absolute", // Ensure it covers the container
                top: 0,
                left: 0,
                objectPosition: "top", // Align the image to the top
              }}
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
              tabIndex="-1"
            >
              <img
                src="assets/images/client/client-2.png"
                alt="Nft_Profile"
                style={{ borderRadius: "50%" }}
              />
            </a>
            <a
              href="author"
              className="avatar"
              data-tooltip="Sabbir"
              tabIndex="-1"
            >
              <img
                src="assets/images/client/client-1.png"
                alt="Nft_Profile"
                style={{ borderRadius: "50%" }}
              />
            </a>
            <a
              href="author"
              className="avatar"
              data-tooltip="Falak"
              tabIndex="-1"
            >
              <img
                src="assets/images/client/client-11.png"
                alt="Nft_Profile"
                style={{ borderRadius: "50%" }}
              />
            </a>
            <a className="more-author-text" href="#" tabIndex="-1">
              16+ Place Bit.
            </a>
          </div>
          <div
            className="share-btn share-btn-activation dropdown"
            style={{ display: "inline-block" }}
          >
            <button
              className="icon"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              tabIndex="-1"
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
            >
              <svg
                viewBox="0 0 14 4"
                fill="none"
                width="16"
                height="16"
                style={{ verticalAlign: "middle" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
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
                tabIndex="-1"
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                Share
              </button>
              <button
                type="button"
                className="btn-setting-text report-text"
                data-bs-toggle="modal"
                data-bs-target="#reportModal"
                tabIndex="-1"
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                Report
              </button>
            </div>
          </div>
        </div>
        <a href="nft-details.html" tabIndex="-1">
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
              style={{ verticalAlign: "middle" }}
            >
              <path
                d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                stroke="currentColor"
                strokeWidth="2"
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
