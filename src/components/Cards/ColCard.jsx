import React, { FC, useEffect, useState } from "react";
// import Avatar from "components/StyleComponent/Avatar";
// import VerifyIcon from "../StyleComponent/VerifyIcon";
import { useAppDispatch } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { changeConsideringCollectionId } from "../../reducers/collection.reducers";
import { config } from "../../config";
// import VideoForBannerPreview from "./VideoForBannerPreview";
import { nanoid } from "@reduxjs/toolkit";
// import NcImage from "components/NcComponent/NcImage";
// import { isVideo } from "utils/utils";
// import defaultBanner from "images/default_banner.jpg";

const ColCard = ({ collection = {} }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [DEMO_NFT_ID] = React.useState(nanoid());

  useEffect(() => {
    setData(collection);
  }, [collection]);

  const onSelectCollection = (id) => {
    if (id !== "" && id) {
      dispatch(changeConsideringCollectionId(id));
      localStorage.setItem("collectionId", id);
      navigate("/collectionItems/" + id);
    }
  };

  // console.log("....data?.collection_info///",data?.collection_info)

  return (
    <div
      className="swiper-slide swiper-slide-active"
      style={{ width: "311.333px", marginRight: "16px" }}
    >
      <div className="collection-card">
        <a className="collection-card__content" href="/launchpad/coreumpunks/">
          <div className="collection-card__content--nft">
            <img
              alt="menu"
              loading="lazy"
              width="0"
              height="0"
              decoding="async"
              data-nimg="1"
              src={
                config.UPLOAD_URL +
                "uploads/" +
                data?.collection_info?.bannerURL
              }
              style={{ color: "transparent" }}
            />
          </div>
          <div className="collection-card__content--detail">
            <div className="title">{data?.collection_info?.name}</div>
            <div className="content ">
              <div className="item">
                <div className="label">{(data)?.items_length} items</div>
                <div className="amount white">{""}</div>
              </div>
              {/* <div className="price">
                <div className="label">Price</div>
                <div className="amount blue">
                  <img
                    alt="menu"
                    width="0"
                    height="0"
                    decoding="async"
                    data-nimg="1"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4N18yODM5KSI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMV8xODdfMjgzOSkiPgo8cGF0aCBkPSJNNiAwQzIuNjY2NjcgMCAwIDIuNjY2NjcgMCA2QzAgOS4zMzMzMyAyLjY2NjY3IDEyIDYgMTJDOS4zMzMzMyAxMiAxMiA5LjMzMzMzIDEyIDZDMTIgMi42NjY2NyA5LjMzMzMzIDAgNiAwWk04LjMzMzMzIDEwLjUzMzNDNy40NjY2NyAxMSA2LjYgMTEuMTMzMyA1LjY2NjY3IDExLjA2NjdDNC40NjY2NyAxMSAzLjQgMTAuNTMzMyAyLjQ2NjY3IDkuNzMzMzNDMi4zMzMzMyA5LjYgMi4zMzMzMyA5LjYgMi40NjY2NyA5LjQ2NjY3QzMgOC45MzMzMyAzLjUzMzMzIDguNDY2NjcgNCA3LjkzMzMzQzQuMDY2NjcgNy44NjY2NyA0LjEzMzMzIDcuODY2NjcgNC4yNjY2NyA3LjkzMzMzQzUuNTMzMzMgOS4wNjY2NyA3LjUzMzMzIDguNjY2NjcgOC4yNjY2NyA3LjJDOS4wNjY2NyA1LjYgOCAzLjczMzMzIDYuMjY2NjcgMy41MzMzM0M1LjUzMzMzIDMuNDY2NjcgNC44NjY2NyAzLjY2NjY3IDQuMjY2NjcgNC4xMzMzM0M0LjEzMzMzIDQuMiA0LjA2NjY3IDQuMiA0IDQuMTMzMzNDMy40NjY2NyAzLjYgMi45MzMzMyAzLjA2NjY3IDIuNCAyLjUzMzMzQzIuMzMzMzMgMi40NjY2NyAyLjMzMzMzIDIuNCAyLjQgMi4zMzMzM0MyLjkzMzMzIDEuODY2NjcgMy41MzMzMyAxLjQ2NjY3IDQuMiAxLjI2NjY3QzQuNzMzMzMgMSA1LjMzMzMzIDAuOTMzMzMzIDUuOTMzMzMgMC45MzMzMzNDNy45MzMzMyAxIDkuNDY2NjcgMS44NjY2NyAxMC40NjY3IDMuNkMxMC45MzMzIDQuNDY2NjcgMTEuMTMzMyA1LjMzMzMzIDExLjA2NjcgNi4zMzMzM0MxMC45MzMzIDguMiAxMCA5LjYgOC4zMzMzMyAxMC41MzMzWk00LjYgNkM0LjYgNS4yIDUuMiA0LjYgNiA0LjZDNi44IDQuNiA3LjQgNS4yIDcuNCA2QzcuNCA2LjggNi44IDcuNCA2IDcuNEM1LjIgNy40IDQuNiA2LjggNC42IDZaIiBmaWxsPSIjMDBGRkYwIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xODdfMjgzOSI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8xODdfMjgzOSI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                    style={{ color: "transparent" }}
                  />
                  230<span className="dollar-amount">($15.24)</span>
                </div>
              </div> */}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ColCard;
