import ColCard from "./Cards/ColCard";

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

const TopCollection = () => {
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

  const settings = {
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Maximum 4 cards displayed
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false, // Disable center mode to avoid partial display
    centerPadding: "0", // Remove any padding that would cause partial display
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Display 3 cards on medium screens
          centerPadding: "0", // No padding
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, // Display 2 cards on smaller screens
          centerPadding: "0", // No padding
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Display 1 card on very small screens
          centerPadding: "0", // No padding
        },
      },
    ],
    // prevArrow: <SamplePrevArrow />,
    // nextArrow: <SampleNextArrow />,
  };

  return (
    <div
      className="rn-collection-area rn-section-gapTop rn-section-gapBottom"
      style={{
        backgroundColor: "rgba(19, 19, 29, 0.9)",
      }}
    >
      <div className="container">
        <div className="row mb--50 align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <h3
              className="title mb--0 sal-animate"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
              style={{
                color: "#ffffff",
                fontSize: "32px",
                fontFamily: "Roboto",
                fontWeight: "bolder",
              }}
            >
              Top Collection
            </h3>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
            <div
              className="view-more-btn text-start text-sm-end sal-animate"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <a className="btn-transparent" href="#">
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
        <Slider {...settings}>
          {globalHotCollections &&
            globalHotCollections.length > 0 &&
            globalHotCollections.map((item, index) => {
              return <ColCard 
              collection={item}
              />;
            })}
            </Slider>
        </div>
      </div>
    </div>
  );
};

export default TopCollection;
