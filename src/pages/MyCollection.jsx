import React from "react";
import { useSearchParams } from "react-router-dom";
import SubNav from "../components/SubNav";
import AuctionCard from "../components/Cards/Auction";
import DetailNft from "../components/Cards/DetailNft";
import LazyLoadImage from "../components/lazyImage/LazyImage";

const MyCollection = () => {
  const [searchParams] = useSearchParams();
  const tokenId = searchParams.get("tokenId");

  return (
    <>
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
              {/* ................................. */}
           
              {/* ................................. */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCollection;
