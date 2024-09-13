import React from "react";

import SubNav from "../components/SubNav";
import CreateNft from "../components/CreateNft";

const CreateNFT = () => {
  return (
    <div style={{ 
        backgroundColor: "rgba(19, 19, 29, 0.9)" 
      }}
>
      <SubNav title="Mint NFT" />
      <CreateNft />
    </div>
  );
};

export default CreateNFT;
