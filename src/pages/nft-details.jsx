import React from "react";
import { useSearchParams } from "react-router-dom";
import SubNav from "../components/SubNav";
import AuctionCard from "../components/Cards/Auction";
import DetailNft from "../components/Cards/DetailNft";

const ProductDetails = () => {
  const [searchParams] = useSearchParams();
  const tokenId = searchParams.get("tokenId");

  return (
    <>
      <DetailNft tokenId={tokenId} />
    </>
  );
};

export default ProductDetails;
