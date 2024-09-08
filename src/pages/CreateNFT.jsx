import React from "react";

import SubNav from "../components/SubNav";
import CreateNft from "../components/CreateNft";

const CreateNFT = () => {
  return (
    <div style={{ background: "#13131d" }}>
      <SubNav title="Mint NFT" />
      <CreateNft />
    </div>
  );
};

export default CreateNFT;
