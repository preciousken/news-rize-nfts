import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getLinkPathToJSON,
  getSystemTime,
  isJsonObject,
  isVideo,
} from "../../lib/utils";
import {
  config,
  COREUM_PAYMENT_COINS,
  NETWORK_ITEMS,
  PLATFORM_NETWORKS,
} from "../../config";
import LazyLoadImage from "../lazyImage/LazyImage";

const AucCard = ({ item, hasCountdown = false }) => {
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
      return;
    }
    const response = await fetch(
      getLinkPathToJSON(nftItem?.metadataURI, nftItem?.name)
    );

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
            href="nft-details"
            tabIndex="-1"
            style={{ display: "block", height: "100%", width: "100%" }}
          >
            <LazyLoadImage src={config.ipfsGateway + nftItem?.logoURL} placeholder={nftItem?.thumbnailURL} />
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
                src={"assets/images/icons/core.png"}
                alt="Nft_Profile"
                style={{ borderRadius: "50%" }}
              />
            </a>
          </div>
        </div>
        <a href="nft-details" tabIndex="-1">
          <span className="product-name">
            {nftName?.length > 10 ? nftName?.substring(0, 10) + "..." : nftName}
          </span>
        </a>
        <span className="latest-bid">Highest bid 3/16</span>
        <div className="bid-react-area">
          <div className="last-bid">
            {item?.isSale === 2 ? (
              <div>
                <span>
                  {item.bids && item.bids.length > 0
                    ? item.bids[item.bids.length - 1].price
                      ? item.bids[item.bids.length - 1].price
                      : 0
                    : item?.price}
                </span>
                {item.networkSymbol === PLATFORM_NETWORKS.COREUM
                  ? item.coreumPaymentUnit === COREUM_PAYMENT_COINS.RIZE
                    ? " RIZE"
                    : " CORE"
                  : ""}
              </div>
            ) : item?.isSale === 1 ? (
              <div>
                <span className="last-bid">{item?.price || "0 "}</span>
                {item.networkSymbol === PLATFORM_NETWORKS.COREUM
                  ? item.coreumPaymentUnit === COREUM_PAYMENT_COINS.RIZE
                    ? " RIZE"
                    : " CORE"
                  : ""}
              </div>
            ) : (
              "Not listed"
            )}
          </div>
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
