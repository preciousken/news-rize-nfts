import React, { useEffect, useState } from "react";
import AucCard from "./Cards/AucCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { config } from "../config";
import ColLC from "./Cards/ColLC";
// import axios from "axios";

const Bidding = () => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: "10%",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "12%",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerPadding: "8%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
  };

  const [items, setItems] = useState([]);

  const getPopularItems = async () => {
    try {
      const response = await fetch(
        `${config.API_URL}api/item/getPopularItems`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ limit: 10 }),
        }
      );

      const data = await response.json();

      if (data.code === 0) {
        setItems(data.data || []);
      }
    } catch (error) {
      console.log("getPopularItems() error ===> ", error);
    }
  };

  useEffect(() => {
    getPopularItems();
  }, []);

  return (
    <div
      className="rn-live-bidding-area rn-section-gapTop"
      style={{ 
        backgroundColor: "rgba(19, 19, 29, 0.97)" 
      }}

    >
      <div className="container">
        <div className="row mb--50">
          <div className="col-lg-12">
            <div className="section-title">
              <h3
                className="title mb--0 live-bidding-title sal-animate"
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
                Active NFTS
              </h3>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div style={{ height: "400px", overflow: "visible" }}>
              <Slider {...sliderSettings}>
                {items.map((item) => {
                  // return <AucCard item={item} />;
                  return <ColLC item={item} />;
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bidding;
