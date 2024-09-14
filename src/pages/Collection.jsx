import SubNav from "../components/SubNav";
import ColCard from "../components/Cards/ColCard";
import { useSearchParams } from "react-router-dom";
import ColLC from "../components/Cards/ColLC";

// //////////////
import React, { useEffect, useRef, useState } from "react";
// import cn from "classnames";
// import styles from "./Profile.module.sass";
// import defaultLogo from "images/default_logo.png";
import { config, ITEM_ACTION_TYPES, PLATFORM_NETWORKS } from "../config.js";
import { useNavigate, useParams } from "react-router-dom";
import { isEmpty, saveMultipleItemActivity } from "../lib/methods";
import { useAppDispatch, useAppSelector } from "../hooks";
// import ButtonPrimary from "components/Button/ButtonPrimary";
import {
  changeBulkOpsMode,
  changeDetailedCollection,
  emptyBulkSelectedArray,
  selectBulkOpsMode,
  selectBulkSelectedArray,
  selectDetailedCollection,
  setBulkSelectArray,
} from "../reducers/collection.reducers";
import {
  selectCurrentNetworkSymbol,
  selectCurrentUser,
  selectWalletStatus,
} from "../reducers/auth.reducers";
// import {getItemPriceUnitText} from "containers/NftDetailPage/ItemPriceUnitText";
// import VideoForBannerPreview from "components/Card/VideoForBannerPreview";
import { nanoid } from "@reduxjs/toolkit";
import parse from "html-react-parser";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
// import {useSigningClient} from "app/cosmwasm";
// import NcModal from "components/NcComponent/NcModal";
// import CopyButton from "components/Button/CopyButton";
// import {BsLink} from "react-icons/bs";
// import NcImage from "components/NcComponent/NcImage";
// import {Backdrop, CircularProgress, Switch, Tooltip} from "@mui/material";
// import Checkbox from "components/Button/Checkbox";
// import Label from "components/StyleComponent/Label";
// import {IoIosCloseCircle} from "react-icons/io";
// import ModalDelete from "components/Modal/ModalDelete";
// import ModalTransferToken from "components/Modal/ModalTransferToken";
// import PutSale from "containers/NftDetailPage/PutSale";
// import CancelSale from "containers/NftDetailPage/RemoveSale";
// import Input from "components/StyleComponent/Input";
// import CardNFTComponent from "components/Card/CardNFTComponent";
// import {calcFloorPrice, isVideo} from "utils/utils";
import {
  getCollectionDetails,
  getSearchInaCollection,
  updateExplicitApi,
} from "../api/collections";
// import MainSection from "components/Section/MainSection";
// import CollectionInfo from "./collectionInfo";
import { useItemsApiServices } from "../api/useItemsApiServices";
import { useWalletOperations } from "../hooks_/useWalletOperations";
import { calcFloorPrice } from "../lib/utils";
// /////////////

const Collection = () => {
  const [searchParams] = useSearchParams();
  const collectionId = searchParams.get("colId");

  // ///
  const { bulkListNFT, bulkCancelSaleNFT, bulkBurnNFT, bulkTransferNFT } =
    useAuth();
  const currentNetworkSymbol = 1;
  const collection = useAppSelector(selectDetailedCollection);
  const bulkSelectedArray = useAppSelector(selectBulkSelectedArray);
  const showBulkFeatures = useAppSelector(selectBulkOpsMode);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentUsr = useAppSelector(selectCurrentUser);
  const [DEMO_NFT_ID] = React.useState(nanoid());
  const [collectionMinPrice, setCollectionMinPrice] = useState(0);
  const {
    bulkBurnApi,
    bulkPutOnSaleApi,
    bulkRemoveFromSaleApi,
    bulkTransferApi,
  } = useItemsApiServices();
  const [items, setItems] = useState([]);
  const [viewNoMore, setViewNoMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mintModal, setMintModal] = useState(false);
  const [showExplicit, setShowExplicit] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [visibleModalSale, setVisibleModalSale] = useState(false);
  const [visibleModalDelist, setVisibleModalDelist] = useState(false);
  const [visibleModalTransfer, setVisibleModalTransfer] = useState(false);
  const [visibleModalBurn, setVisibleModalBurn] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const { checkWalletAddrAndChainId } = useWalletOperations();
  const more = useRef();
  // //

  const onBulkTransfer = async (toAddr) => {
    let checkResult = await checkWalletAddrAndChainId();
    if (!checkResult) {
      return;
    }
    const isNotOwner = bulkSelectedArray.some(
      (item) => item.owner?.address !== currentUsr.address
    );
    if (isNotOwner) {
      toast.error("You are not the owner of these NFTs.");
      return;
    }

    const hasBidsAndOnSale = bulkSelectedArray.some(
      (item) => item?.bids.length > 0 && item?.isSale === 2
    );
    if (hasBidsAndOnSale) {
      toast.warn(
        "You cannot transfer from sale because you had one or more bid(s) already."
      );
      return;
    }

    setVisibleModalTransfer(false);
    if (currentNetworkSymbol === PLATFORM_NETWORKS.COREUM) {
      setProcessing(true);
      try {
        const txHash = await bulkTransferNFT(
          currentUsr.address,
          collection?.cw721address,
          toAddr,
          bulkSelectedArray?.map((item) => item.tokenId)
        );

        if (txHash === -1) {
          throw new Error("Network error.");
        }

        const ids = bulkSelectedArray?.map((item) => item._id);
        const response = await bulkTransferApi(ids, currentUsr.address, toAddr);

        if (response.code !== 0) {
          throw new Error(response.message);
        }

        toast.success("You've sent items.");

        const params = {
          items: ids,
          origin: currentUsr?._id,
          destination: toAddr,
          transactionHash: txHash,
          actionType: ITEM_ACTION_TYPES.TRANSFERED,
        };

        saveMultipleItemActivity(params);
        getCollectionList(true, 0);
      } catch (error) {
        toast.error(error.message || "Failed to bulk transfer.");
      } finally {
        setProcessing(false);
        dispatch(emptyBulkSelectedArray());
        setSelectAll(false);
      }
    }
  };

  const onBulkBurn = async () => {
    let checkResult = await checkWalletAddrAndChainId();
    if (!checkResult) {
      return;
    }
    const isNotOwner = bulkSelectedArray.some(
      (item) => item.owner?.address !== currentUsr.address
    );
    if (isNotOwner) {
      toast.error("You are not the owner of these NFTs.");
      return;
    }

    const hasBidsOnSale = bulkSelectedArray.some(
      (item) => item?.bids.length > 0 && item?.isSale === 2
    );
    if (hasBidsOnSale) {
      toast.warn("You cannot burn because you had one or more bid(s) already.");
      return;
    }

    setVisibleModalBurn(false);

    if (currentNetworkSymbol === PLATFORM_NETWORKS.COREUM) {
      setProcessing(true);

      try {
        const txHash = await bulkBurnNFT(
          currentUsr.address,
          collection?.cw721address,
          bulkSelectedArray?.map((item) => item.tokenId)
        );

        if (txHash === -1) {
          throw new Error("Tx error.");
        }

        const ids = bulkSelectedArray?.map((item) => item._id);
        const response = await bulkBurnApi(ids, collection?._id);

        if (response.code !== 0) {
          throw new Error(response.message || "Error in burning items.");
        }

        toast.success("You've burnt items.");

        const params = {
          items: ids,
          origin: currentUsr?._id,
          transactionHash: txHash,
          actionType: ITEM_ACTION_TYPES.DESTROYED,
        };

        await saveMultipleItemActivity(params);
        await getCollectionList(true, 0);
      } catch (error) {
        console.error(error);
        toast.error(error.message || "Failed to Bulk Burn.");
      } finally {
        setProcessing(false);
        dispatch(emptyBulkSelectedArray());
        setSelectAll(false);
      }
    }
  };

  const onBulkDelist = async () => {
    const hasBidsOnSale = bulkSelectedArray.some(
      (item) => item?.bids.length > 0 && item?.isSale === 2
    );
    if (hasBidsOnSale) {
      toast.warn("You cannot burn because you had one or more bid(s) already.");
      return;
    }
    const isBidsOnSale = bulkSelectedArray.some((item) => item?.isSale <= 0);
    if (isBidsOnSale) {
      toast.error("Please correctly selected items on sale and try again.");
      return;
    }

    let checkResult = await checkWalletAddrAndChainId();
    if (!checkResult) {
      return;
    }
    setVisibleModalDelist(false);
    if (currentNetworkSymbol === PLATFORM_NETWORKS.COREUM) {
      setProcessing(true);
      try {
        let txHash = await bulkCancelSaleNFT(
          currentUsr.address,
          collection?.address,
          bulkSelectedArray.map((item) => item.tokenId)
        );
        if (txHash === -1) {
          throw new Error("Tx error.");
        }
        const token_ids = bulkSelectedArray.map((item) => item._id);
        const response = await bulkRemoveFromSaleApi(token_ids);
        if (response.code !== 0) {
          throw new Error(response.message || "Error in delisting items.");
        }
        toast.success("Succeed in delisting items.");

        let params = {
          items: token_ids,
          origin: currentUsr?._id,
          transactionHash: txHash,
          actionType: ITEM_ACTION_TYPES.DELISTED,
        };
        await saveMultipleItemActivity(params);
        await getCollectionList(true, 0);
      } catch (error) {
        console.error(error);
        toast.error(error.message || "Failed to Delist.");
      } finally {
        setProcessing(false);
        dispatch(emptyBulkSelectedArray());
        setSelectAll(false);
      }
    }
  };

  const onPutSale = async (price, instant, period) => {
    let checkResult = await checkWalletAddrAndChainId();
    if (!checkResult) {
      return;
    }
    const isNotOwner = bulkSelectedArray.some(
      (item) => item.owner?.address !== currentUsr.address
    );
    if (isNotOwner) {
      toast.error("You are not the owner of these NFTs.");
      return;
    }
    const isOnSale = bulkSelectedArray.some((item) => item?.isSale > 0);
    if (isOnSale) {
      toast.error(
        "Please correctly selected item(s) that is no on sale and try again."
      );
      return;
    }
    setVisibleModalSale(false);
    if (Number(price) <= 0 || isNaN(price)) {
      toast.error("Invalid price.");
      return;
    }
    var aucperiod = instant === true ? 0 : period * 24 * 3600;
    var tokenIds = bulkSelectedArray.map((item) => item.tokenId);
    if (currentNetworkSymbol === PLATFORM_NETWORKS.COREUM) {
      setProcessing(true);
      try {
        const denormArg = { native: config.COIN_MINIMAL_DENOM };
        let txhash = await bulkListNFT(
          currentUsr.address,
          collection?.cw721address,
          !instant ? "Auction" : "Fixed",
          !instant
            ? {
                Time: [
                  Math.floor(Date.now() / 1000),
                  Math.floor(Date.now() / 1000) + Math.floor(aucperiod),
                ],
              }
            : "Fixed",
          price,
          price,
          denormArg,
          tokenIds,
          collection?.address
        );
        if (txhash === -1) {
          throw new Error("Tx error.");
        }
        const response = await bulkPutOnSaleApi(
          tokenIds,
          aucperiod,
          price,
          txhash,
          collection?._id
        );
        if (response.code !== 0) {
          throw new Error(response.message || "Error in listing items.");
        }
        toast.success("Succeed put on sale.");
        const params = {
          items: bulkSelectedArray?.map((item) => item._id),
          price: price,
          origin: currentUsr._id,
          actionType: ITEM_ACTION_TYPES.LISTED,
          transactionHash: txhash,
        };
        saveMultipleItemActivity(params);
        getCollectionList(true, 0);
      } catch (error) {
        console.log(error);
        toast.error(error.message || "Failed to Bulk List.");
      } finally {
        setProcessing(false);
        dispatch(emptyBulkSelectedArray());
        setSelectAll(false);
      }
    }
  };

  // const renderSaleModalContent = () => {
  //   return (
  //     <PutSale
  //       onOk={onPutSale}
  //       onCancel={() => setVisibleModalSale(false)}
  //       multiple={bulkSelectedArray?.length}
  //     />
  //   );
  // };

  // const renderDelistModalContent = () => {
  //   return (
  //     <CancelSale
  //       multiple={bulkSelectedArray?.length}
  //       onOk={onBulkDelist}
  //       onCancel={() => setVisibleModalDelist(false)}
  //     />
  //   );
  // };

  useEffect(() => {
    dispatch(changeBulkOpsMode(false));
    dispatch(setBulkSelectArray([]));
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
    localStorage.setItem("currentItemIndex", "0");
    getCollectionList(true, 0);
    more.current = false;
    return () => {
      dispatch(changeDetailedCollection({}));
      setItems([]);
    };
  }, []);

  const getCollectionList = async (reStart, useStart) => {
    let currentItemCount = localStorage.getItem("currentItemIndex");
    if (currentItemCount === null || currentItemCount === undefined) {
      localStorage.setItem("currentItemIndex", "0");
    }
    var param = {
      start: reStart === true ? useStart : Number(currentItemCount),
      last:
        reStart === true
          ? useStart + 10
          : Number(currentItemCount) + Number(10),
    };
    param.collId = collectionId;
    param.userId = currentUsr?._id;

    if (reStart) {
      localStorage.setItem("currentItemIndex", "0");
      setItems([]);
      setProcessing(true);
    }
    try {
      const response = await getSearchInaCollection(param);
      if (response.code !== 0) {
        throw new Error(response.message);
      }
      var list = [];
      let currentInfo = localStorage.getItem("hideCollections");
      if (currentInfo === null || !currentInfo) currentInfo = "{}";
      else currentInfo = JSON.parse(currentInfo.toString());

      let currentInfo1 = localStorage.getItem("hideItems");
      if (currentInfo1 === null || currentInfo1 === undefined)
        currentInfo1 = "{}";
      else currentInfo1 = JSON.parse(currentInfo1.toString());
      for (var i = 0; i < response.list.length; i++) {
        var item = response.list[i].item_info;
        item.isLiked = response.list[i].item_info.likes.includes(
          currentUsr._id
        );
        item.owner = response.list[i].owner_info;
        item.blur = response.list[i].blurItems;
        item.users = [{ avatar: response.list[i].creator_info.avatar }];
        let collectionHideflag = Boolean(currentInfo[response.list[i]._id]);
        if (collectionHideflag === true) item.hideItem = true;
        else {
          item.hideItem = Boolean(currentInfo1[response.list[i].item_info._id]);
          item.verified = item.creator_info?.verified;
        }

        list.push(item);
      }

      if (reStart) {
        localStorage.setItem(
          "currentItemIndex",
          (Number(list.length) + useStart).toString()
        );
        setItems(list);
        setCollectionMinPrice(calcFloorPrice(list));
      } else {
        setItems((items) => {
          localStorage.setItem(
            "currentItemIndex",
            (Number(currentItemCount) + Number(list.length)).toString()
          );
          setCollectionMinPrice(calcFloorPrice(items.concat(list)));
          return items.concat(list);
        });
      }
      if (response.list.length < 10) {
        setViewNoMore(true);
      } else {
        more.current = false;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setProcessing(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentItemCount = localStorage.getItem("currentItemIndex");
      if (
        !more.current &&
        // && isScrollAtBottom()
        currentItemCount > 0
      ) {
        more.current = true;
        getCollectionList(false, 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchCollectionDetails = async () => {
      try {
        const response = await getCollectionDetails(collectionId);
        const data = response.data || [];

        if (data?.explicit?.some((id) => id === currentUsr?._id)) {
          setShowExplicit(true);
        }

        dispatch(changeDetailedCollection(data));
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch collection data");
      }
    };

    fetchCollectionDetails();
  }, [collectionId]);

  useEffect(() => {
    if (
      collection?.explicit?.findIndex((item) => item === currentUsr?._id) >= 0
    ) {
      setShowExplicit(true);
    }
  }, [currentUsr]);

  const applyChangeExplicitContents = async () => {
    //save explicit showing flag
    if (isEmpty(currentUsr?._id)) {
      toast.warn("Please connect your wallet and try again.");
      return;
    }
    try {
      //update explicit
      const updateResponse = await updateExplicitApi(
        currentUsr?._id,
        collectionId
      );
      if (updateResponse.code === 0) {
        setShowExplicit(!showExplicit);
        setTimeout(() => {
          getCollectionList(true, 0);
        }, [1000]);
      }
    } catch (error) {}
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setStartIndex(event.target.value);
      localStorage.setItem("currentItemIndex", event.target.value);
      getCollectionList(true, parseInt(event.target.value));
    }
  };

  const handleStartIndex = (event) => {
    setStartIndex(event.target.value);
  };

  // console.log("...///collection",collection?.description)

  return (
    <div
      style={{
        backgroundColor: "rgba(19, 19, 29, 0.9)",
      }}
      id="main-content-element"
      className=" default-page-styles page-bidds bottom-nav-none"
    >
      <div className="sub-nav-bar">
        <div className="sub-nav-bar__content-wrapper">
          <ul>
            <li className=" ">
              <a href="/collection/corepunks/">NFTS </a>
            </li>
            <li className="active ">
              <a href="/collection/corepunks/bidds/">BIDDS </a>
            </li>
            <li className=" ">
              <a href="/collection/corepunks/activity/">ACTIVITY </a>
            </li>
            <li className=" ">
              <a href="/collection/corepunks/analytics/">ANALYTICS </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="profile-hero collection collection-layout-tab-bidds">
        <div className="profile-hero__wrapper">
          <div
            className="profile-hero__top-bg"
            style={{
              background: `url("${
                config.UPLOAD_URL + "uploads/" + collection.bannerURL
              }") center center no-repeat`,
              width: "100vw",
              backgroundSize: "cover",
              position: "fixed",
              top: 100,
              left: 0,
            }}
          ></div>
          <div className="profile-hero__profile">
            <div className="profile-hero__profile--img loading-img loading-complete">
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
            <img
              alt="profile"
              loading="lazy"
              width="0"
              height="0"
              decoding="async"
              data-nimg="1"
              className="profile-hero__profile--img"
              src={config.UPLOAD_URL + "uploads/" + collection.logoURL}
              style={{ color: "transparent" }}
            />
            <div className="profile-hero__content-wrapper">
              <div className="profile-hero__content">
                <div className="profile-hero__content--top-action  align-left">
                  <div className="profile-hero__content--top-action-menu-wrapper">
                    <button
                      type="button"
                      className="button button--blank btn-action false "
                    >
                      <img
                        alt="menu"
                        width="0"
                        height="0"
                        decoding="async"
                        data-nimg="1"
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTJDNyAxMi41NTIzIDYuNTUyMjggMTMgNiAxM0M1LjQ0NzcyIDEzIDUgMTIuNTUyMyA1IDEyQzUgMTEuNDQ3NyA1LjQ0NzcyIDExIDYgMTFDNi41NTIyOCAxMSA3IDExLjQ0NzcgNyAxMloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMyAxMkMxMyAxMi41NTIzIDEyLjU1MjMgMTMgMTIgMTNDMTEuNDQ3NyAxMyAxMSAxMi41NTIzIDExIDEyQzExIDExLjQ0NzcgMTEuNDQ3NyAxMSAxMiAxMUMxMi41NTIzIDExIDEzIDExLjQ0NzcgMTMgMTJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTkgMTJDMTkgMTIuNTUyMyAxOC41NTIzIDEzIDE4IDEzQzE3LjQ0NzcgMTMgMTcgMTIuNTUyMyAxNyAxMkMxNyAxMS40NDc3IDE3LjQ0NzcgMTEgMTggMTFDMTguNTUyMyAxMSAxOSAxMS40NDc3IDE5IDEyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTcgMTJDNyAxMi41NTIzIDYuNTUyMjggMTMgNiAxM0M1LjQ0NzcyIDEzIDUgMTIuNTUyMyA1IDEyQzUgMTEuNDQ3NyA1LjQ0NzcyIDExIDYgMTFDNi41NTIyOCAxMSA3IDExLjQ0NzcgNyAxMloiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTMgMTJDMTMgMTIuNTUyMyAxMi41NTIzIDEzIDEyIDEzQzExLjQ0NzcgMTMgMTEgMTIuNTUyMyAxMSAxMkMxMSAxMS40NDc3IDExLjQ0NzcgMTEgMTIgMTFDMTIuNTUyMyAxMSAxMyAxMS40NDc3IDEzIDEyWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xOSAxMkMxOSAxMi41NTIzIDE4LjU1MjMgMTMgMTggMTNDMTcuNDQ3NyAxMyAxNyAxMi41NTIzIDE3IDEyQzE3IDExLjQ0NzcgMTcuNDQ3NyAxMSAxOCAxMUMxOC41NTIzIDExIDE5IDExLjQ0NzcgMTkgMTJaIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                        style={{ color: "transparent" }}
                      />
                    </button>
                    <div className="profile-hero__content--top-action-menu false"></div>
                  </div>
                </div>
                <div className="img-container">
                  <div className="loading-img desktop loading-complete">
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
                  <img
                    alt="profile"
                    width="0"
                    height="0"
                    decoding="async"
                    data-nimg="1"
                    className="profile-hero__content--img"
                    src={config.UPLOAD_URL + "uploads/" + collection.logoURL}
                    style={{ color: "transparent" }}
                    loading="lazy"
                  />
                </div>
                <div className="profile-hero__content--mid-content-wrapper">
                  <div className="profile-hero__content--title  collection">
                    <div className="mobile ">
                      <span>{collection && collection.name}</span>

                      <img
                        alt="Validation Status"
                        width="0"
                        height="0"
                        decoding="async"
                        data-nimg="1"
                        className=""
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiByeD0iMiIgZmlsbD0iI0NGQTI0QSIvPgo8cGF0aCBkPSJNNCA3TDYgOUwxMCA1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <span className="desktop">
                      {collection && collection.name}
                      <img
                        alt="Validation Status"
                        width="0"
                        height="0"
                        decoding="async"
                        data-nimg="1"
                        className=""
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiByeD0iMiIgZmlsbD0iI0NGQTI0QSIvPgo8cGF0aCBkPSJNNCA3TDYgOUwxMCA1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                        style={{ color: "transparent" }}
                      />
                    </span>
                    <div className="profile-hero__content--title-action-menu-wrapper">
                      <div className="profile-hero__content--top-action-menu-wrapper">
                        <button
                          type="button"
                          className="button button--blank btn-action false "
                        >
                          <img
                            alt="menu"
                            width="0"
                            height="0"
                            decoding="async"
                            data-nimg="1"
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTJDNyAxMi41NTIzIDYuNTUyMjggMTMgNiAxM0M1LjQ0NzcyIDEzIDUgMTIuNTUyMyA1IDEyQzUgMTEuNDQ3NyA1LjQ0NzcyIDExIDYgMTFDNi41NTIyOCAxMSA3IDExLjQ0NzcgNyAxMloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMyAxMkMxMyAxMi41NTIzIDEyLjU1MjMgMTMgMTIgMTNDMTEuNDQ3NyAxMyAxMSAxMi41NTIzIDExIDEyQzExIDExLjQ0NzcgMTEuNDQ3NyAxMSAxMiAxMUMxMi41NTIzIDExIDEzIDExLjQ0NzcgMTMgMTJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTkgMTJDMTkgMTIuNTUyMyAxOC41NTIzIDEzIDE4IDEzQzE3LjQ0NzcgMTMgMTcgMTIuNTUyMyAxNyAxMkMxNyAxMS40NDc3IDE3LjQ0NzcgMTEgMTggMTFDMTguNTUyMyAxMSAxOSAxMS40NDc3IDE5IDEyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTcgMTJDNyAxMi41NTIzIDYuNTUyMjggMTMgNiAxM0M1LjQ0NzcyIDEzIDUgMTIuNTUyMyA1IDEyQzUgMTEuNDQ3NyA1LjQ0NzcyIDExIDYgMTFDNi41NTIyOCAxMSA3IDExLjQ0NzcgNyAxMloiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTMgMTJDMTMgMTIuNTUyMyAxMi41NTIzIDEzIDEyIDEzQzExLjQ0NzcgMTMgMTEgMTIuNTUyMyAxMSAxMkMxMSAxMS40NDc3IDExLjQ0NzcgMTEgMTIgMTFDMTIuNTUyMyAxMSAxMyAxMS40NDc3IDEzIDEyWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xOSAxMkMxOSAxMi41NTIzIDE4LjU1MjMgMTMgMTggMTNDMTcuNDQ3NyAxMyAxNyAxMi41NTIzIDE3IDEyQzE3IDExLjQ0NzcgMTcuNDQ3NyAxMSAxOCAxMUMxOC41NTIzIDExIDE5IDExLjQ0NzcgMTkgMTJaIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                            style={{ color: "transparent" }}
                          />
                        </button>
                        <div className="profile-hero__content--top-action-menu false"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="profile-hero__content--description"
                    style={{ cursor: "pointer" }}
                  >
                    <p className="mobile">{collection?.description}</p>
                    <p className="sm">{collection?.description}</p>
                    <span>See more</span>
                  </div>
                  <div className="profile-hero__content--collection-details-trade">
                    <div className="profile-hero__content--item">
                      <div className="data">
                        <div className="data">
                          <div className="price">
                            <img
                              alt="icon"
                              width="15"
                              height="15"
                              decoding="async"
                              data-nimg="1"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNDMzODYgMC4zODQ2MTNDOC40MjYzIDAuNTExMzM4IDEwLjcyMTYgMS43OTQ0MyAxMi4yMTI0IDQuMzg3MDFDMTIuOTM2NCA1LjY0ODk4IDEzLjI0NzUgNy4wMjcxMSAxMy4xMjk1IDguNDYzMzNDMTIuODk4OSAxMS4yNzc3IDExLjUwOTkgMTMuMzg5OCA4Ljk4OTM5IDE0Ljc0NjhDNy43MjkxMyAxNS40MjI2IDYuMzYxNjIgMTUuNjkxOSA0LjkzNTEyIDE1LjU5NjlDMy4xMDY0IDE1LjQ3NTQgMS41MDgyOSAxNC43OTk2IDAuMTU2ODYyIDEzLjU3NDZDLTAuMDUyMjg3MyAxMy4zODQ1IC0wLjA1MjI4NzMgMTMuMzczOSAwLjE1Njg2MiAxMy4xNzMzQzAuOTQ1MTkzIDEyLjM5NzEgMS43MzM1MyAxMS42MjYyIDIuNTExMTMgMTAuODQ0N0MyLjYzOTg0IDEwLjcxMjcgMi43MTQ5MiAxMC43MDIxIDIuODY1MDcgMTAuODM0MUM0Ljc4NDk2IDEyLjQ5MjEgNy43Mzk4NiAxMS45NDMgOC44NzE0MSA5LjY5MzYxQzEwLjA5OTUgNy4yNTQxNiA4LjQ0MjM5IDQuNTE5MDEgNS44NjI4OCA0LjIzOTE2QzQuNzE1MjQgNC4xMTI0NCAzLjcxNzc2IDQuNDQ1MDkgMi44NTQzNSA1LjE3OTA0QzIuNzIwMjggNS4yODk5MiAyLjY1MDU2IDUuMjk1MiAyLjUyNzIyIDUuMTc5MDRDMS43MjgxNiA0LjM4MTczIDAuOTIzNzQyIDMuNTg5NyAwLjEwODU5NyAyLjc5NzY3Qy0wLjAzMDgzNTcgMi42NjU2NiAtMC4wMDkzODQ3MyAyLjU4MTE4IDAuMTE5MzIyIDIuNDU5NzNDMC45MDc2NTQgMS43MzEwNiAxLjgxMzk3IDEuMTkyNDggMi44Mjc1NCAwLjgzMzQzQzMuNjY5NDkgMC41Mzc3MzkgNC41MzI5MSAwLjM5NTE3MyA1LjQzMzg2IDAuMzg0NjEzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTcuNjE1NzYgNy45OTQ4NUM3LjYxNTc2IDkuMTM5NzQgNi42OTUyNCAxMC4wNzc1IDUuNTU2MSAxMC4wNzc1QzQuMzkzOTQgMTAuMDc3NSAzLjQ2NzY3IDkuMTYyNzYgMy40NjE5MSA4LjAwNjM1QzMuNDYxOTEgNi44NjE0NiA0LjM4MjQzIDUuOTIzNjggNS41MjE1OCA1LjkyMzY4QzYuNjgzNzMgNS45MjM2OCA3LjYxMDAxIDYuODM4NDQgNy42MTU3NiA3Ljk5NDg1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
                              style={{ color: "transparent" }}
                            />
                            8.43k
                          </div>
                        </div>
                      </div>
                      <div className="label">TOTAL VOLUME</div>
                    </div>
                    <div className="profile-hero__content--item">
                      <div className="data">
                        <div className="data">
                          <div className="price">
                            <img
                              alt="icon"
                              width="15"
                              height="15"
                              decoding="async"
                              data-nimg="1"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNDMzODYgMC4zODQ2MTNDOC40MjYzIDAuNTExMzM4IDEwLjcyMTYgMS43OTQ0MyAxMi4yMTI0IDQuMzg3MDFDMTIuOTM2NCA1LjY0ODk4IDEzLjI0NzUgNy4wMjcxMSAxMy4xMjk1IDguNDYzMzNDMTIuODk4OSAxMS4yNzc3IDExLjUwOTkgMTMuMzg5OCA4Ljk4OTM5IDE0Ljc0NjhDNy43MjkxMyAxNS40MjI2IDYuMzYxNjIgMTUuNjkxOSA0LjkzNTEyIDE1LjU5NjlDMy4xMDY0IDE1LjQ3NTQgMS41MDgyOSAxNC43OTk2IDAuMTU2ODYyIDEzLjU3NDZDLTAuMDUyMjg3MyAxMy4zODQ1IC0wLjA1MjI4NzMgMTMuMzczOSAwLjE1Njg2MiAxMy4xNzMzQzAuOTQ1MTkzIDEyLjM5NzEgMS43MzM1MyAxMS42MjYyIDIuNTExMTMgMTAuODQ0N0MyLjYzOTg0IDEwLjcxMjcgMi43MTQ5MiAxMC43MDIxIDIuODY1MDcgMTAuODM0MUM0Ljc4NDk2IDEyLjQ5MjEgNy43Mzk4NiAxMS45NDMgOC44NzE0MSA5LjY5MzYxQzEwLjA5OTUgNy4yNTQxNiA4LjQ0MjM5IDQuNTE5MDEgNS44NjI4OCA0LjIzOTE2QzQuNzE1MjQgNC4xMTI0NCAzLjcxNzc2IDQuNDQ1MDkgMi44NTQzNSA1LjE3OTA0QzIuNzIwMjggNS4yODk5MiAyLjY1MDU2IDUuMjk1MiAyLjUyNzIyIDUuMTc5MDRDMS43MjgxNiA0LjM4MTczIDAuOTIzNzQyIDMuNTg5NyAwLjEwODU5NyAyLjc5NzY3Qy0wLjAzMDgzNTcgMi42NjU2NiAtMC4wMDkzODQ3MyAyLjU4MTE4IDAuMTE5MzIyIDIuNDU5NzNDMC45MDc2NTQgMS43MzEwNiAxLjgxMzk3IDEuMTkyNDggMi44Mjc1NCAwLjgzMzQzQzMuNjY5NDkgMC41Mzc3MzkgNC41MzI5MSAwLjM5NTE3MyA1LjQzMzg2IDAuMzg0NjEzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTcuNjE1NzYgNy45OTQ4NUM3LjYxNTc2IDkuMTM5NzQgNi42OTUyNCAxMC4wNzc1IDUuNTU2MSAxMC4wNzc1QzQuMzkzOTQgMTAuMDc3NSAzLjQ2NzY3IDkuMTYyNzYgMy40NjE5MSA4LjAwNjM1QzMuNDYxOTEgNi44NjE0NiA0LjM4MjQzIDUuOTIzNjggNS41MjE1OCA1LjkyMzY4QzYuNjgzNzMgNS45MjM2OCA3LjYxMDAxIDYuODM4NDQgNy42MTU3NiA3Ljk5NDg1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
                              style={{ color: "transparent" }}
                            />
                            {collection && collectionMinPrice
                              ? collectionMinPrice + " "
                              : "0 "}
                          </div>
                        </div>
                      </div>
                      <div className="label">FLOOR PRICE</div>
                    </div>
                    <div className="profile-hero__content--item">
                      <div className="data">
                        <div className="data">
                          <span>church.....</span>
                        </div>
                      </div>
                      <div className="label">OWNERS</div>
                    </div>
                    <div className="profile-hero__content--item">
                      <div className="data">
                        <div className="data">
                          <div className="price">
                            <img
                              alt="icon"
                              width="15"
                              height="15"
                              decoding="async"
                              data-nimg="1"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNDMzODYgMC4zODQ2MTNDOC40MjYzIDAuNTExMzM4IDEwLjcyMTYgMS43OTQ0MyAxMi4yMTI0IDQuMzg3MDFDMTIuOTM2NCA1LjY0ODk4IDEzLjI0NzUgNy4wMjcxMSAxMy4xMjk1IDguNDYzMzNDMTIuODk4OSAxMS4yNzc3IDExLjUwOTkgMTMuMzg5OCA4Ljk4OTM5IDE0Ljc0NjhDNy43MjkxMyAxNS40MjI2IDYuMzYxNjIgMTUuNjkxOSA0LjkzNTEyIDE1LjU5NjlDMy4xMDY0IDE1LjQ3NTQgMS41MDgyOSAxNC43OTk2IDAuMTU2ODYyIDEzLjU3NDZDLTAuMDUyMjg3MyAxMy4zODQ1IC0wLjA1MjI4NzMgMTMuMzczOSAwLjE1Njg2MiAxMy4xNzMzQzAuOTQ1MTkzIDEyLjM5NzEgMS43MzM1MyAxMS42MjYyIDIuNTExMTMgMTAuODQ0N0MyLjYzOTg0IDEwLjcxMjcgMi43MTQ5MiAxMC43MDIxIDIuODY1MDcgMTAuODM0MUM0Ljc4NDk2IDEyLjQ5MjEgNy43Mzk4NiAxMS45NDMgOC44NzE0MSA5LjY5MzYxQzEwLjA5OTUgNy4yNTQxNiA4LjQ0MjM5IDQuNTE5MDEgNS44NjI4OCA0LjIzOTE2QzQuNzE1MjQgNC4xMTI0NCAzLjcxNzc2IDQuNDQ1MDkgMi44NTQzNSA1LjE3OTA0QzIuNzIwMjggNS4yODk5MiAyLjY1MDU2IDUuMjk1MiAyLjUyNzIyIDUuMTc5MDRDMS43MjgxNiA0LjM4MTczIDAuOTIzNzQyIDMuNTg5NyAwLjEwODU5NyAyLjc5NzY3Qy0wLjAzMDgzNTcgMi42NjU2NiAtMC4wMDkzODQ3MyAyLjU4MTE4IDAuMTE5MzIyIDIuNDU5NzNDMC45MDc2NTQgMS43MzEwNiAxLjgxMzk3IDEuMTkyNDggMi44Mjc1NCAwLjgzMzQzQzMuNjY5NDkgMC41Mzc3MzkgNC41MzI5MSAwLjM5NTE3MyA1LjQzMzg2IDAuMzg0NjEzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTcuNjE1NzYgNy45OTQ4NUM3LjYxNTc2IDkuMTM5NzQgNi42OTUyNCAxMC4wNzc1IDUuNTU2MSAxMC4wNzc1QzQuMzkzOTQgMTAuMDc3NSAzLjQ2NzY3IDkuMTYyNzYgMy40NjE5MSA4LjAwNjM1QzMuNDYxOTEgNi44NjE0NiA0LjM4MjQzIDUuOTIzNjggNS41MjE1OCA1LjkyMzY4QzYuNjgzNzMgNS45MjM2OCA3LjYxMDAxIDYuODM4NDQgNy42MTU3NiA3Ljk5NDg1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
                              style={{ color: "transparent" }}
                            />
                            156
                          </div>
                        </div>
                      </div>
                      <div className="label">Collection History</div>
                    </div>
                    <div className="profile-hero__content--item">
                      <div className="data">
                        <div className="data">
                          <span>14%</span>
                        </div>
                      </div>
                      <div className="label">LISTED</div>
                    </div>
                    <div className="profile-hero__content--item">
                      <div className="data">
                        <div className="data">
                          <span>758</span>
                        </div>
                      </div>
                      <div className="label">TOTAL SUPPLY</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="placeholder profile-placeholder hide"
        style={{ minHeight: "100dvh" }}
      >
        <div className="loader">
          <img src="https://app-static.bidds.com/_next/static/images/biddsWaiting-1646034bc4dc5b8d97b2944a3f086146.gif" />
        </div>
      </div>
      {/* ////// */}
      <div className="filter-collection collection-single-page">
        <div className="left">
          <button
            type="button"
            className="button button--blank filter-btn-desktop "
          >
            <img
              alt="menu"
              width="0"
              height="0"
              decoding="async"
              data-nimg="1"
              className="zoom"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeT0iMC43OTk4MDUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyLjQiIHJ4PSIxIiBmaWxsPSIjM0I0NzRGIi8+CjxyZWN0IHg9IjMuNTk5OTgiIHk9IjgiIHdpZHRoPSIxNi44IiBoZWlnaHQ9IjIuNCIgcng9IjEiIGZpbGw9IiMzQjQ3NEYiLz4KPHJlY3QgeD0iOC40MDAwMiIgeT0iMTUuMTk5NyIgd2lkdGg9IjcuMiIgaGVpZ2h0PSIyLjQiIHJ4PSIxIiBmaWxsPSIjM0I0NzRGIi8+Cjwvc3ZnPgo="
              style={{ color: "transparent" }}
            />
          </button>
          <button
            type="button"
            className="button button--blank filter-btn-mobile "
          >
            <img
              alt="menu"
              width="0"
              height="0"
              decoding="async"
              data-nimg="1"
              className="zoom"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeT0iMC43OTk4MDUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyLjQiIHJ4PSIxIiBmaWxsPSIjM0I0NzRGIi8+CjxyZWN0IHg9IjMuNTk5OTgiIHk9IjgiIHdpZHRoPSIxNi44IiBoZWlnaHQ9IjIuNCIgcng9IjEiIGZpbGw9IiMzQjQ3NEYiLz4KPHJlY3QgeD0iOC40MDAwMiIgeT0iMTUuMTk5NyIgd2lkdGg9IjcuMiIgaGVpZ2h0PSIyLjQiIHJ4PSIxIiBmaWxsPSIjM0I0NzRGIi8+Cjwvc3ZnPgo="
              style={{ color: "transparent" }}
            />
          </button>
          <div className="action">
            <button type="button" className="button button--blank active ">
              <img
                alt="menu"
                width="0"
                height="0"
                decoding="async"
                data-nimg="1"
                className="zoom"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjIuNCIgcng9IjEiIGZpbGw9IiNGRkYiLz4KPHJlY3QgeT0iMy42MDAxIiB3aWR0aD0iMjQiIGhlaWdodD0iMi40IiByeD0iMSIgZmlsbD0iI0ZGRiIvPgo8cmVjdCB5PSI3LjIwMDIiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyLjQiIHJ4PSIxIiBmaWxsPSIjRkZGIi8+CjxyZWN0IHk9IjEwLjc5OTgiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyLjQiIHJ4PSIxIiBmaWxsPSIjRkZGIi8+CjxyZWN0IHk9IjE0LjM5OTkiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyLjQiIHJ4PSIxIiBmaWxsPSIjRkZGIi8+CjxyZWN0IHk9IjE4IiB3aWR0aD0iMjQiIGhlaWdodD0iMi40IiByeD0iMSIgZmlsbD0iI0ZGRiIvPgo8cmVjdCB5PSIyMS42MDAxIiB3aWR0aD0iMjQiIGhlaWdodD0iMi40IiByeD0iMSIgZmlsbD0iI0ZGRiIvPgo8L3N2Zz4K"
                style={{ color: "transparent" }}
              />
            </button>
          </div>
        </div>
        <div className="mid">
          <div className="search-input__input-box">
            <img
              alt="search-icon"
              width="20"
              height="20"
              decoding="async"
              data-nimg="1"
              className="zoom"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMzMzMzMgMTQuMTY2N0MxMS41NTUgMTQuMTY2NyAxNC4xNjY3IDExLjU1NSAxNC4xNjY3IDguMzMzMzNDMTQuMTY2NyA1LjExMTY3IDExLjU1NSAyLjUgOC4zMzMzMyAyLjVDNS4xMTE2NyAyLjUgMi41IDUuMTExNjcgMi41IDguMzMzMzNDMi41IDExLjU1NSA1LjExMTY3IDE0LjE2NjcgOC4zMzMzMyAxNC4xNjY3WiIgc3Ryb2tlPSIjM0I0NzRGIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNy41IDE3LjVMMTIuNSAxMi41IiBzdHJva2U9IiMzQjQ3NEYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
              style={{ color: "transparent" }}
            />
            <input
              lang="en"
              placeholder="Search NFTs, Collections and More..."
              value=""
            />
            <div className="search-input__input-box--close">
              <img
                className="inactive"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSI3IiB2aWV3Qm94PSIwIDAgNyA3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTg3XzI3OTgpIj4KPHBhdGggZD0iTTEgMUw2IDZNNiAxTDEgNiIgc3Ryb2tlPSIjNzk4NThDIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTg3XzI3OTgiPgo8cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSI3IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
                alt="close"
              />
              <img
                className="active"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSI3IiB2aWV3Qm94PSIwIDAgNyA3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTg3XzI3OTYpIj4KPHBhdGggZD0iTTEgMUw2IDZNNiAxTDEgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4N18yNzk2Ij4KPHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iNyIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                alt="close"
              />
              <img
                className="click"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSI3IiB2aWV3Qm94PSIwIDAgNyA3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTg3XzI4MDApIj4KPHBhdGggZD0iTTEgMUw2IDZNNiAxTDEgNiIgc3Ryb2tlPSIjM0I0NzRGIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTg3XzI4MDAiPgo8cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSI3IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
                alt="close"
              />
            </div>
          </div>
        </div>
        <div className="right desktop">
          <div className="dropdown  ">
            <button type="button" className="button button--blank  ">
              Low to High
              <img
                alt="key"
                width="0"
                height="0"
                decoding="async"
                data-nimg="1"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSI3IiB2aWV3Qm94PSIwIDAgMTIgNyIgZmlsbD0ibm9uZSI+CiAgPHBhdGggZD0iTTExIDFMNiA2TDEgMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+"
                style={{ color: "transparent" }}
              />
            </button>
            <div className="dropdown__list-wrapper"></div>
          </div>
        </div>
        <div className="right mobile ">
          <button type="button" className="button button--blank offer ">
            <img
              alt="menu"
              width="0"
              height="0"
              decoding="async"
              data-nimg="1"
              className="offer"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNMTcuNCAxMEwxOS40MjY1IDExLjEyNThDMjAuMTEyMyAxMS41MDY4IDIwLjExMjMgMTIuNDkzMiAxOS40MjY1IDEyLjg3NDJMMTcuNCAxNE0xNy40IDEwTDEyLjQ4NTYgMTIuNzMwMkMxMi4xODM2IDEyLjg5OCAxMS44MTY0IDEyLjg5OCAxMS41MTQ0IDEyLjczMDJMNi42IDEwTTE3LjQgMTBMMTkuNDI2NSA4Ljg3NDE2QzIwLjExMjMgOC40OTMxNSAyMC4xMTIzIDcuNTA2ODUgMTkuNDI2NSA3LjEyNTg0TDEyLjQ4NTYgMy4yNjk4QzEyLjE4MzYgMy4xMDIwMSAxMS44MTY0IDMuMTAyMDEgMTEuNTE0NCAzLjI2OThMNC41NzM0OCA3LjEyNTg0QzMuODg3NjcgNy41MDY4NSAzLjg4NzY3IDguNDkzMTUgNC41NzM0OCA4Ljg3NDE2TDYuNiAxME02LjYgMTBMNC41NzM0OCAxMS4xMjU4QzMuODg3NjcgMTEuNTA2OCAzLjg4NzY3IDEyLjQ5MzIgNC41NzM0OCAxMi44NzQyTDYuNiAxNE02LjYgMTRMNC41NzM0OCAxNS4xMjU4QzMuODg3NjcgMTUuNTA2OCAzLjg4NzY3IDE2LjQ5MzIgNC41NzM0OCAxNi44NzQyTDExLjUxNDQgMjAuNzMwMkMxMS44MTY0IDIwLjg5OCAxMi4xODM2IDIwLjg5OCAxMi40ODU2IDIwLjczMDJMMTkuNDI2NSAxNi44NzQyQzIwLjExMjMgMTYuNDkzMiAyMC4xMTIzIDE1LjUwNjggMTkuNDI2NSAxNS4xMjU4TDE3LjQgMTRNNi42IDE0TDExLjUxNDQgMTYuNzMwMkMxMS44MTY0IDE2Ljg5OCAxMi4xODM2IDE2Ljg5OCAxMi40ODU2IDE2LjczMDJMMTcuNCAxNCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0xOS40MjY1IDcuMTI1ODRMMTIuNDg1NiAzLjI2OThDMTIuMTgzNiAzLjEwMjAxIDExLjgxNjQgMy4xMDIwMSAxMS41MTQ0IDMuMjY5OEw0LjU3MzQ4IDcuMTI1ODRDMy44ODc2NyA3LjUwNjg1IDMuODg1NzggOC40OTIxIDQuNTcxNTkgOC44NzMxMUwxMS41MTUzIDEyLjczMDdDMTEuODE3MyAxMi44OTg1IDEyLjE4MjQgMTIuODk4NiAxMi40ODQ1IDEyLjczMDhMMTkuNDI4MiA4Ljg3MzIxQzIwLjExNCA4LjQ5MjIxIDIwLjExMjMgNy41MDY4NSAxOS40MjY1IDcuMTI1ODRaIiBzdHJva2U9IiMwMEZGRjAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+"
              style={{ color: "transparent" }}
            />
          </button>
          <button type="button" className="button button--blank  ">
            <img
              alt="menu"
              width="0"
              height="0"
              decoding="async"
              data-nimg="1"
              className="zoom"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMjk0MTIgNEwxMS41ODgyIDcuNTU1NTZNOC4yOTQxMiA0TDUgNy41NTU1Nk04LjI5NDEyIDRWMTQuNjY2N00xNS43MDU5IDIwTDE5IDE2LjQ0NDRNMTUuNzA1OSAyMEwxMi40MTE4IDE2LjQ0NDRNMTUuNzA1OSAyMFY5LjMzMzMzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
              style={{ color: "transparent" }}
            />
          </button>
        </div>
      </div>

      {/* ////////0000000000 stop 00000000/ */}
      <div className="mid-section-wrapper collection-owned-wrapper">
        <div className="filter-content--wrapper  desktop"></div>
        <div className="nft-wrapper ">
          <div className="item-content-wrapper">
            <div className="grid-container collection-page">
              <div
                data-virtuoso-scroller="true"
                className="card-scroller fade-in"
                style={{ position: "relative", height: "4559.46px" }}
              >
                <div
                  // style="width: 100%; height: 100%; position: absolute; top: 0px;"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: "0px",
                  }}
                >
                  <div
                    className="card-wrapper"
                    data-testid="virtuoso-item-list"
                    style={{
                      paddingTop: "0px",
                      paddingBottom: "3166.24px",
                      display: "grid",
                    }}
                  >
                    {items &&
                      items.length > 0 &&
                      items.map((x, index) => (
                        <ColLC
                          item={x}
                          key={index}
                          selectable={showBulkFeatures}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
            ;
          </div>
        </div>
      </div>

      {/* ////////0000000000 start 00000000/ */}

      <div className="bottom-nav" id="bottom-nav">
        <div className="bottom-nav--link-wrapper">
          <ul className="bottom-nav__menu">
            <li className=" enabled    ">
              <a className="" href="/collection/corepunks/info/">
                <img
                  alt="menu"
                  width="0"
                  height="0"
                  decoding="async"
                  data-nimg="1"
                  className="default"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNMTIgN1YxM00xMiAxN0gxMi4wMDlNMjEgMTJDMjEgMTYuOTcwNiAxNi45NzA2IDIxIDEyIDIxQzcuMDI5NDQgMjEgMyAxNi45NzA2IDMgMTJDMyA3LjAyOTQ0IDcuMDI5NDQgMyAxMiAzQzE2Ljk3MDYgMyAyMSA3LjAyOTQ0IDIxIDEyWiIgc3Ryb2tlPSIjM0I0NzRGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+"
                  style={{ color: "transparent" }}
                />
                <img
                  alt="menu"
                  width="0"
                  height="0"
                  decoding="async"
                  data-nimg="1"
                  className="active"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNMTIgN1YxM00xMiAxN0gxMi4wMDlNMjEgMTJDMjEgMTYuOTcwNiAxNi45NzA2IDIxIDEyIDIxQzcuMDI5NDQgMjEgMyAxNi45NzA2IDMgMTJDMyA3LjAyOTQ0IDcuMDI5NDQgMyAxMiAzQzE2Ljk3MDYgMyAyMSA3LjAyOTQ0IDIxIDEyWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPg=="
                  style={{ color: "transparent" }}
                />
                <span className="bottom-nav__menu--label"> Info</span>
              </a>
            </li>
            <li className=" enabled    ">
              <a className="" href="/collection/corepunks/">
                <img
                  alt="menu"
                  width="0"
                  height="0"
                  decoding="async"
                  data-nimg="1"
                  className="active"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuMTUwMiAxMy40MDAyTDIuMzUwMiAxMy45MDAyQzEuNjUwMiAxNC4zMDAyIDEuNjUwMiAxNS4zMDAyIDIuMzUwMiAxNS42MDAyTDYuMjUwMiAxNy44MDAyQzYuNTUwMiAxOC4wMDAyIDYuOTUwMiAxOC4wMDAyIDcuMjUwMiAxNy44MDAyTDguMzUwNTkgMTcuMjAwMk0zLjE1MDIgMTMuNDAwMkwyLjM1MDIgMTIuOTAwMkMxLjY1MDIgMTIuNTAwMiAxLjY1MDIgMTEuNTAwMiAyLjM1MDIgMTEuMTAwMkwzLjE1MDIgMTAuNjAwMk0zLjE1MDIgMTMuNDAwMkw2LjI1MDIgMTUuMDAwMkM2LjU1MDIgMTUuMjAwMiA2Ljk1MDIgMTUuMjAwMiA3LjI1MDIgMTUuMDAwMkw3Ljg1MDU5IDE0LjcwMDJNMy4xNTAyIDEwLjYwMDJMMi4zNTAyIDEwLjEwMDJDMS42NTAyIDkuNzAwMTkgMS42NTAyIDguNzAwMiAyLjM1MDIgOC4zMDAyTDYuMjUwMiA2LjEwMDJDNi41NTAyIDUuOTAwMiA2Ljk1MDIgNS45MDAyIDcuMjUwMiA2LjEwMDJMOC41NTAyIDYuODAwMkwxMS4xNTAyIDguMzAwMkMxMS44NTAyIDguNzAwMiAxMS44NTAyIDkuNzAwMTkgMTEuMTUwMiAxMC4xMDAyTDguNTUwMiAxMS42MDAyTDcuMjUwMiAxMi4zMDAyQzYuOTUwMiAxMi41MDAyIDYuNTUwMiAxMi41MDAyIDYuMjUwMiAxMi4zMDAyTDMuMTUwMiAxMC42MDAyWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMi42MTE3IDEzLjUzNjZMMjMuMTUwMiAxMy45QzIzLjg1MDIgMTQuMyAyMy44NTAyIDE1LjMgMjMuMTUwMiAxNS42TDE5LjI1MDIgMTcuOEMxOC45NTAyIDE4IDE4LjU1MDIgMTggMTguMjUwMiAxNy44TDE3LjA1MDIgMTcuMU0yMi4zNTAyIDEwLjlMMjMuMTUwMiAxMC40QzIzLjg1MDIgMTAgMjMuODUwMiA5IDIzLjE1MDIgOC42TDE5LjI1MDIgNi40QzE4Ljk1MDIgNi4yIDE4LjU1MDIgNi4yIDE4LjI1MDIgNi40TDE2Ljk1MDIgNy4xTDE0LjM1MDIgOC42QzEzLjY1MDIgOSAxMy42NTAyIDEwIDE0LjM1MDIgMTAuNUwxNi45NTAyIDExLjlMMTguMjUwMiAxMi42QzE4LjU1MDIgMTIuOCAxOC45NTAyIDEyLjggMTkuMjUwMiAxMi42TDIyLjM1MDIgMTAuOVpNMjIuMzUwMiAxMC45TDIzLjE1MDIgMTEuNEMyMy44NTAyIDExLjggMjMuODUwMiAxMi44IDIzLjE1MDIgMTMuMkwyMi4zNTAyIDEzLjdMMTkuMjUwMiAxNS40QzE4Ljk1MDIgMTUuNiAxOC41NTAyIDE1LjYgMTguMjUwMiAxNS40TDE2Ljk1MDIgMTQuNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNi4zNTAyIDE3LjQwMDFMMTMuMjUwMiAxOS4xMDAxQzEyLjk1MDIgMTkuMzAwMSAxMi41NTAyIDE5LjMwMDEgMTIuMjUwMiAxOS4xMDAxTDkuMDM2NzMgMTcuNDUyMk0xNi4zNTAyIDE3LjQwMDFMMTcuMTUwMiAxNy45MDAxQzE3Ljg1MDIgMTguMzAwMSAxNy44NTAyIDE5LjMwMDEgMTcuMTUwMiAxOS42MDAxTDEzLjI1MDIgMjEuODAwMUMxMi45NTAyIDIyLjAwMDEgMTIuNTUwMiAyMi4wMDAxIDEyLjI1MDIgMjEuODAwMUw4LjM1MDIgMTkuNjAwMUM3LjY1MDIgMTkuMjAwMSA3LjY1MDIgMTguMjAwMSA4LjM1MDIgMTcuOTAwMUw5LjAzNjczIDE3LjQ1MjJNMTYuMzUwMiAxNy40MDAxTDE3LjE1MDIgMTcuMDAwMUMxNy44NTAyIDE2LjYwMDEgMTcuODUwMiAxNS42MDAxIDE3LjE1MDIgMTUuMjAwMUwxNi4zNTAyIDE0LjcwMDFNOS4xNTAyIDE0LjgwMDFMOC4zNTAyIDE1LjIwMDFDNy42NTAyIDE1LjYwMDEgNy42NTAyIDE2LjYwMDEgOC4zNTAyIDE3LjEwMDFMOS4wMzY3MyAxNy40NTIyTTkuMTUwMiAxNC44MDAxTDguMzUwMiAxNC40MDAxQzcuNjUwMiAxMy45MDAxIDcuNjUwMiAxMi45MDAxIDguMzUwMiAxMi41MDAxTDkuMTUwMiAxMi4wMDAxTDEwLjk1MDIgMTEuMDAwMUwxMS41NTAyIDEwLjcwMDFMMTIuMjUwMiAxMC4zMDAxQzEyLjU1MDIgMTAuMTAwMSAxMi45NTAyIDEwLjEwMDEgMTMuMjUwMiAxMC4zMDAxTDEzLjk1MDIgMTAuNzAwMUwxNC41NTAyIDExLjAwMDFMMTYuMzUwMiAxMi4wMDAxTDE3LjE1MDIgMTIuNTAwMUMxNy44NTAyIDEyLjkwMDEgMTcuODUwMiAxMy45MDAxIDE3LjE1MDIgMTQuMzAwMUwxNi4zNTAyIDE0LjcwMDFNOS4xNTAyIDE0LjgwMDFMMTAuOTUwMiAxNS44MDAxTDEyLjI1MDIgMTYuNTAwMUMxMi41NTAyIDE2LjcwMDEgMTIuOTUwMiAxNi43MDAxIDEzLjI1MDIgMTYuNTAwMUwxNC42NTAyIDE1LjcwMDFMMTYuMzUwMiAxNC43MDAxIiBzdHJva2U9IiMwMEZGRjAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOS4xNTAyIDYuNzAwMDVMOC4zNTAyIDYuMjAwMDVDNy42NTAyIDUuODAwMDUgNy42NTAyIDQuODAwMDUgOC4zNTAyIDQuNDAwMDVMMTIuMjUwMiAyLjIwMDA1QzEyLjU1MDIgMi4wMDAwNSAxMi45NTAyIDIuMDAwMDUgMTMuMjUwMiAyLjIwMDA1TDE3LjE1MDIgNC40MDAwNUMxNy44NTAyIDQuODAwMDUgMTcuODUwMiA1LjgwMDA1IDE3LjE1MDIgNi4yMDAwNUwxNi4zNTAyIDYuNzAwMDVNOS4xNTAyIDYuNzAwMDVMMTIuMjUwMiA4LjQwMDA1QzEyLjU1MDIgOC42MDAwNSAxMi45NTAyIDguNjAwMDUgMTMuMjUwMiA4LjQwMDA1TDE2LjM1MDIgNi43MDAwNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                  style={{ color: "transparent" }}
                />
                <span className="bottom-nav__menu--label"> Items</span>
              </a>
            </li>
            <li className=" enabled    hidden">
              <a className="" href="/collection/corepunks/items/">
                <div className="my-nft-count"></div>
                <span className="bottom-nav__menu--label"> My Items</span>
              </a>
            </li>
            <li className="active enabled    ">
              <a className="" href="/collection/corepunks/bidds/">
                <img
                  alt="menu"
                  width="0"
                  height="0"
                  decoding="async"
                  data-nimg="1"
                  className="default"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMjk0MTIgOC4yOTQxMkg4LjMwMzYzTTMuNTg1NzkgMTAuOTk3NkwxMi4xNzQgMTkuNTg1OEMxMi45NTUxIDIwLjM2NjggMTQuMjIxNCAyMC4zNjY4IDE1LjAwMjUgMTkuNTg1OEwxOS41ODU4IDE1LjAwMjRDMjAuMzY2OCAxNC4yMjE0IDIwLjM2NjggMTIuOTU1MSAxOS41ODU4IDEyLjE3NEwxMC45OTc2IDMuNTg1NzlDMTAuNjIyNSAzLjIxMDcxIDEwLjExMzggMyA5LjU4MzM0IDNINy4wMDQ5QzYuNDc0NDYgMyA1Ljk2NTc2IDMuMjEwNzEgNS41OTA2OCAzLjU4NTc5TDMuNTg1NzkgNS41OTA2OEMzLjIxMDcxIDUuOTY1NzYgMyA2LjQ3NDQ3IDMgNy4wMDQ5VjkuNTgzMzRDMyAxMC4xMTM4IDMuMjEwNzEgMTAuNjIyNSAzLjU4NTc5IDEwLjk5NzZaIiBzdHJva2U9IiMzQjQ3NEYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                  style={{ color: "transparent" }}
                />
                <img
                  alt="menu"
                  width="0"
                  height="0"
                  decoding="async"
                  data-nimg="1"
                  className="active"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMjk0MTIgOC4yOTQxMkg4LjMwMzYzTTMuNTg1NzkgMTAuOTk3NkwxMi4xNzQgMTkuNTg1OEMxMi45NTUxIDIwLjM2NjggMTQuMjIxNCAyMC4zNjY4IDE1LjAwMjUgMTkuNTg1OEwxOS41ODU4IDE1LjAwMjRDMjAuMzY2OCAxNC4yMjE0IDIwLjM2NjggMTIuOTU1MSAxOS41ODU4IDEyLjE3NEwxMC45OTc2IDMuNTg1NzlDMTAuNjIyNSAzLjIxMDcxIDEwLjExMzggMyA5LjU4MzM0IDNINy4wMDQ5QzYuNDc0NDYgMyA1Ljk2NTc2IDMuMjEwNzEgNS41OTA2OCAzLjU4NTc5TDMuNTg1NzkgNS41OTA2OEMzLjIxMDcxIDUuOTY1NzYgMyA2LjQ3NDQ3IDMgNy4wMDQ5VjkuNTgzMzRDMyAxMC4xMTM4IDMuMjEwNzEgMTAuNjIyNSAzLjU4NTc5IDEwLjk5NzZaIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                  style={{ color: "transparent" }}
                />
                <span className="bottom-nav__menu--label"> Bidds</span>
              </a>
            </li>
            <li className=" enabled    ">
              <a className="" href="/collection/corepunks/activity/">
                <img
                  alt="menu"
                  width="0"
                  height="0"
                  decoding="async"
                  data-nimg="1"
                  className="default"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxIDEyQzIxIDcuMDI5NDQgMTYuOTcwNiAzIDEyIDNDNy4wMjk0NCAzIDMgNy4wMjk0NCAzIDEyQzMgMTYuOTcwNiA3LjAyOTQ0IDIxIDEyIDIxQzE2IDIxIDE4LjUgMTkgMjAgMTZNMjEgMTJMMTggMTBNMjEgMTJMMjMgOU0xNCAxNEwxMiAxMlY3IiBzdHJva2U9IiMzQjQ3NEYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                  style={{ color: "transparent" }}
                />
                <img
                  alt="menu"
                  width="0"
                  height="0"
                  decoding="async"
                  data-nimg="1"
                  className="active"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxIDEyQzIxIDcuMDI5NDQgMTYuOTcwNiAzIDEyIDNDNy4wMjk0NCAzIDMgNy4wMjk0NCAzIDEyQzMgMTYuOTcwNiA3LjAyOTQ0IDIxIDEyIDIxQzE2IDIxIDE4LjUgMTkgMjAgMTZNMjEgMTJMMTggMTBNMjEgMTJMMjMgOU0xNCAxNEwxMiAxMlY3IiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                  style={{ color: "transparent" }}
                />
                <span className="bottom-nav__menu--label"> Activity</span>
              </a>
            </li>
            <li className=" enabled    ">
              <a className="" href="/collection/corepunks/analytics/">
                <img
                  alt="menu"
                  width="0"
                  height="0"
                  decoding="async"
                  data-nimg="1"
                  className="default"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuNSA0VjIwSDguNU0yMC41IDIwSDE2LjVNMTYuNSAyMFY3TTE2LjUgMjBIMTIuNU0xMi41IDIwVjEwTTEyLjUgMjBIOC41TTguNSAyMFYxMyIgc3Ryb2tlPSIjM0I0NzRGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                  style={{ color: "transparent" }}
                />
                <img
                  alt="menu"
                  width="0"
                  height="0"
                  decoding="async"
                  data-nimg="1"
                  className="active"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuNSA0VjIwSDguNU0yMC41IDIwSDE2LjVNMTYuNSAyMFY3TTE2LjUgMjBIMTIuNU0xMi41IDIwVjEwTTEyLjUgMjBIOC41TTguNSAyMFYxMyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                  style={{ color: "transparent" }}
                />
                <span className="bottom-nav__menu--label"> Analytics</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Collection;
