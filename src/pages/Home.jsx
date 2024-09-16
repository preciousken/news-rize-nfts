import React from "react";

import Hero from "../components/Hero";
import Bidding from "../components/Bidding";
import Steps from "../components/Steps";
import NewestI from "../components/NewestI";
import TopSeller from "../components/TopSeller";
import ExploreProduct from "../components/ExploreProduct";
import TopCollection from "../components/TopCol";
import _TopCol from "../components/_TopCol";
import ConnectM from "../components/Modal/ConnectM";
import { useAuth } from "../context/AuthContext";

const Home = () => {


  const {isConnectMOpen} = useAuth()
  return (
    <>
           {isConnectMOpen && (<ConnectM />)} 
      {/* <Hero /> */}
      <Bidding />
      {/* <Steps /> */}
      <NewestI />
      <TopSeller />
      {/* <ExploreProduct /> */}
      <TopCollection />
      {/* <_TopCol /> */}
    </>
  );
};

export default Home;
