import { FC, useCallback, useEffect, useState } from "react";
// import Avatar from "components/StyleComponent/Avatar";
// import NcImage from "components/NcComponent/NcImage";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { config, PLATFORM_NETWORKS } from "../../config";
import {
  changeItemDetail,
  selectDetailOfAnItem,
} from "../../reducers/nft.reducers";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "../../lib/methods";
import {
  selectCurrentNetworkSymbol,
  selectCurrentUser,
} from "../../reducers/auth.reducers";
// import Bid from "./Bid";
// import Checkout from "./Checkout";
// import Accept from "./Accept";
// import PutSale from "./PutSale";
// import Backdrop from "@mui/material/Backdrop";
// import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
// import AudioForNft from "components/Card/AudioForNft";
// import VideoForNft from "components/Card/VideoForNft";
// import ThreeDForNft from "components/Card/ThreeDForNft";
import { nanoid } from "@reduxjs/toolkit";
// import ButtonPlayMusicRunningContainer from "containers/ButtonPlayMusicRunningContainer";
// import { useSigningClient } from "app/cosmwasm";
import { socket } from "App";
import {
  getLinkPathToJSON,
  getSystemTime,
  isJsonObject,
  isVideo,
} from "../../lib/utils";
// import NcModal from "components/NcComponent/NcModal";
import { FILE_TYPE } from "../../config";
// import Clock from "./Clock/Clock";
// import PricesUnit from "components/StyleComponent/PricesUnit";
// import VideoForPreview from "components/Card/VideoForPreview";
// import PaymentPayloadViewer from "components/Card/XRPLPayloadViewer";
// import "./DetailNFTStyle.css";
import parse from "html-react-parser";
// import { Checkbox, Switch } from "@mui/material";
// import CancelSale from "./RemoveSale";
// import { Tooltip } from "react-tooltip";
// import DetailTab from "./DetailTab";
// import DetailTopMenu from "./DetailTopMenu";
import { useCoreumOperations } from "../../hooks_/useCoreumOperations";
// import { useEVMOperations } from "hooks/useEVMOperations";
// import { useXRPOperations } from "hooks/useXRPOperations";
import { useItemsApiServices } from "../../api/useItemsApiServices";
import { useWalletOperations } from "../../hooks_/useWalletOperations";
import { useAuth } from "../../context/AuthContext";
import LazyLoadImage from "../lazyImage/LazyImage";

const DetailNft = ({ tokenId }) => {
  const globalDetailNFT = useAppSelector(selectDetailOfAnItem);
  const currentUsr = useAppSelector(selectCurrentUser);
  const currentNetworkSymbol = useAppSelector(selectCurrentNetworkSymbol);
  const [visibleModalPurchase, setVisibleModalPurchase] = useState(false);
  const [visibleModalBid, setVisibleModalBid] = useState(false);
  const [visibleModalAccept, setVisibleModalAccept] = useState(false);
  const [visibleModalSale, setVisibleModalSale] = useState(false);
  const [visibleModalCancelSale, setVisibleModalCancelSale] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [DEMO_NFT_ID] = useState(nanoid());
  const [sysTime, setSysTime] = useState(0);
  const [auctionEnded, setAuctionEnded] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { getNftDetail } = useItemsApiServices();
  const { fetchBalance } = useAuth();
  const [isMobile, setIsMobile] = useState(false);
  const [blurContent, setBlurContent] = useState(false);
  const [showNSFWModal, setShowNSFWModal] = useState(false);
  const [nftMetaData, setNftMetaData] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [nftName, setNftName] = useState("");
  const {
    removeSaleOnCoreum,
    bidOnCoreum,
    buyOnCoreum,
    listOnCoreum,
    acceptOnCoreum,
    getLeftDuration,
    plusPlayCount,
  } = useCoreumOperations();
  // const { removeSaleOnEVM, bidOnEVM, buyOnEVM, listOnEVM, acceptOnEVM } =
  //   useEVMOperations();
  // const {
  //   removeSaleOnXRP,
  //   paymentPayload,
  //   bidOnXRP,
  //   buyOnXRP,
  //   listOnXRP,
  //   acceptOnXRP,
  // }: any = useXRPOperations();
  const { checkWalletAddrAndChainId } = useWalletOperations();

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
    return () => {
      dispatch(changeItemDetail({}));
    };
  }, []);

  const validateBidStatus = useCallback(() => {
    if (globalDetailNFT?.bids.length > 0 && globalDetailNFT?.isSale === 2) {
      toast.warn("You cannot remove it from sale due to existing bids.");
      return false;
    }
    return true;
  }, [globalDetailNFT]);

  const removeSale = async () => {
    if (!validateBidStatus()) return;
    setVisibleModalCancelSale(false);
    setProcessing(true);
    if (!checkWalletAddrAndChainId) {
      setProcessing(false);
      return;
    }
    try {
      switch ((currentNetworkSymbol = 1)) {
        // case PLATFORM_NETWORKS.EVM:
        //   await removeSaleOnEVM();
        //   break;
        case PLATFORM_NETWORKS.COREUM:
          await removeSaleOnCoreum();
          break;
        // case PLATFORM_NETWORKS.XRPL:
        //   await removeSaleOnXRP();
        //   break;
        default:
          toast.error("Unsupported network.");
      }
    } catch (error) {
      toast.error("Error processing request: " + error.message);
    } finally {
      await getNftDetail(tokenId || "");
      setProcessing(false);
    }
  };

  const confirmBuy = async () => {
    setVisibleModalPurchase(false);
    setProcessing(true);
    if (!checkWalletAddrAndChainId) {
      setProcessing(false);
      return;
    }
    try {
      switch ((currentNetworkSymbol = 1)) {
        // case PLATFORM_NETWORKS.EVM:
        //   await buyOnEVM(tokenId);
        //   break;
        case PLATFORM_NETWORKS.COREUM:
          await buyOnCoreum(tokenId);
          break;
        // case PLATFORM_NETWORKS.XRPL:
        //   await buyOnXRP(tokenId);
        //   break;
        default:
          toast.error("Unsupported network.");
      }
    } catch (error) {
      toast.error("Error processing request: " + error.message);
    } finally {
      await getNftDetail(tokenId || "");
      setProcessing(false);
    }
  };
  const onPutSale = async (price, instant, period) => {
    setVisibleModalSale(false);
    if (price <= 0 || isNaN(price)) {
      toast.error("Invalid price.");
      return;
    }
    setProcessing(true);
    if (!checkWalletAddrAndChainId) {
      setProcessing(false);
      return;
    }
    var aucperiod = instant === true ? 0 : period * 24 * 3600;
    try {
      switch ((currentNetworkSymbol = 1)) {
        // case PLATFORM_NETWORKS.EVM:
        // case PLATFORM_NETWORKS.ETHEREUM:
        //   await listOnEVM(tokenId, aucperiod, price);
        //   break;
        case PLATFORM_NETWORKS.COREUM:
          await listOnCoreum(instant, aucperiod, price);
          break;
          // case PLATFORM_NETWORKS.XRPL:
          //   await listOnXRP(price, aucperiod);
          //   break;
          // default:
          toast.error("Unsupported network.");
      }
    } catch (error) {
      toast.error("Error processing request: " + error.message);
    } finally {
      getSystemTime().then((resp) => setSysTime(resp));
      await getNftDetail(tokenId || "");
      setProcessing(false);
    }
  };

  const onBid = async (bidPrice) => {
    setVisibleModalBid(false);

    if (getLeftDuration <= 12) {
      toast.info("You can place a bid due to auction end time.");
      return;
    }
    setProcessing(true);
    if (!checkWalletAddrAndChainId) {
      setProcessing(false);
      return;
    }
    try {
      switch ((currentNetworkSymbol = 1)) {
        // case PLATFORM_NETWORKS.EVM:
        //   await bidOnEVM(bidPrice, tokenId);
        //   break;
        case PLATFORM_NETWORKS.COREUM:
          await bidOnCoreum(bidPrice, tokenId);
          break;
        // case PLATFORM_NETWORKS.XRPL:
        //   await bidOnXRP(bidPrice, tokenId);
        //   break;
        default:
          toast.error("Unsupported network.");
      }
    } catch (error) {
      toast.error("Error occurred: " + error.message);
    } finally {
      await getNftDetail(tokenId || "");
      setProcessing(false);
    }
  };

  const onAccept = async () => {
    setVisibleModalAccept(false);

    setProcessing(true);
    if (!checkWalletAddrAndChainId) {
      setProcessing(false);
      return;
    }
    try {
      switch ((currentNetworkSymbol = 1)) {
        // case PLATFORM_NETWORKS.EVM:
        //   await acceptOnEVM(tokenId);
        //   break;
        case PLATFORM_NETWORKS.COREUM:
          await acceptOnCoreum(tokenId);
          break;
        // case PLATFORM_NETWORKS.XRPL:
        //   await acceptOnXRP(tokenId);
        //   break;
        default:
          toast.error("Unsupported network.");
      }
    } catch (error) {
      toast.error("Error occurred: " + error.message);
    } finally {
      await getNftDetail(tokenId || "");
      setProcessing(false);
    }
  };

  useEffect(() => {
    socket.on("UpdateStatus", (data) => {
      if (tokenId) {
        if (data?.type === "BURN_NFT" && data?.data?.itemId === tokenId) {
          navigate(`/collectionItems/${data?.data?.colId}`);
          return;
        }
        if (data.data.itemId === tokenId) {
          getNftDetail(tokenId || "");
        }
      }
    });
  }, []);

  const fetchJson = useCallback(async () => {
    setProcessing(true);
    if (
      globalDetailNFT?.metadataURI === undefined ||
      globalDetailNFT?.metadataURI === "" ||
      globalDetailNFT?.name !== ""
    ) {
      setNftName(globalDetailNFT?.name);
      setImageUrl(globalDetailNFT?.logoURL);
      setProcessing(false);
      return;
    }
    const response = await axios.get(
      getLinkPathToJSON(globalDetailNFT?.metadataURI, globalDetailNFT?.name)
    );

    if (response.data) {
      if (isJsonObject(response.data)) {
        setNftMetaData(JSON.parse(response.data));
        setNftName(JSON.parse(response.data).name);
        setImageUrl(JSON.parse(response.data).image.replace("ipfs://", ""));
      } else {
        setNftName(response.data.name);
        setNftMetaData(response.data);
        setImageUrl(response.data.image.replace("ipfs://", ""));
      }
    }
    setProcessing(false);
  }, [globalDetailNFT]);

  useEffect(() => {
    if (globalDetailNFT?.isSale === 2) {
      (async () => {
        const res = await getSystemTime();
        setSysTime(res);
      })();
    }
    fetchJson();
  }, [globalDetailNFT]);

  useEffect(() => {
    let need2blur = false;
    if (globalDetailNFT?.explicit?.includes(currentUsr?._id) === true)
      need2blur = true;
    setBlurContent(need2blur);
  }, [globalDetailNFT, currentUsr]);

  useEffect(() => {
    getNftDetail(tokenId || "");
    fetchBalance();
  }, [tokenId, currentUsr]);

  useEffect(() => {
    if (processing) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }

    return () => {
      document.documentElement.classList.remove("no-scroll");
    };
  }, [processing]);

  const applyChangeExplicitContents = async () => {
    setShowNSFWModal(false);
    if (isEmpty(currentUsr?._id)) {
      toast.warn("Please connect your wallet and try again.");
      return;
    }
    try {
      //update explicit
      const updateResponse = await axios.post(
        `${config.API_URL}api/item/updateExplicit`,
        {
          userId: currentUsr?._id,
          itemId: globalDetailNFT?._id,
        }
      );
      if (updateResponse.data.code === 0) {
        getNftDetail(globalDetailNFT?._id);
      }
    } catch (error) {}
  };

  const handleCheckFieldChange = (event) => {
    if (event.target.checked === false) {
      applyChangeExplicitContents();
    } else {
      setShowNSFWModal(true);
    }
  };

  return (
    <div
      className="custom-modal "
      style={{
        backgroundColor: "rgba(19, 19, 29, 0.99)",
        marginTop: "100px",
      }}
    >
      <div className="custom-modal__inner">
        <div className="nft-detail">
          <div className="nft-detail__wrapper">
            <div className="placeholder " style={{ minHeight: "100dvh" }}>
              <div className="loader">
                <img src="https://app-static.bidds.com/_next/static/images/biddsWaiting-1646034bc4dc5b8d97b2944a3f086146.gif" />
              </div>
            </div>
            <div className="nft-detail__top">
              <div className="nft-detail__top--left">
                <span className="nft-detail__top--id"> Coreum Punks #3605</span>
                {/* <a
                  className="nft-detail__top--title"
                  target="_blank"
                  href="/collection/coreum-punks/"
                >
                  Coreum Punks
                  <img
                    alt=""
                    width="0"
                    height="0"
                    decoding="async"
                    data-nimg="1"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4N18yNzg4KSI+CjxwYXRoIGQ9Ik0xMiAwSDJDMC44OTU0MyAwIDAgMC44OTU0MyAwIDJWMTJDMCAxMy4xMDQ2IDAuODk1NDMgMTQgMiAxNEgxMkMxMy4xMDQ2IDE0IDE0IDEzLjEwNDYgMTQgMTJWMkMxNCAwLjg5NTQzIDEzLjEwNDYgMCAxMiAwWiIgZmlsbD0iI0NGQTI0QSIvPgo8cGF0aCBkPSJNNCA3TDYgOUwxMCA1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xODdfMjc4OCI+CjxyZWN0IHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                    styie={{ color: "transparent" }}
                  />
                </a> */}
                {/* <div className="Tooltip_tooltipContainer__cjikM Tooltip_left__2dC0Y">
                  <div className="nft-detail__top--status grey">
                    <img
                      alt="Hexagon"
                      width="24"
                      height="24"
                      decoding="async"
                      data-nimg="1"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNDcgMy4yMDYyNUw0LjQ3IDEuMzMxMjVDNC43OTQyNyAxLjEyODU4IDUuMjA1NzMgMS4xMjg1OCA1LjUzIDEuMzMxMjVMOC41MyAzLjIwNjI1QzguODIyMzggMy4zODg5OSA5IDMuNzA5NDYgOSA0LjA1NDI1VjcuOTQ1NzVDOSA4LjI5MDU0IDguODIyMzggOC42MTEwMSA4LjUzIDguNzkzNzVMNS41MyAxMC42Njg4QzUuMjA1NzMgMTAuODcxNCA0Ljc5NDI3IDEwLjg3MTQgNC40NyAxMC42Njg4TDEuNDcgOC43OTM3NUMxLjE3NzYyIDguNjExMDEgMSA4LjI5MDU0IDEgNy45NDU3NVY0LjA1NDI1QzEgMy43MDk0NiAxLjE3NzYyIDMuMzg4OTkgMS40NyAzLjIwNjI1WiIgZmlsbD0id2hpdGUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                      styie={{ color: "transparent" }}
                    />
                    <span>7205</span>
                  </div>
                  <div className="Tooltip_tooltipContent__7RzH9 ">
                    In the top 100%
                  </div>
                </div> */}
              </div>
              {/* <div className="nft-detail__top--right">
                <div className="nft-detail__top--arrow">
                  <button
                    type="button"
                    className="button button--blank nft-detail__top--left arrow "
                  >
                    <img
                      alt=""
                      width="0"
                      height="0"
                      decoding="async"
                      data-nimg="1"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDJMMiAxMEwxMCAxOCIgc3Ryb2tlPSIjMDBGRkYwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                      styie={{ color: "transparent" }}
                    />
                  </button>
                  <button
                    type="button"
                    className="button button--blank nft-detail__top--right arrow "
                  >
                    <img
                      alt=""
                      width="0"
                      height="0"
                      decoding="async"
                      data-nimg="1"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMkwxMCAxMEwyIDE4IiBzdHJva2U9IiMwMEZGRjAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                      styie={{ color: "transparent" }}
                    />
                  </button>
                </div>
                <button
                  type="button"
                  className="button button--blank nft-detail__top--close "
                >
                  <img
                    alt=""
                    width="0"
                    height="0"
                    decoding="async"
                    data-nimg="1"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNMSAxTDkgOU05IDFMMSA5IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4="
                    styie={{ color: "transparent" }}
                  />
                </button>
              </div> */}
            </div>
            <a
              className="nft-detail__title"
              target="_blank"
              href="/collection/coreum-punks/"
            >
              Coreum Punks
              <img
                alt=""
                width="0"
                height="0"
                decoding="async"
                data-nimg="1"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4N18yNzg4KSI+CjxwYXRoIGQ9Ik0xMiAwSDJDMC44OTU0MyAwIDAgMC44OTU0MyAwIDJWMTJDMCAxMy4xMDQ2IDAuODk1NDMgMTQgMiAxNEgxMkMxMy4xMDQ2IDE0IDE0IDEzLjEwNDYgMTQgMTJWMkMxNCAwLjg5NTQzIDEzLjEwNDYgMCAxMiAwWiIgZmlsbD0iI0NGQTI0QSIvPgo8cGF0aCBkPSJNNCA3TDYgOUwxMCA1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xODdfMjc4OCI+CjxyZWN0IHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                styie={{ color: "transparent" }}
              />
            </a>
            <div className="nft-detail__nft-wrapper">
              <div className="colum left">
                <div className="nft-detail__nft nft ">
                  <div className="loading-img loading-img-complete">
                    <svg
                      width="78"
                      height="22"
                      viewBox="0 0 78 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_28_7)">
                        <path
                          d="M24.8084 9.07111H22.8715V3.54884C22.8715 1.59198 21.2165 0 19.1821 0H3.68943C1.65504 0 0 1.59198 0 3.54884V18.4519C0 20.4088 1.65504 22.0008 3.68943 22.0008H24.8092C26.8436 22.0008 28.4987 20.4088 28.4987 18.4519V12.6207C28.4987 10.6639 26.8436 9.0719 24.8092 9.0719L24.8084 9.07111ZM20.4136 18.2415C20.4136 19.0115 19.7646 19.6357 18.9642 19.6357C18.1637 19.6357 17.5148 19.0115 17.5148 18.2415V12.62C17.5148 11.9658 18.0662 11.4354 18.7462 11.4354H20.4136V18.2415ZM20.4136 9.07111H18.7462C16.7118 9.07111 15.0568 10.6631 15.0568 12.62V18.4512C15.0568 18.8665 15.1322 19.2645 15.269 19.6357H3.68943C3.01021 19.6357 2.45798 19.1045 2.45798 18.4512V3.54884C2.45798 2.8955 3.01021 2.36432 3.68943 2.36432H19.1829C19.8621 2.36432 20.4144 2.8955 20.4144 3.54884V9.07111H20.4136ZM26.0399 18.4512C26.0399 19.1045 25.4876 19.6357 24.8084 19.6357H22.6593C22.7962 19.2653 22.8715 18.8665 22.8715 18.4512V11.4354H24.8084C25.4876 11.4354 26.0399 11.9666 26.0399 12.62V18.4512Z"
                          fill="#79858C"
                        ></path>
                        <path
                          d="M43.4628 8.52786H42.4493C41.5669 8.52786 40.9426 8.78951 40.5764 9.3136V6.26599C40.5764 5.99488 40.4354 5.85933 40.1536 5.85933H38.6329C38.3511 5.85933 38.2101 5.99488 38.2101 6.26599V15.7327C38.2101 16.0038 38.3511 16.1394 38.6329 16.1394H40.1536C40.4354 16.1394 40.5764 16.0038 40.5764 15.7327V15.3537C40.9426 15.8777 41.5669 16.1394 42.4493 16.1394H43.4628C44.505 16.1394 45.2506 15.884 45.7012 15.3741C46.1519 14.8642 46.3772 14.1305 46.3772 13.173V11.5345C46.3772 10.5501 46.1519 9.80302 45.7012 9.29311C45.2506 8.78321 44.5042 8.52786 43.4628 8.52786ZM44.0118 13.3897C44.0118 13.6332 43.9667 13.8003 43.8782 13.8909C43.7889 13.9816 43.6316 14.0265 43.4063 14.0265H41.1818C40.9565 14.0265 40.7992 13.9816 40.7099 13.8909C40.6206 13.8011 40.5764 13.6332 40.5764 13.3897V11.2768C40.5764 11.0333 40.6231 10.8662 40.7173 10.7755C40.8107 10.6857 40.9655 10.64 41.1818 10.64H43.4063C43.6218 10.64 43.7767 10.6849 43.8709 10.7755C43.9643 10.8662 44.0118 11.0333 44.0118 11.2768V13.3897Z"
                          fill="#79858C"
                        ></path>
                        <path
                          d="M48.2355 8.52811H49.7561C49.9896 8.52811 50.1789 8.71016 50.1789 8.93477V15.7338C50.1789 15.9584 49.9896 16.1404 49.7561 16.1404H48.2355C48.002 16.1404 47.8127 15.9584 47.8127 15.7338V8.93477C47.8127 8.71016 48.002 8.52811 48.2355 8.52811Z"
                          fill="#79858C"
                        ></path>
                        <path
                          d="M50.6009 5.85169H52.1215C52.355 5.85169 52.5443 6.03375 52.5443 6.25836V7.59183C52.5443 7.81644 52.355 7.99849 52.1215 7.99849H50.6009C50.3674 7.99849 50.1781 7.81644 50.1781 7.59183V6.25836C50.1781 6.03375 50.3674 5.85169 50.6009 5.85169Z"
                          fill="#79858C"
                        ></path>
                        <path
                          d="M59.3586 5.86012H57.838C57.5561 5.86012 57.4152 5.99567 57.4152 6.26678V9.31439C57.049 8.79109 56.4246 8.52865 55.5422 8.52865H54.5287C53.4865 8.52865 52.7409 8.78399 52.2903 9.2939C51.8397 9.8038 51.6144 10.5509 51.6144 11.5353V13.1737C51.6144 14.1305 51.8397 14.8642 52.2903 15.3749C52.7409 15.8848 53.4873 16.1402 54.5287 16.1402H55.5422C56.4246 16.1402 57.049 15.8785 57.4152 15.3544V15.7469C57.4152 16.0086 57.5561 16.1394 57.838 16.1394H59.3586C59.6405 16.1394 59.7814 16.0038 59.7814 15.7327V6.26599C59.7814 5.99488 59.6405 5.85933 59.3586 5.85933V5.86012ZM57.416 13.3905C57.416 13.634 57.371 13.8011 57.2825 13.8917C57.1932 13.9823 57.0358 14.0273 56.8105 14.0273H54.5861C54.3607 14.0273 54.2034 13.9823 54.1141 13.8917C54.0248 13.8019 53.9806 13.634 53.9806 13.3905V11.2776C53.9806 11.034 54.0273 10.867 54.1215 10.7763C54.2149 10.6865 54.3698 10.6408 54.5861 10.6408H56.8105C57.026 10.6408 57.1809 10.6857 57.2751 10.7763C57.3685 10.867 57.416 11.034 57.416 11.2776V13.3905Z"
                          fill="#79858C"
                        ></path>
                        <path
                          d="M68.9612 5.86012H67.4405C67.1587 5.86012 67.0178 5.99567 67.0178 6.26678V9.31439C66.6515 8.79109 66.0272 8.52865 65.1448 8.52865H64.1313C63.0891 8.52865 62.3435 8.78399 61.8929 9.2939C61.4422 9.8038 61.2169 10.5509 61.2169 11.5353V13.1737C61.2169 14.1305 61.4422 14.8642 61.8929 15.3749C62.3435 15.8848 63.0899 16.1402 64.1313 16.1402H65.1448C66.0272 16.1402 66.6515 15.8785 67.0178 15.3544V15.7469C67.0178 16.0086 67.1587 16.1394 67.4405 16.1394H68.9612C69.2431 16.1394 69.384 16.0038 69.384 15.7327V6.26599C69.384 5.99488 69.2431 5.85933 68.9612 5.85933V5.86012ZM67.0186 13.3905C67.0186 13.634 66.9735 13.8011 66.885 13.8917C66.7957 13.9823 66.6384 14.0273 66.4131 14.0273H64.1886C63.9633 14.0273 63.806 13.9823 63.7167 13.8917C63.6274 13.8019 63.5831 13.634 63.5831 13.3905V11.2776C63.5831 11.034 63.6298 10.867 63.7241 10.7763C63.8175 10.6865 63.9723 10.6408 64.1886 10.6408H66.4131C66.6286 10.6408 66.7834 10.6857 66.8777 10.7763C66.9711 10.867 67.0186 11.034 67.0186 11.2776V13.3905Z"
                          fill="#79858C"
                        ></path>
                        <path
                          d="M77.4437 12.3203C77.0725 11.9594 76.4179 11.7245 75.4798 11.6157L73.5511 11.3856C73.2504 11.3588 73.1004 11.2319 73.1004 11.0065C73.1004 10.763 73.2791 10.6408 73.6355 10.6408H77.2258C77.5076 10.6408 77.6485 10.5053 77.6485 10.2342V8.93381C77.6485 8.6627 77.5076 8.52715 77.2258 8.52715H73.5789C72.631 8.52715 71.9222 8.70762 71.4528 9.06857C70.9833 9.42953 70.749 9.99381 70.749 10.7614C70.749 11.529 70.9227 12.046 71.2701 12.3936C71.6175 12.7412 72.2229 12.965 73.0865 13.0643L75.0717 13.2944C75.2692 13.3125 75.4069 13.3488 75.4871 13.4024C75.5666 13.4568 75.6068 13.5466 75.6068 13.6735C75.6068 13.9083 75.4241 14.0258 75.0578 14.0258H71.3405C71.0587 14.0258 70.9178 14.1613 70.9178 14.4324V15.7328C70.9178 16.0039 71.0587 16.1395 71.3405 16.1395H75.0439C76.0672 16.1395 76.8153 15.97 77.2897 15.6319C77.7641 15.293 78.0008 14.7311 78.0008 13.9454C78.0008 13.2235 77.8157 12.6813 77.4445 12.3203H77.4437Z"
                          fill="#79858C"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_28_7">
                          <rect width="78" height="22" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <LazyLoadImage
                      src={
                        globalDetailNFT?.logoURL !== ""
                          ? config.ipfsGateway + globalDetailNFT?.logoURL
                          : config.ipfsGateway + nftMetaData?.previewImage
                      }
                      alt=""
                      placeholder={
                        globalDetailNFT?.thumbnailURL
                      }
                      cls="nft-detail__nft--image -img"
                    />
                  </div>
                  <button
                    type="button"
                    className="button button--blank nft-detail__nft--left arrow "
                  >
                    <img
                      alt=""
                      width="0"
                      height="0"
                      decoding="async"
                      data-nimg="1"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDJMMiAxMEwxMCAxOCIgc3Ryb2tlPSIjMDBGRkYwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                      styie={{ color: "transparent" }}
                    />
                  </button>
                  <button
                    type="button"
                    className="button button--blank nft-detail__nft--right arrow "
                  >
                    <img
                      alt=""
                      width="0"
                      height="0"
                      decoding="async"
                      data-nimg="1"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgMkwxMCAxMEwyIDE4IiBzdHJva2U9IiMwMEZGRjAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                      styie={{ color: "transparent" }}
                    />
                  </button>
                </div>
                <div className="nft-detail__activities widget desktop">
                  <div className="nft-detail__activities--title">Activity</div>
                  <div className="nft-detail__activities--content">
                    <table>
                      <thead>
                        <tr>
                          <th>Action</th>
                          <th>Price</th>
                          <th>From</th>
                          <th>To</th>
                          <th>Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="type-activity">
                            <img
                              alt=""
                              width="0"
                              height="0"
                              decoding="async"
                              data-nimg="1"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDIxSDVDMi43OTA4NiAyMSAxIDE5LjIwOTEgMSAxN1YxTDQuNzUgMy41TDguNSAxTDEyLjI1IDMuNUwxNiAxVjExTTE2IDIxVjExTTE2IDIxSDE3QzE5LjIwOTEgMjEgMjEgMTkuMjA5MSAyMSAxN1YxMUgxNk02IDcuMjVIMTFNNiAxMi4yNUgxMU02IDE3LjI1SDExIiBzdHJva2U9IiMwMEZGRjAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                              styie={{ color: "transparent" }}
                            />
                            Update Listing
                          </td>
                          <td className="price">
                            <img
                              alt=""
                              width="0"
                              height="0"
                              decoding="async"
                              data-nimg="1"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4N18yODM5KSI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMV8xODdfMjgzOSkiPgo8cGF0aCBkPSJNNiAwQzIuNjY2NjcgMCAwIDIuNjY2NjcgMCA2QzAgOS4zMzMzMyAyLjY2NjY3IDEyIDYgMTJDOS4zMzMzMyAxMiAxMiA5LjMzMzMzIDEyIDZDMTIgMi42NjY2NyA5LjMzMzMzIDAgNiAwWk04LjMzMzMzIDEwLjUzMzNDNy40NjY2NyAxMSA2LjYgMTEuMTMzMyA1LjY2NjY3IDExLjA2NjdDNC40NjY2NyAxMSAzLjQgMTAuNTMzMyAyLjQ2NjY3IDkuNzMzMzNDMi4zMzMzMyA5LjYgMi4zMzMzMyA5LjYgMi40NjY2NyA5LjQ2NjY3QzMgOC45MzMzMyAzLjUzMzMzIDguNDY2NjcgNCA3LjkzMzMzQzQuMDY2NjcgNy44NjY2NyA0LjEzMzMzIDcuODY2NjcgNC4yNjY2NyA3LjkzMzMzQzUuNTMzMzMgOS4wNjY2NyA3LjUzMzMzIDguNjY2NjcgOC4yNjY2NyA3LjJDOS4wNjY2NyA1LjYgOCAzLjczMzMzIDYuMjY2NjcgMy41MzMzM0M1LjUzMzMzIDMuNDY2NjcgNC44NjY2NyAzLjY2NjY3IDQuMjY2NjcgNC4xMzMzM0M0LjEzMzMzIDQuMiA0LjA2NjY3IDQuMiA0IDQuMTMzMzNDMy40NjY2NyAzLjYgMi45MzMzMyAzLjA2NjY3IDIuNCAyLjUzMzMzQzIuMzMzMzMgMi40NjY2NyAyLjMzMzMzIDIuNCAyLjQgMi4zMzMzM0MyLjkzMzMzIDEuODY2NjcgMy41MzMzMyAxLjQ2NjY3IDQuMiAxLjI2NjY3QzQuNzMzMzMgMSA1LjMzMzMzIDAuOTMzMzMzIDUuOTMzMzMgMC45MzMzMzNDNy45MzMzMyAxIDkuNDY2NjcgMS44NjY2NyAxMC40NjY3IDMuNkMxMC45MzMzIDQuNDY2NjcgMTEuMTMzMyA1LjMzMzMzIDExLjA2NjcgNi4zMzMzM0MxMC45MzMzIDguMiAxMCA5LjYgOC4zMzMzMyAxMC41MzMzWk00LjYgNkM0LjYgNS4yIDUuMiA0LjYgNiA0LjZDNi44IDQuNiA3LjQgNS4yIDcuNCA2QzcuNCA2LjggNi44IDcuNCA2IDcuNEM1LjIgNy40IDQuNiA2LjggNC42IDZaIiBmaWxsPSIjMDBGRkYwIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xODdfMjgzOSI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8xODdfMjgzOSI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                              styie={{ color: "transparent" }}
                            />
                            180
                          </td>
                          <td>elpe...ore</td>
                          <td>-</td>
                          <td>1 day ago</td>
                        </tr>
                        <tr>
                          <td className="type-activity">
                            <img
                              alt=""
                              width="0"
                              height="0"
                              decoding="async"
                              data-nimg="1"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDIxSDVDMi43OTA4NiAyMSAxIDE5LjIwOTEgMSAxN1YxTDQuNzUgMy41TDguNSAxTDEyLjI1IDMuNUwxNiAxVjExTTE2IDIxVjExTTE2IDIxSDE3QzE5LjIwOTEgMjEgMjEgMTkuMjA5MSAyMSAxN1YxMUgxNk02IDcuMjVIMTFNNiAxMi4yNUgxMU02IDE3LjI1SDExIiBzdHJva2U9IiMwMEZGRjAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                              styie={{ color: "transparent" }}
                            />
                            List
                          </td>
                          <td className="price">
                            <img
                              alt=""
                              width="0"
                              height="0"
                              decoding="async"
                              data-nimg="1"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4N18yODM5KSI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMV8xODdfMjgzOSkiPgo8cGF0aCBkPSJNNiAwQzIuNjY2NjcgMCAwIDIuNjY2NjcgMCA2QzAgOS4zMzMzMyAyLjY2NjY3IDEyIDYgMTJDOS4zMzMzMyAxMiAxMiA5LjMzMzMzIDEyIDZDMTIgMi42NjY2NyA5LjMzMzMzIDAgNiAwWk04LjMzMzMzIDEwLjUzMzNDNy40NjY2NyAxMSA2LjYgMTEuMTMzMyA1LjY2NjY3IDExLjA2NjdDNC40NjY2NyAxMSAzLjQgMTAuNTMzMyAyLjQ2NjY3IDkuNzMzMzNDMi4zMzMzMyA5LjYgMi4zMzMzMyA5LjYgMi40NjY2NyA5LjQ2NjY3QzMgOC45MzMzMyAzLjUzMzMzIDguNDY2NjcgNCA3LjkzMzMzQzQuMDY2NjcgNy44NjY2NyA0LjEzMzMzIDcuODY2NjcgNC4yNjY2NyA3LjkzMzMzQzUuNTMzMzMgOS4wNjY2NyA3LjUzMzMzIDguNjY2NjcgOC4yNjY2NyA3LjJDOS4wNjY2NyA1LjYgOCAzLjczMzMzIDYuMjY2NjcgMy41MzMzM0M1LjUzMzMzIDMuNDY2NjcgNC44NjY2NyAzLjY2NjY3IDQuMjY2NjcgNC4xMzMzM0M0LjEzMzMzIDQuMiA0LjA2NjY3IDQuMiA0IDQuMTMzMzNDMy40NjY2NyAzLjYgMi45MzMzMyAzLjA2NjY3IDIuNCAyLjUzMzMzQzIuMzMzMzMgMi40NjY2NyAyLjMzMzMzIDIuNCAyLjQgMi4zMzMzM0MyLjkzMzMzIDEuODY2NjcgMy41MzMzMyAxLjQ2NjY3IDQuMiAxLjI2NjY3QzQuNzMzMzMgMSA1LjMzMzMzIDAuOTMzMzMzIDUuOTMzMzMgMC45MzMzMzNDNy45MzMzMyAxIDkuNDY2NjcgMS44NjY2NyAxMC40NjY3IDMuNkMxMC45MzMzIDQuNDY2NjcgMTEuMTMzMyA1LjMzMzMzIDExLjA2NjcgNi4zMzMzM0MxMC45MzMzIDguMiAxMCA5LjYgOC4zMzMzMyAxMC41MzMzWk00LjYgNkM0LjYgNS4yIDUuMiA0LjYgNiA0LjZDNi44IDQuNiA3LjQgNS4yIDcuNCA2QzcuNCA2LjggNi44IDcuNCA2IDcuNEM1LjIgNy40IDQuNiA2LjggNC42IDZaIiBmaWxsPSIjMDBGRkYwIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xODdfMjgzOSI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8xODdfMjgzOSI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                              styie={{ color: "transparent" }}
                            />
                            250
                          </td>
                          <td>elpe...ore</td>
                          <td>-</td>
                          <td>2 days ago</td>
                        </tr>
                        <tr>
                          <td className="type-activity">
                            <img
                              alt=""
                              width="0"
                              height="0"
                              decoding="async"
                              data-nimg="1"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyMCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNSA1Ljc4NTcySDE0LjUiIHN0cm9rZT0iIzAwRkZGMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xLjQgNy42MDQ3N0w4LjExNDI5IDE2LjU1NzFDOC40OTE5OSAxNy4wNjA4IDkuMDg0NzcgMTcuMzU3MSA5LjcxNDI5IDE3LjM1NzFIMTAuMjg1N0MxMC45MTUyIDE3LjM1NzEgMTEuNTA4IDE3LjA2MDggMTEuODg1NyAxNi41NTcxTDE4LjYgNy42MDQ3NkMxOC44NTk2IDcuMjU4NTcgMTkgNi44Mzc1MSAxOSA2LjQwNDc3VjQuNjg1NTdDMTkgNC4xNTUxNCAxOC43ODkzIDMuNjQ2NDMgMTguNDE0MiAzLjI3MTM2TDE2LjM3MTUgMS4yMjg2NUMxNS45OTY0IDAuODUzNTc0IDE1LjQ4NzcgMC42NDI4NiAxNC45NTczIDAuNjQyODZINS4wNDI3MUM0LjUxMjI4IDAuNjQyODYgNC4wMDM1NyAwLjg1MzU3NCAzLjYyODUgMS4yMjg2NUwxLjU4NTc5IDMuMjcxMzZDMS4yMTA3MSAzLjY0NjQzIDEgNC4xNTUxNCAxIDQuNjg1NTdWNi40MDQ3N0MxIDYuODM3NTEgMS4xNDAzNiA3LjI1ODU3IDEuNCA3LjYwNDc3WiIgc3Ryb2tlPSIjMDBGRkYwIi8+Cjwvc3ZnPgo="
                              styie={{ color: "transparent" }}
                            />
                            Mint
                          </td>
                          <td className="price">
                            <img
                              alt=""
                              width="0"
                              height="0"
                              decoding="async"
                              data-nimg="1"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4N18yODM5KSI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMV8xODdfMjgzOSkiPgo8cGF0aCBkPSJNNiAwQzIuNjY2NjcgMCAwIDIuNjY2NjcgMCA2QzAgOS4zMzMzMyAyLjY2NjY3IDEyIDYgMTJDOS4zMzMzMyAxMiAxMiA5LjMzMzMzIDEyIDZDMTIgMi42NjY2NyA5LjMzMzMzIDAgNiAwWk04LjMzMzMzIDEwLjUzMzNDNy40NjY2NyAxMSA2LjYgMTEuMTMzMyA1LjY2NjY3IDExLjA2NjdDNC40NjY2NyAxMSAzLjQgMTAuNTMzMyAyLjQ2NjY3IDkuNzMzMzNDMi4zMzMzMyA5LjYgMi4zMzMzMyA5LjYgMi40NjY2NyA5LjQ2NjY3QzMgOC45MzMzMyAzLjUzMzMzIDguNDY2NjcgNCA3LjkzMzMzQzQuMDY2NjcgNy44NjY2NyA0LjEzMzMzIDcuODY2NjcgNC4yNjY2NyA3LjkzMzMzQzUuNTMzMzMgOS4wNjY2NyA3LjUzMzMzIDguNjY2NjcgOC4yNjY2NyA3LjJDOS4wNjY2NyA1LjYgOCAzLjczMzMzIDYuMjY2NjcgMy41MzMzM0M1LjUzMzMzIDMuNDY2NjcgNC44NjY2NyAzLjY2NjY3IDQuMjY2NjcgNC4xMzMzM0M0LjEzMzMzIDQuMiA0LjA2NjY3IDQuMiA0IDQuMTMzMzNDMy40NjY2NyAzLjYgMi45MzMzMyAzLjA2NjY3IDIuNCAyLjUzMzMzQzIuMzMzMzMgMi40NjY2NyAyLjMzMzMzIDIuNCAyLjQgMi4zMzMzM0MyLjkzMzMzIDEuODY2NjcgMy41MzMzMyAxLjQ2NjY3IDQuMiAxLjI2NjY3QzQuNzMzMzMgMSA1LjMzMzMzIDAuOTMzMzMzIDUuOTMzMzMgMC45MzMzMzNDNy45MzMzMyAxIDkuNDY2NjcgMS44NjY2NyAxMC40NjY3IDMuNkMxMC45MzMzIDQuNDY2NjcgMTEuMTMzMyA1LjMzMzMzIDExLjA2NjcgNi4zMzMzM0MxMC45MzMzIDguMiAxMCA5LjYgOC4zMzMzMyAxMC41MzMzWk00LjYgNkM0LjYgNS4yIDUuMiA0LjYgNiA0LjZDNi44IDQuNiA3LjQgNS4yIDcuNCA2QzcuNCA2LjggNi44IDcuNCA2IDcuNEM1LjIgNy40IDQuNiA2LjggNC42IDZaIiBmaWxsPSIjMDBGRkYwIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xODdfMjgzOSI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8xODdfMjgzOSI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                              styie={{ color: "transparent" }}
                            />
                            1
                          </td>
                          <td>core...hpk</td>
                          <td>elpe...ore</td>
                          <td>2 days ago</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="colum right">
                <div className="nft-detail__listing-price widget">
                  <div className="nft-detail__listing-price--content-wrapper">
                    <div className="nft-detail__listing-price--title">
                      <div className="nft-detail__listing-price--left">
                        <img
                          alt=""
                          width="0"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgOUg5LjAwODk4TTQuNTg1NzkgMTEuNTg1OEwxMi41ODU4IDE5LjU4NThDMTMuMzY2OCAyMC4zNjY4IDE0LjYzMzIgMjAuMzY2OCAxNS40MTQyIDE5LjU4NThMMTkuNTg1OCAxNS40MTQyQzIwLjM2NjggMTQuNjMzMiAyMC4zNjY4IDEzLjM2NjggMTkuNTg1OCAxMi41ODU4TDExLjU4NTggNC41ODU3OUMxMS4yMTA3IDQuMjEwNzEgMTAuNzAyIDQgMTAuMTcxNiA0SDcuODI4NDNDNy4yOTc5OSA0IDYuNzg5MjkgNC4yMTA3MSA2LjQxNDIxIDQuNTg1NzlMNC41ODU3OSA2LjQxNDIxQzQuMjEwNzEgNi43ODkyOSA0IDcuMjk3OTkgNCA3LjgyODQzVjEwLjE3MTZDNCAxMC43MDIgNC4yMTA3MSAxMS4yMTA3IDQuNTg1NzkgMTEuNTg1OFoiIHN0cm9rZT0iIzAwRkZGMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                          styie={{ color: "transparent" }}
                        />
                        Listing Price
                      </div>
                      {/* <div className="nft-detail__listing-price--right">
                        <img
                          alt=""
                          width="0"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE2IDE0IiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNMSAxMC41VjIuMjg1NzFMNC44ODg4OSA2LjIxNDI5TDggMS41TDExLjExMTEgNi4yMTQyOUwxNSAyLjI4NTcxVjEwLjVDMTUgMTEuNjA0NiAxNC4xMDQ2IDEyLjUgMTMgMTIuNUgzQzEuODk1NDMgMTIuNSAxIDExLjYwNDYgMSAxMC41WiIgc3Ryb2tlPSIjQ0ZBMjRBIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+"
                          styie={{ color: "transparent" }}
                        />
                        Creator fee 10%
                      </div> */}
                    </div>
                    <div className="nft-detail__listing-price--price">
                      <img
                        alt=""
                        width="0"
                        height="0"
                        decoding="async"
                        data-nimg="1"
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4N18yODM5KSI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMV8xODdfMjgzOSkiPgo8cGF0aCBkPSJNNiAwQzIuNjY2NjcgMCAwIDIuNjY2NjcgMCA2QzAgOS4zMzMzMyAyLjY2NjY3IDEyIDYgMTJDOS4zMzMzMyAxMiAxMiA5LjMzMzMzIDEyIDZDMTIgMi42NjY2NyA5LjMzMzMzIDAgNiAwWk04LjMzMzMzIDEwLjUzMzNDNy40NjY2NyAxMSA2LjYgMTEuMTMzMyA1LjY2NjY3IDExLjA2NjdDNC40NjY2NyAxMSAzLjQgMTAuNTMzMyAyLjQ2NjY3IDkuNzMzMzNDMi4zMzMzMyA5LjYgMi4zMzMzMyA5LjYgMi40NjY2NyA5LjQ2NjY3QzMgOC45MzMzMyAzLjUzMzMzIDguNDY2NjcgNCA3LjkzMzMzQzQuMDY2NjcgNy44NjY2NyA0LjEzMzMzIDcuODY2NjcgNC4yNjY2NyA3LjkzMzMzQzUuNTMzMzMgOS4wNjY2NyA3LjUzMzMzIDguNjY2NjcgOC4yNjY2NyA3LjJDOS4wNjY2NyA1LjYgOCAzLjczMzMzIDYuMjY2NjcgMy41MzMzM0M1LjUzMzMzIDMuNDY2NjcgNC44NjY2NyAzLjY2NjY3IDQuMjY2NjcgNC4xMzMzM0M0LjEzMzMzIDQuMiA0LjA2NjY3IDQuMiA0IDQuMTMzMzNDMy40NjY2NyAzLjYgMi45MzMzMyAzLjA2NjY3IDIuNCAyLjUzMzMzQzIuMzMzMzMgMi40NjY2NyAyLjMzMzMzIDIuNCAyLjQgMi4zMzMzM0MyLjkzMzMzIDEuODY2NjcgMy41MzMzMyAxLjQ2NjY3IDQuMiAxLjI2NjY3QzQuNzMzMzMgMSA1LjMzMzMzIDAuOTMzMzMzIDUuOTMzMzMgMC45MzMzMzNDNy45MzMzMyAxIDkuNDY2NjcgMS44NjY2NyAxMC40NjY3IDMuNkMxMC45MzMzIDQuNDY2NjcgMTEuMTMzMyA1LjMzMzMzIDExLjA2NjcgNi4zMzMzM0MxMC45MzMzIDguMiAxMCA5LjYgOC4zMzMzMyAxMC41MzMzWk00LjYgNkM0LjYgNS4yIDUuMiA0LjYgNiA0LjZDNi44IDQuNiA3LjQgNS4yIDcuNCA2QzcuNCA2LjggNi44IDcuNCA2IDcuNEM1LjIgNy40IDQuNiA2LjggNC42IDZaIiBmaWxsPSIjMDBGRkYwIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xODdfMjgzOSI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8xODdfMjgzOSI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                        styie={{ color: "transparent" }}
                      />
                      <span className="cost">180</span>{" "}
                      <span className="amount ">($12.03)</span>
                    </div>
                    <div className="nft-detail__listing-price--action ">
                      <button
                        type="button"
                        className="button button--primary  "
                      >
                        BUY NOW
                      </button>
                      <button
                        type="button"
                        className="button button--secondary  "
                      >
                        MAKE OFFER
                      </button>
                    </div>
                  </div>
                </div>
                <div className="nft-detail__details widget">
                  <div className="nft-detail__details--title">Details</div>
                  <div className="nft-detail__details--content">
                    <div className="nft-detail__details--item">
                      <div className="nft-detail__details--colum left">
                        <img
                          alt=""
                          width="0"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDkuNUgxMk04IDE4LjVIMTJNMTIgOS41SDEwQzguODk1NDMgOS41IDggMTAuMzk1NCA4IDExLjVWMTJDOCAxMy4xMDQ2IDguODk1NDMgMTQgMTAgMTRIMTRDMTUuMTA0NiAxNCAxNiAxNC44OTU0IDE2IDE2VjE2LjVDMTYgMTcuNjA0NiAxNS4xMDQ2IDE4LjUgMTQgMTguNUgxMk0xMiA5LjVWOE0xMiA5LjVWMTguNU0xMiAxOC41VjIwIiBzdHJva2U9IiMwMEZGRjAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNiA0LjVMMTggNC41IiBzdHJva2U9IiMwMEZGRjAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K"
                          styie={{ color: "transparent" }}
                        />
                        Top bidd
                      </div>
                      <div className="nft-detail__details--colum right coin">
                        <img
                          alt=""
                          width="0"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4N18yODMxKSI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMV8xODdfMjgzMSkiPgo8cGF0aCBkPSJNNiAwQzIuNjY2NjcgMCAwIDIuNjY2NjcgMCA2QzAgOS4zMzMzMyAyLjY2NjY3IDEyIDYgMTJDOS4zMzMzMyAxMiAxMiA5LjMzMzMzIDEyIDZDMTIgMi42NjY2NyA5LjMzMzMzIDAgNiAwWk04LjMzMzMzIDEwLjUzMzNDNy40NjY2NyAxMSA2LjYgMTEuMTMzMyA1LjY2NjY3IDExLjA2NjdDNC40NjY2NyAxMSAzLjQgMTAuNTMzMyAyLjQ2NjY3IDkuNzMzMzNDMi4zMzMzMyA5LjYgMi4zMzMzMyA5LjYgMi40NjY2NyA5LjQ2NjY3QzMgOC45MzMzMyAzLjUzMzMzIDguNDY2NjcgNCA3LjkzMzMzQzQuMDY2NjcgNy44NjY2NyA0LjEzMzMzIDcuODY2NjcgNC4yNjY2NyA3LjkzMzMzQzUuNTMzMzMgOS4wNjY2NyA3LjUzMzMzIDguNjY2NjcgOC4yNjY2NyA3LjJDOS4wNjY2NyA1LjYgOCAzLjczMzMzIDYuMjY2NjcgMy41MzMzM0M1LjUzMzMzIDMuNDY2NjcgNC44NjY2NyAzLjY2NjY3IDQuMjY2NjcgNC4xMzMzM0M0LjEzMzMzIDQuMiA0LjA2NjY3IDQuMiA0IDQuMTMzMzNDMy40NjY2NyAzLjYgMi45MzMzMyAzLjA2NjY3IDIuNCAyLjUzMzMzQzIuMzMzMzMgMi40NjY2NyAyLjMzMzMzIDIuNCAyLjQgMi4zMzMzM0MyLjkzMzMzIDEuODY2NjcgMy41MzMzMyAxLjQ2NjY3IDQuMiAxLjI2NjY3QzQuNzMzMzMgMSA1LjMzMzMzIDAuOTMzMzMzIDUuOTMzMzMgMC45MzMzMzNDNy45MzMzMyAxIDkuNDY2NjcgMS44NjY2NyAxMC40NjY3IDMuNkMxMC45MzMzIDQuNDY2NjcgMTEuMTMzMyA1LjMzMzMzIDExLjA2NjcgNi4zMzMzM0MxMC45MzMzIDguMiAxMCA5LjYgOC4zMzMzMyAxMC41MzMzWk00LjYgNkM0LjYgNS4yIDUuMiA0LjYgNiA0LjZDNi44IDQuNiA3LjQgNS4yIDcuNCA2QzcuNCA2LjggNi44IDcuNCA2IDcuNEM1LjIgNy40IDQuNiA2LjggNC42IDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTg3XzI4MzEiPgo8cmVjdCB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjxjbGlwUGF0aCBpZD0iY2xpcDFfMTg3XzI4MzEiPgo8cmVjdCB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="
                          styie={{ color: "transparent" }}
                        />
                        0
                      </div>
                    </div>
                    <div className="nft-detail__details--item">
                      <div className="nft-detail__details--colum left">
                        <img
                          alt=""
                          width="0"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjUgMTlIOUM2Ljc5MDg2IDE5IDUgMTcuMjA5MSA1IDE1VjVMNy42MjUgNi43NUwxMC4yNSA1TDEyLjg3NSA2Ljc1TDE1LjUgNVYxMk0xNS41IDE5VjEyTTE1LjUgMTlWMTlDMTcuNDMzIDE5IDE5IDE3LjQzMyAxOSAxNS41VjEySDE1LjVNOC41IDkuMzc1SDEyTTguNSAxMi44NzVIMTJNOC41IDE2LjM3NUgxMiIgc3Ryb2tlPSIjMDBGRkYwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                          styie={{ color: "transparent" }}
                        />
                        Last Sale
                      </div>
                      <div className="nft-detail__details--colum right coin">
                        <img
                          alt=""
                          width="0"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4N18yODMxKSI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMV8xODdfMjgzMSkiPgo8cGF0aCBkPSJNNiAwQzIuNjY2NjcgMCAwIDIuNjY2NjcgMCA2QzAgOS4zMzMzMyAyLjY2NjY3IDEyIDYgMTJDOS4zMzMzMyAxMiAxMiA5LjMzMzMzIDEyIDZDMTIgMi42NjY2NyA5LjMzMzMzIDAgNiAwWk04LjMzMzMzIDEwLjUzMzNDNy40NjY2NyAxMSA2LjYgMTEuMTMzMyA1LjY2NjY3IDExLjA2NjdDNC40NjY2NyAxMSAzLjQgMTAuNTMzMyAyLjQ2NjY3IDkuNzMzMzNDMi4zMzMzMyA5LjYgMi4zMzMzMyA5LjYgMi40NjY2NyA5LjQ2NjY3QzMgOC45MzMzMyAzLjUzMzMzIDguNDY2NjcgNCA3LjkzMzMzQzQuMDY2NjcgNy44NjY2NyA0LjEzMzMzIDcuODY2NjcgNC4yNjY2NyA3LjkzMzMzQzUuNTMzMzMgOS4wNjY2NyA3LjUzMzMzIDguNjY2NjcgOC4yNjY2NyA3LjJDOS4wNjY2NyA1LjYgOCAzLjczMzMzIDYuMjY2NjcgMy41MzMzM0M1LjUzMzMzIDMuNDY2NjcgNC44NjY2NyAzLjY2NjY3IDQuMjY2NjcgNC4xMzMzM0M0LjEzMzMzIDQuMiA0LjA2NjY3IDQuMiA0IDQuMTMzMzNDMy40NjY2NyAzLjYgMi45MzMzMyAzLjA2NjY3IDIuNCAyLjUzMzMzQzIuMzMzMzMgMi40NjY2NyAyLjMzMzMzIDIuNCAyLjQgMi4zMzMzM0MyLjkzMzMzIDEuODY2NjcgMy41MzMzMyAxLjQ2NjY3IDQuMiAxLjI2NjY3QzQuNzMzMzMgMSA1LjMzMzMzIDAuOTMzMzMzIDUuOTMzMzMgMC45MzMzMzNDNy45MzMzMyAxIDkuNDY2NjcgMS44NjY2NyAxMC40NjY3IDMuNkMxMC45MzMzIDQuNDY2NjcgMTEuMTMzMyA1LjMzMzMzIDExLjA2NjcgNi4zMzMzM0MxMC45MzMzIDguMiAxMCA5LjYgOC4zMzMzMyAxMC41MzMzWk00LjYgNkM0LjYgNS4yIDUuMiA0LjYgNiA0LjZDNi44IDQuNiA3LjQgNS4yIDcuNCA2QzcuNCA2LjggNi44IDcuNCA2IDcuNEM1LjIgNy40IDQuNiA2LjggNC42IDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTg3XzI4MzEiPgo8cmVjdCB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjxjbGlwUGF0aCBpZD0iY2xpcDFfMTg3XzI4MzEiPgo8cmVjdCB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="
                          styie={{ color: "transparent" }}
                        />
                        0
                      </div>
                    </div>
                    <div className="nft-detail__details--item">
                      <div className="nft-detail__details--colum left">
                        <img
                          alt=""
                          width="0"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDE3LjMzMzNDMTkgMTguODA2MSAxNS44NjYgMjAgMTIgMjBDOC4xMzQwMSAyMCA1IDE4LjgwNjEgNSAxNy4zMzMzQzUgMTUuODYwNiA4LjEzNDAxIDE0LjY2NjcgMTIgMTQuNjY2N0MxNS44NjYgMTQuNjY2NyAxOSAxNS44NjA2IDE5IDE3LjMzMzNaIiBzdHJva2U9IiMwMEZGRjAiLz4KPHBhdGggZD0iTTE1LjUgNy41NTU1NkMxNS41IDkuNTE5MjMgMTMuOTMzIDExLjExMTEgMTIgMTEuMTExMUMxMC4wNjcgMTEuMTExMSA4LjUgOS41MTkyMyA4LjUgNy41NTU1NkM4LjUgNS41OTE4OCAxMC4wNjcgNCAxMiA0QzEzLjkzMyA0IDE1LjUgNS41OTE4OCAxNS41IDcuNTU1NTZaIiBzdHJva2U9IiMwMEZGRjAiLz4KPC9zdmc+Cg=="
                          styie={{ color: "transparent" }}
                        />
                        Owner
                      </div>
                      <div className="nft-detail__details--colum right owner">
                        <a
                          target="_blank"
                          href="/profile/core1uq5wn694a5lfsy4uj3m6hevpdxqah8kks0zdrg/"
                        >
                          elpedro.core
                        </a>
                        <div>
                          <div className="tooltip copy">
                            <img
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDhIMTBDOC44OTU0MyA4IDggOC44OTU0MyA4IDEwVjE2TTE2IDhIMThDMTkuMTA0NiA4IDIwIDguODk1NDMgMjAgMTBWMThDMjAgMTkuMTA0NiAxOS4xMDQ2IDIwIDE4IDIwSDEwQzguODk1NDMgMjAgOCAxOS4xMDQ2IDggMThWMTZNMTYgOFY2QzE2IDQuODk1NDMgMTUuMTA0NiA0IDE0IDRINkM0Ljg5NTQzIDQgNCA0Ljg5NTQzIDQgNlYxNEM0IDE1LjEwNDYgNC44OTU0MyAxNiA2IDE2SDgiIHN0cm9rZT0iIzAwRkZGMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                              className="copy"
                              alt="test"
                            />
                            <span className="tooltiptext">
                              Copy to clipboard
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nft-detail__details--item">
                      <div className="nft-detail__details--colum left">
                        <img
                          alt=""
                          width="0"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgMTVWNy43MTQyOUw4Ljg4ODg5IDExLjI4NTdMMTIgN0wxNS4xMTExIDExLjI4NTdMMTkgNy43MTQyOVYxNUMxOSAxNi4xMDQ2IDE4LjEwNDYgMTcgMTcgMTdIN0M1Ljg5NTQzIDE3IDUgMTYuMTA0NiA1IDE1WiIgc3Ryb2tlPSIjMDBGRkYwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                          styie={{ color: "transparent" }}
                        />
                        Creator Fee
                      </div>
                      <div className="nft-detail__details--colum right">
                        10%
                      </div>
                    </div>
                    <div className="nft-detail__details--item">
                      <div className="nft-detail__details--colum left">
                        <img
                          alt=""
                          width="0"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDNMMTQuNzgxMiA4LjU5NjA1TDIxIDkuNDkzNDJMMTYuNSAxMy44NDkzTDE3LjU2MjMgMjBMMTIgMTcuMDk2MUw2LjQzNzY5IDIwTDcuNSAxMy44NDkzTDMgOS40OTM0Mkw5LjIxODg1IDguNTk2MDVMMTIgM1oiIHN0cm9rZT0iIzAwRkZGMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                          styie={{ color: "transparent" }}
                        />
                        Rarity Score
                      </div>
                      <div className="nft-detail__details--colum right">
                        103.37
                      </div>
                    </div>
                    <div className="nft-detail__details--item">
                      <div className="nft-detail__details--colum left">
                        <img
                          alt=""
                          width="0"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNTAzODYgNy43MTIwOEwxMS41MDM5IDQuMjgzNTFDMTEuODExMyA0LjEwNzgzIDEyLjE4ODcgNC4xMDc4MyAxMi40OTYxIDQuMjgzNTFMMTguNDk2MSA3LjcxMjA4QzE4LjgwNzcgNy44OTAxMiAxOSA4LjIyMTQ3IDE5IDguNTgwMzJWMTUuNDE5N0MxOSAxNS43Nzg1IDE4LjgwNzcgMTYuMTA5OSAxOC40OTYxIDE2LjI4NzlMMTIuNDk2MSAxOS43MTY1QzEyLjE4ODcgMTkuODkyMiAxMS44MTEzIDE5Ljg5MjIgMTEuNTAzOSAxOS43MTY1TDUuNTAzODYgMTYuMjg3OUM1LjE5MjI5IDE2LjEwOTkgNSAxNS43Nzg1IDUgMTUuNDE5N1Y4LjU4MDMyQzUgOC4yMjE0NyA1LjE5MjI5IDcuODkwMTIgNS41MDM4NiA3LjcxMjA4WiIgc3Ryb2tlPSIjMDBGRkYwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                          styie={{ color: "transparent" }}
                        />
                        NFT Rank
                      </div>
                      <div className="nft-detail__details--colum right">
                        7205
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nft-detail__attributes widget">
                  <div className="nft-detail__attributes--title">
                    attributes
                  </div>
                  <div className="nft-detail__attributes--content">
                    <div className="nft-detail__attributes--item">
                      <div className="nft-detail__attributes--item-attribute">
                        Background
                      </div>
                      <div className="nft-detail__attributes--item-category">
                        Core Red digital
                      </div>
                    </div>
                    <div className="nft-detail__attributes--item">
                      <div className="nft-detail__attributes--item-attribute">
                        Wings
                      </div>
                      <div className="nft-detail__attributes--item-category">
                        No Wings
                      </div>
                    </div>
                    <div className="nft-detail__attributes--item">
                      <div className="nft-detail__attributes--item-attribute">
                        Base
                      </div>
                      <div className="nft-detail__attributes--item-category">
                        Blue
                      </div>
                    </div>
                    <div className="nft-detail__attributes--item">
                      <div className="nft-detail__attributes--item-attribute">
                        Clothing
                      </div>
                      <div className="nft-detail__attributes--item-category">
                        No Clothing
                      </div>
                    </div>
                    <div className="nft-detail__attributes--item">
                      <div className="nft-detail__attributes--item-attribute">
                        Head
                      </div>
                      <div className="nft-detail__attributes--item-category">
                        Spikey hair Black
                      </div>
                    </div>
                    <div className="nft-detail__attributes--item">
                      <div className="nft-detail__attributes--item-attribute">
                        Mouth
                      </div>
                      <div className="nft-detail__attributes--item-category">
                        Regular
                      </div>
                    </div>
                    <div className="nft-detail__attributes--item">
                      <div className="nft-detail__attributes--item-attribute">
                        Eyes
                      </div>
                      <div className="nft-detail__attributes--item-category">
                        Regular Eyes
                      </div>
                    </div>
                    <div className="nft-detail__attributes--item">
                      <div className="nft-detail__attributes--item-attribute">
                        Pets
                      </div>
                      <div className="nft-detail__attributes--item-category">
                        No Pet
                      </div>
                    </div>
                    <div className="nft-detail__attributes--item">
                      <div className="nft-detail__attributes--item-attribute">
                        Attribute Count
                      </div>
                      <div className="nft-detail__attributes--item-category">
                        8
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="nft-detail__activities widget mobile">
                  <div className="nft-detail__activities--title">Activity</div>
                  <div className="nft-detail__activities--content">
                    <table>
                      <thead>
                        <tr>
                          <th>Action</th>
                          <th>Price</th>
                          <th>From</th>
                          <th>To</th>
                          <th>Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="type-activity">
                            <img
                              alt=""
                              width="0"
                              height="0"
                              decoding="async"
                              data-nimg="1"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDIxSDVDMi43OTA4NiAyMSAxIDE5LjIwOTEgMSAxN1YxTDQuNzUgMy41TDguNSAxTDEyLjI1IDMuNUwxNiAxVjExTTE2IDIxVjExTTE2IDIxSDE3QzE5LjIwOTEgMjEgMjEgMTkuMjA5MSAyMSAxN1YxMUgxNk02IDcuMjVIMTFNNiAxMi4yNUgxMU02IDE3LjI1SDExIiBzdHJva2U9IiMwMEZGRjAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                              styie={{ color: "transparent" }}
                            />
                            Update Listing
                          </td>
                          <td className="price">
                            <img
                              alt=""
                              width="0"
                              height="0"
                              decoding="async"
                              data-nimg="1"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4N18yODM5KSI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMV8xODdfMjgzOSkiPgo8cGF0aCBkPSJNNiAwQzIuNjY2NjcgMCAwIDIuNjY2NjcgMCA2QzAgOS4zMzMzMyAyLjY2NjY3IDEyIDYgMTJDOS4zMzMzMyAxMiAxMiA5LjMzMzMzIDEyIDZDMTIgMi42NjY2NyA5LjMzMzMzIDAgNiAwWk04LjMzMzMzIDEwLjUzMzNDNy40NjY2NyAxMSA2LjYgMTEuMTMzMyA1LjY2NjY3IDExLjA2NjdDNC40NjY2NyAxMSAzLjQgMTAuNTMzMyAyLjQ2NjY3IDkuNzMzMzNDMi4zMzMzMyA5LjYgMi4zMzMzMyA5LjYgMi40NjY2NyA5LjQ2NjY3QzMgOC45MzMzMyAzLjUzMzMzIDguNDY2NjcgNCA3LjkzMzMzQzQuMDY2NjcgNy44NjY2NyA0LjEzMzMzIDcuODY2NjcgNC4yNjY2NyA3LjkzMzMzQzUuNTMzMzMgOS4wNjY2NyA3LjUzMzMzIDguNjY2NjcgOC4yNjY2NyA3LjJDOS4wNjY2NyA1LjYgOCAzLjczMzMzIDYuMjY2NjcgMy41MzMzM0M1LjUzMzMzIDMuNDY2NjcgNC44NjY2NyAzLjY2NjY3IDQuMjY2NjcgNC4xMzMzM0M0LjEzMzMzIDQuMiA0LjA2NjY3IDQuMiA0IDQuMTMzMzNDMy40NjY2NyAzLjYgMi45MzMzMyAzLjA2NjY3IDIuNCAyLjUzMzMzQzIuMzMzMzMgMi40NjY2NyAyLjMzMzMzIDIuNCAyLjQgMi4zMzMzM0MyLjkzMzMzIDEuODY2NjcgMy41MzMzMyAxLjQ2NjY3IDQuMiAxLjI2NjY3QzQuNzMzMzMgMSA1LjMzMzMzIDAuOTMzMzMzIDUuOTMzMzMgMC45MzMzMzNDNy45MzMzMyAxIDkuNDY2NjcgMS44NjY2NyAxMC40NjY3IDMuNkMxMC45MzMzIDQuNDY2NjcgMTEuMTMzMyA1LjMzMzMzIDExLjA2NjcgNi4zMzMzM0MxMC45MzMzIDguMiAxMCA5LjYgOC4zMzMzMyAxMC41MzMzWk00LjYgNkM0LjYgNS4yIDUuMiA0LjYgNiA0LjZDNi44IDQuNiA3LjQgNS4yIDcuNCA2QzcuNCA2LjggNi44IDcuNCA2IDcuNEM1LjIgNy40IDQuNiA2LjggNC42IDZaIiBmaWxsPSIjMDBGRkYwIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xODdfMjgzOSI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8xODdfMjgzOSI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                              styie={{ color: "transparent" }}
                            />
                            180
                          </td>
                          <td>elpe...ore</td>
                          <td>-</td>
                          <td>1 day ago</td>
                        </tr>
                        <tr>
                          <td className="type-activity">
                            <img
                              alt=""
                              width="0"
                              height="0"
                              decoding="async"
                              data-nimg="1"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDIxSDVDMi43OTA4NiAyMSAxIDE5LjIwOTEgMSAxN1YxTDQuNzUgMy41TDguNSAxTDEyLjI1IDMuNUwxNiAxVjExTTE2IDIxVjExTTE2IDIxSDE3QzE5LjIwOTEgMjEgMjEgMTkuMjA5MSAyMSAxN1YxMUgxNk02IDcuMjVIMTFNNiAxMi4yNUgxMU02IDE3LjI1SDExIiBzdHJva2U9IiMwMEZGRjAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                              styie={{ color: "transparent" }}
                            />
                            List
                          </td>
                          <td className="price">
                            <img
                              alt=""
                              width="0"
                              height="0"
                              decoding="async"
                              data-nimg="1"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4N18yODM5KSI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMV8xODdfMjgzOSkiPgo8cGF0aCBkPSJNNiAwQzIuNjY2NjcgMCAwIDIuNjY2NjcgMCA2QzAgOS4zMzMzMyAyLjY2NjY3IDEyIDYgMTJDOS4zMzMzMyAxMiAxMiA5LjMzMzMzIDEyIDZDMTIgMi42NjY2NyA5LjMzMzMzIDAgNiAwWk04LjMzMzMzIDEwLjUzMzNDNy40NjY2NyAxMSA2LjYgMTEuMTMzMyA1LjY2NjY3IDExLjA2NjdDNC40NjY2NyAxMSAzLjQgMTAuNTMzMyAyLjQ2NjY3IDkuNzMzMzNDMi4zMzMzMyA5LjYgMi4zMzMzMyA5LjYgMi40NjY2NyA5LjQ2NjY3QzMgOC45MzMzMyAzLjUzMzMzIDguNDY2NjcgNCA3LjkzMzMzQzQuMDY2NjcgNy44NjY2NyA0LjEzMzMzIDcuODY2NjcgNC4yNjY2NyA3LjkzMzMzQzUuNTMzMzMgOS4wNjY2NyA3LjUzMzMzIDguNjY2NjcgOC4yNjY2NyA3LjJDOS4wNjY2NyA1LjYgOCAzLjczMzMzIDYuMjY2NjcgMy41MzMzM0M1LjUzMzMzIDMuNDY2NjcgNC44NjY2NyAzLjY2NjY3IDQuMjY2NjcgNC4xMzMzM0M0LjEzMzMzIDQuMiA0LjA2NjY3IDQuMiA0IDQuMTMzMzNDMy40NjY2NyAzLjYgMi45MzMzMyAzLjA2NjY3IDIuNCAyLjUzMzMzQzIuMzMzMzMgMi40NjY2NyAyLjMzMzMzIDIuNCAyLjQgMi4zMzMzM0MyLjkzMzMzIDEuODY2NjcgMy41MzMzMyAxLjQ2NjY3IDQuMiAxLjI2NjY3QzQuNzMzMzMgMSA1LjMzMzMzIDAuOTMzMzMzIDUuOTMzMzMgMC45MzMzMzNDNy45MzMzMyAxIDkuNDY2NjcgMS44NjY2NyAxMC40NjY3IDMuNkMxMC45MzMzIDQuNDY2NjcgMTEuMTMzMyA1LjMzMzMzIDExLjA2NjcgNi4zMzMzM0MxMC45MzMzIDguMiAxMCA5LjYgOC4zMzMzMyAxMC41MzMzWk00LjYgNkM0LjYgNS4yIDUuMiA0LjYgNiA0LjZDNi44IDQuNiA3LjQgNS4yIDcuNCA2QzcuNCA2LjggNi44IDcuNCA2IDcuNEM1LjIgNy40IDQuNiA2LjggNC42IDZaIiBmaWxsPSIjMDBGRkYwIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xODdfMjgzOSI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8xODdfMjgzOSI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                              styie={{ color: "transparent" }}
                            />
                            250
                          </td>
                          <td>elpe...ore</td>
                          <td>-</td>
                          <td>2 days ago</td>
                        </tr>
                        <tr>
                          <td className="type-activity">
                            <img
                              alt=""
                              width="0"
                              height="0"
                              decoding="async"
                              data-nimg="1"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyMCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNSA1Ljc4NTcySDE0LjUiIHN0cm9rZT0iIzAwRkZGMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xLjQgNy42MDQ3N0w4LjExNDI5IDE2LjU1NzFDOC40OTE5OSAxNy4wNjA4IDkuMDg0NzcgMTcuMzU3MSA5LjcxNDI5IDE3LjM1NzFIMTAuMjg1N0MxMC45MTUyIDE3LjM1NzEgMTEuNTA4IDE3LjA2MDggMTEuODg1NyAxNi41NTcxTDE4LjYgNy42MDQ3NkMxOC44NTk2IDcuMjU4NTcgMTkgNi44Mzc1MSAxOSA2LjQwNDc3VjQuNjg1NTdDMTkgNC4xNTUxNCAxOC43ODkzIDMuNjQ2NDMgMTguNDE0MiAzLjI3MTM2TDE2LjM3MTUgMS4yMjg2NUMxNS45OTY0IDAuODUzNTc0IDE1LjQ4NzcgMC42NDI4NiAxNC45NTczIDAuNjQyODZINS4wNDI3MUM0LjUxMjI4IDAuNjQyODYgNC4wMDM1NyAwLjg1MzU3NCAzLjYyODUgMS4yMjg2NUwxLjU4NTc5IDMuMjcxMzZDMS4yMTA3MSAzLjY0NjQzIDEgNC4xNTUxNCAxIDQuNjg1NTdWNi40MDQ3N0MxIDYuODM3NTEgMS4xNDAzNiA3LjI1ODU3IDEuNCA3LjYwNDc3WiIgc3Ryb2tlPSIjMDBGRkYwIi8+Cjwvc3ZnPgo="
                              styie={{ color: "transparent" }}
                            />
                            Mint
                          </td>
                          <td className="price">
                            {" "}
                            <img
                              alt=""
                              width="0"
                              height="0"
                              decoding="async"
                              data-nimg="1"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4N18yODM5KSI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMV8xODdfMjgzOSkiPgo8cGF0aCBkPSJNNiAwQzIuNjY2NjcgMCAwIDIuNjY2NjcgMCA2QzAgOS4zMzMzMyAyLjY2NjY3IDEyIDYgMTJDOS4zMzMzMyAxMiAxMiA5LjMzMzMzIDEyIDZDMTIgMi42NjY2NyA5LjMzMzMzIDAgNiAwWk04LjMzMzMzIDEwLjUzMzNDNy40NjY2NyAxMSA2LjYgMTEuMTMzMyA1LjY2NjY3IDExLjA2NjdDNC40NjY2NyAxMSAzLjQgMTAuNTMzMyAyLjQ2NjY3IDkuNzMzMzNDMi4zMzMzMyA5LjYgMi4zMzMzMyA5LjYgMi40NjY2NyA5LjQ2NjY3QzMgOC45MzMzMyAzLjUzMzMzIDguNDY2NjcgNCA3LjkzMzMzQzQuMDY2NjcgNy44NjY2NyA0LjEzMzMzIDcuODY2NjcgNC4yNjY2NyA3LjkzMzMzQzUuNTMzMzMgOS4wNjY2NyA3LjUzMzMzIDguNjY2NjcgOC4yNjY2NyA3LjJDOS4wNjY2NyA1LjYgOCAzLjczMzMzIDYuMjY2NjcgMy41MzMzM0M1LjUzMzMzIDMuNDY2NjcgNC44NjY2NyAzLjY2NjY3IDQuMjY2NjcgNC4xMzMzM0M0LjEzMzMzIDQuMiA0LjA2NjY3IDQuMiA0IDQuMTMzMzNDMy40NjY2NyAzLjYgMi45MzMzMyAzLjA2NjY3IDIuNCAyLjUzMzMzQzIuMzMzMzMgMi40NjY2NyAyLjMzMzMzIDIuNCAyLjQgMi4zMzMzM0MyLjkzMzMzIDEuODY2NjcgMy41MzMzMyAxLjQ2NjY3IDQuMiAxLjI2NjY3QzQuNzMzMzMgMSA1LjMzMzMzIDAuOTMzMzMzIDUuOTMzMzMgMC45MzMzMzNDNy45MzMzMyAxIDkuNDY2NjcgMS44NjY2NyAxMC40NjY3IDMuNkMxMC45MzMzIDQuNDY2NjcgMTEuMTMzMyA1LjMzMzMzIDExLjA2NjcgNi4zMzMzM0MxMC45MzMzIDguMiAxMCA5LjYgOC4zMzMzMyAxMC41MzMzWk00LjYgNkM0LjYgNS4yIDUuMiA0LjYgNiA0LjZDNi44IDQuNiA3LjQgNS4yIDcuNCA2QzcuNCA2LjggNi44IDcuNCA2IDcuNEM1LjIgNy40IDQuNiA2LjggNC42IDZaIiBmaWxsPSIjMDBGRkYwIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xODdfMjgzOSI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8xODdfMjgzOSI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                              styie={{ color: "transparent" }}
                            />
                            1
                          </td>
                          <td>core...hpk</td>
                          <td>elpe...ore</td>
                          <td>2 days ago</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailNft;
