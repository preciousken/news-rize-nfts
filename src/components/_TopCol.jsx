import React, { FC, useEffect, useState } from "react";
// import Heading from "components/StyleComponent/Heading";
// import Nav from "components/StyleComponent/Nav";
// import NavItem from "../StyleComponent/NavItem";
import axios from "axios";
import { config } from "../config";
import { useAppSelector } from "../hooks";
import { useDispatch } from "react-redux";
import {
  changeHotCollections,
  selectHotCollections,
} from "../reducers/collection.reducers";

// import PopularCollectionCard from "../Card/PopularCollectionCard";
import Slider from "react-slick";
// import { SampleNextArrow, SamplePrevArrow } from "../Button/NextPrevButton";

import "./css/_TopCol.css";

const _TopCol = () => {
  const [tabActive, setTabActive] = React.useState("Last 24 hours");
  const dispatch = useDispatch();
  const [time, setTime] = useState(0);
  const globalHotCollections = useAppSelector(selectHotCollections);

  const getHotCollections = (time, limit) => {
    axios
      .post(
        `${config.API_URL}api/collection/get_hot_collections`,
        { limit: limit, time: time },
        {
          headers: {
            "x-access-token": localStorage.getItem("jwtToken"),
          },
        }
      )
      .then((result) => {
        const colData = result.data.data.filter(
          (item) =>
            item.collection_info?.bannerURL !== "" &&
            item.collection_info?.bannerURL !== undefined
        );
        dispatch(changeHotCollections(colData));
      })
      .catch(() => {});
  };

  useEffect(() => {
    getHotCollections(time, 10);
  }, [time]);


  return (
    <div
      className="slider collection jump-to-top hide-slide-arrows rn-section-gapTop"
      style={{
        backgroundColor: "rgba(19, 19, 29, 0.9)",
      }}
    >
      <div className="slider__top-bar">
        <div className="title">Active NFT Launches</div>
      </div>
      <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
        <div className="swiper-wrapper" style={{ display: "flex" }}>
          <div
            className="swiper-slide swiper-slide-next"
            style={{ width: "311.333px", marginRight: "16px" }}
          >
            <div className="collection-card">
              <a className="collection-card__content" href="/launchpad/unis/">
                <div className="collection-card__content--nft">
                  <img
                    alt="menu"
                    loading="lazy"
                    width="0"
                    height="0"
                    decoding="async"
                    data-nimg="1"
                    src="https://image-cdn.bidds.com/?uri=https%3A%2F%2Fimage.bidds.com%2Funis_banner.png%232&amp;width=1000"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="collection-card__content--detail">
                  <div className="title">UNIS</div>
                  <div className="content ">
                    <div className="item">
                      <div className="label">Items</div>
                      <div className="amount white">1.00k</div>
                    </div>
                    <div className="price">
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
                        420<span className="dollar-amount">($27.83)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div
            className="swiper-slide"
            style={{ width: "311.333px", marginRight: "16px" }}
          >
            <div className="collection-card">
              <a className="collection-card__content" href="/launchpad/corepunks/">
                <div className="collection-card__content--nft">
                  <img
                    alt="menu"
                    loading="lazy"
                    width="0"
                    height="0"
                    decoding="async"
                    data-nimg="1"
                    src="https://image-cdn.bidds.com/?uri=https%3A%2F%2Fimage.bidds.com%2Fcorepunks_Banner.png&amp;width=1000"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="collection-card__content--detail">
                  <div className="title">CorePunks</div>
                  <div className="content ">
                    <div className="item">
                      <div className="label">Items</div>
                      <div className="amount white">10.0k</div>
                    </div>
                    <div className="price">
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
                        150<span className="dollar-amount">($9.94)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
      <button
        type="button"
        className="button button--blank slider__navigation slider__navigation--left swiper-button-next-activeNFTLaunches swiper-button-disabled swiper-button-lock"
        disabled=""
      >
        <img
          alt="menu"
          width="0"
          height="0"
          decoding="async"
          data-nimg="1"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDE5TDggMTJMMTUgNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
          style={{ color: "transparent" }}
        />
      </button>
      <button
        type="button"
        className="button button--blank slider__navigation slider__navigation--right swiper-button-prev-activeNFTLaunches swiper-button-disabled swiper-button-lock"
        disabled=""
      >
        <img
          alt="menu"
          width="0"
          height="0"
          decoding="async"
          data-nimg="1"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgNUwxNiAxMkw5IDE5IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
          style={{ color: "transparent" }}
        />
      </button>
    </div>
  );
};
export default _TopCol;
