import React, { FC, useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
// import Avatar from "components/StyleComponent/Avatar";
// import NcImage from "components/NcComponent/NcImage";
import { AiOutlineMessage } from "react-icons/ai";
// import CartButton from "../Button/CartButton";
// import LikeButton from "../Button/LikeButton";
// import musicWave from "images/musicWave.png";
// import Prices from "../StyleComponent/Prices";
import { ClockIcon } from "@heroicons/react/outline";
// import NetworkLogo from "../StyleComponent/NetworkLogo";
import { selectCurrentUser } from "../../reducers/auth.reducers";
// import Tooltip from "@mui/material/Tooltip";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { isEmpty } from "../../lib/methods";
import axios from "axios";
import { toast } from "react-toastify";
import { config, PLATFORM_NETWORKS, FILE_TYPE, COREUM_PAYMENT_COINS } from "../../config.js";
// import { NFT_EFFECT } from "../StyleComponent/EffectListBox";
// import TileEffect from "../StyleComponent/TileEffect";
import {
  getLinkPathToJSON,
  getSystemTime,
  isJsonObject,
  isVideo,
} from "../../lib/utils";
// import SelectableCard from "./SelectableCard";
import {
  changeBulkSelectedArray,
  selectBulkOpsMode,
  selectBulkSelectedArray,
} from "../../reducers/collection.reducers";
// import {
//   GenericCard,
//   plusPlayCount,
//   renderListenButtonDefault,
// } from "./CardGeneral";
// import ThreeDForNft from "./ThreeDForNft";
import { nanoid } from "@reduxjs/toolkit";
import LazyLoadImage from "../lazyImage/LazyImage";
// import VideoForPreview from "./VideoForPreview";
// import ButtonPlayMusicRunningContainer from "containers/ButtonPlayMusicRunningContainer";
// import AudioForNft from "./AudioForNft";
// import RemainingTimeNftCard from "./RemainingTimeNftCard";
// import VideoForNft from "./VideoForNft";

const ColLC = ({ item, key, selectable }) => {
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

  console.log(config.ipfsGateway + nftItem?.logoURL)

  return (
    <div className="virtuoso-grid-item" data-index="1">
      <div className="instant-sell-card-wrapper">
        <div className="profile-card  buyNow-card">
          <div className="profile-card__action-wrapper">
            <div className="profile-card__action">
              <button type="button" className="button button--blank  ">
                <img
                  alt="menu"
                  width="0"
                  height="0"
                  decoding="async"
                  data-nimg="1"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4N18yNzcyKSI+CjxwYXRoIGQ9Ik0xNiAzMkMyNC44MzY2IDMyIDMyIDI0LjgzNjYgMzIgMTZDMzIgNy4xNjM0NCAyNC44MzY2IDAgMTYgMEM3LjE2MzQ0IDAgMCA3LjE2MzQ0IDAgMTZDMCAyNC44MzY2IDcuMTYzNDQgMzIgMTYgMzJaIiBmaWxsPSIjMTYxRjI1Ii8+CjxwYXRoIGQ9Ik0xNi4wMDAxIDEwLjE4MTZWMjEuODE4TTEwLjE4MTkgMTUuOTk5OEgyMS44MTgyIiBzdHJva2U9IiMwMEZGRjAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4N18yNzcyIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
                  style={{ color: "transparent" }}
                />
              </button>
            </div>
          </div>
          <div className="profile-card__top">
            <LazyLoadImage src={config.ipfsGateway + nftItem?.logoURL} placeholder={nftItem?.thumbnailURL} />
            {/* <img src={config.ipfsGateway + nftItem?.logoURL} alt="" /> */}
          </div>
          <div className="profile-card__bottom-wrapper buyNow">
            <div className="profile-card__buy-now">
              <div className="profile-card__bottom-wrapper--title">
                <div className="profile-card__bottom-wrapper--hash-id">
                {nftName?.length > 10 ? nftName?.substring(0, 10) + "..." : nftName}
                </div>
                <div className="Tooltip_tooltipContainer__cjikM Tooltip_left__2dC0Y">
                  <div className="nft-detail__top--status grey">
                    <img
                      alt="Hexagon"
                      width="24"
                      height="24"
                      decoding="async"
                      data-nimg="1"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNDcgMy4yMDYyNUw0LjQ3IDEuMzMxMjVDNC43OTQyNyAxLjEyODU4IDUuMjA1NzMgMS4xMjg1OCA1LjUzIDEuMzMxMjVMOC41MyAzLjIwNjI1QzguODIyMzggMy4zODg5OSA5IDMuNzA5NDYgOSA0LjA1NDI1VjcuOTQ1NzVDOSA4LjI5MDU0IDguODIyMzggOC42MTEwMSA4LjUzIDguNzkzNzVMNS41MyAxMC42Njg4QzUuMjA1NzMgMTAuODcxNCA0Ljc5NDI3IDEwLjg3MTQgNC40NyAxMC42Njg4TDEuNDcgOC43OTM3NUMxLjE3NzYyIDguNjExMDEgMSA4LjI5MDU0IDEgNy45NDU3NVY0LjA1NDI1QzEgMy43MDk0NiAxLjE3NzYyIDMuMzg4OTkgMS40NyAzLjIwNjI1WiIgZmlsbD0id2hpdGUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                      style={{ color: "transparent" }}
                    />
                    <span>6436</span>
                  </div>
                  <div className="Tooltip_tooltipContent__7RzH9 ">
                    In the top 100%
                  </div>
                </div>
              </div>
              <div className="profile-card__buy-now--amount">
                <img
                  alt="menu"
                  width="0"
                  height="0"
                  decoding="async"
                  data-nimg="1"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4N18yODM5KSI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMV8xODdfMjgzOSkiPgo8cGF0aCBkPSJNNiAwQzIuNjY2NjcgMCAwIDIuNjY2NjcgMCA2QzAgOS4zMzMzMyAyLjY2NjY3IDEyIDYgMTJDOS4zMzMzMyAxMiAxMiA5LjMzMzMzIDEyIDZDMTIgMi42NjY2NyA5LjMzMzMzIDAgNiAwWk04LjMzMzMzIDEwLjUzMzNDNy40NjY2NyAxMSA2LjYgMTEuMTMzMyA1LjY2NjY3IDExLjA2NjdDNC40NjY2NyAxMSAzLjQgMTAuNTMzMyAyLjQ2NjY3IDkuNzMzMzNDMi4zMzMzMyA5LjYgMi4zMzMzMyA5LjYgMi40NjY2NyA5LjQ2NjY3QzMgOC45MzMzMyAzLjUzMzMzIDguNDY2NjcgNCA3LjkzMzMzQzQuMDY2NjcgNy44NjY2NyA0LjEzMzMzIDcuODY2NjcgNC4yNjY2NyA3LjkzMzMzQzUuNTMzMzMgOS4wNjY2NyA3LjUzMzMzIDguNjY2NjcgOC4yNjY2NyA3LjJDOS4wNjY2NyA1LjYgOCAzLjczMzMzIDYuMjY2NjcgMy41MzMzM0M1LjUzMzMzIDMuNDY2NjcgNC44NjY2NyAzLjY2NjY3IDQuMjY2NjcgNC4xMzMzM0M0LjEzMzMzIDQuMiA0LjA2NjY3IDQuMiA0IDQuMTMzMzNDMy40NjY2NyAzLjYgMi45MzMzMyAzLjA2NjY3IDIuNCAyLjUzMzMzQzIuMzMzMzMgMi40NjY2NyAyLjMzMzMzIDIuNCAyLjQgMi4zMzMzM0MyLjkzMzMzIDEuODY2NjcgMy41MzMzMyAxLjQ2NjY3IDQuMiAxLjI2NjY3QzQuNzMzMzMgMSA1LjMzMzMzIDAuOTMzMzMzIDUuOTMzMzMgMC45MzMzMzNDNy45MzMzMyAxIDkuNDY2NjcgMS44NjY2NyAxMC40NjY3IDMuNkMxMC45MzMzIDQuNDY2NjcgMTEuMTMzMyA1LjMzMzMzIDExLjA2NjcgNi4zMzMzM0MxMC45MzMzIDguMiAxMCA5LjYgOC4zMzMzMyAxMC41MzMzWk00LjYgNkM0LjYgNS4yIDUuMiA0LjYgNiA0LjZDNi44IDQuNiA3LjQgNS4yIDcuNCA2QzcuNCA2LjggNi44IDcuNCA2IDcuNEM1LjIgNy40IDQuNiA2LjggNC42IDZaIiBmaWxsPSIjMDBGRkYwIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xODdfMjgzOSI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8xODdfMjgzOSI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                  style={{ color: "transparent" }}
                />
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
            </div>
            <div className="profile-card__buy-now--action buy-now">
              <button type="button" className="button button--blank  ">
                BUY NOW
              </button>
            </div>
            <div className="profile-card__footer last-sale">
              <div className="label">{''}</div>
              <div className="amount">{''} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColLC;
