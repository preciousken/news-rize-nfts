import React from "react";
import { useSearchParams } from "react-router-dom";
import SubNav from "../components/SubNav";
import AuctionCard from "../components/Cards/Auction";
import DetailNft from "../components/Cards/DetailNft";
import LazyLoadImage from "../components/lazyImage/LazyImage";

const MyCollection = () => {
  const [searchParams] = useSearchParams();
  const tokenId = searchParams.get("tokenId");

  const DComponent = ({ imgSrc, profileImgSrc, title, itemsCount }) => {
    return (
      <div
        className="CollectionCard relative p-4 rounded-2xl overflow-hidden h-[410px] flex justify-center flex-col group cursor-pointer"
        style={{ width: "250px" }}
      >
        <div className="nc-NcImage absolute inset-0">
          <img
            src={imgSrc}
            alt="nc-imgs"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 group-hover:h-full to-transparent"></div>
        <div className="relative mt-auto mb-3">
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full"
              src={profileImgSrc}
              alt="profile"
            />
            <div className="ml-2 text-white text-xl">
              <span className="font-normal">By</span>{" "}
              <span className="font-bold">new profile</span>
            </div>
          </div>
          <h2 className="font-semibold text-3xl mt-1.5 text-white">{title}</h2>
          <div className="text-lg text-white">{itemsCount}</div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="custom-modal"
      style={{
        backgroundColor: "rgba(19, 19, 29, 0.99)",
        marginTop: "100px",
      }}
    >
      <div className="custom-modal__inner">
        <div className="nft-detail">
          <div className="nft-detail__wrapper">
            <div className="container">
              <div style={{ paddingTop: "3rem", paddingRight: "5rem" }}>
                <h1 style={{ color: "#fff" }}>My Collections</h1>
              </div>
              <div style={{ margin: "1rem", display: "inline-block" }}>
                <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 ttnc-ButtonPrimary disabled:bg-opacity-70 text-primary-shadow tracking-wide bg-green-500 hover:bg-green-600 text-white button-stroke button-small focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-0">
                  <span>Create a collection</span>
                </button>
              </div>

              {/* Card Container */}
              <div
                id="sliderWrapper"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  justifyContent: "left",
                  padding: "20px",
                }}
              >
                <DComponent
                  imgSrc="https://image-cdn.bidds.com/?uri=ipfs%3A%2F%2FQme2aAocNYMnjtvLHpRHK3mQtdEN7XAWBHBnnfw8JNK1PJ&collection=645341849&width=1000"
                  profileImgSrc="https://rize2day.b-cdn.net/uploads/e5221927e08f242b00693a59508897ec.png"
                  title="collTest"
                  itemsCount="455 items"
                />
              </div>

              <div style={{ marginBottom: "5rem" }}>
                <span>&nbsp;&nbsp;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCollection;
