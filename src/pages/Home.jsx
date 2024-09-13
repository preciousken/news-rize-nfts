import React from "react";

import Hero from "../components/Hero";
import Bidding from "../components/Bidding";
import Steps from "../components/Steps";
import NewestI from "../components/NewestI";
import TopSeller from "../components/TopSeller";
import ExploreProduct from "../components/ExploreProduct";
import TopCollection from "../components/TopCol";

const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      <Bidding />
      {/* <Steps /> */}
      <NewestI />
      <TopSeller />
      <ExploreProduct />
      <TopCollection />
    </>
  );
};

export default Home;
