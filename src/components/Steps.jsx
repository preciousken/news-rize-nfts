import React from "react";
import { Link } from "react-router-dom";
import StepCard from "./Cards/StepCard";

// images

const Steps = () => {
  const steps = [
    {
      img: "assets/images/icons/shape-7.png",
      title: "Setup up your wallet",
      desc: "Powerful features and inclusions, which makes Nuron standout,easily customizable and scalable.",
      link: "javascript:void(0)",
    },
    {
      img: "assets/images/icons/shape-1.png",
      title: "Create your collection",
      desc: "A great collection of beautiful website templates for your need. Choose the best suitable template.",
      link: "create-collection",
    },
    {
      img: "assets/images/icons/shape-5.png",
      title: "Add your NFT's",
      desc: "We've made the template fully responsive, so it looks great on all devices: desktop, tablets and.",
      link: "createnft",
    },
    {
      img: "assets/images/icons/shape-6.png",
      title: "Sell Your NFT's",
      desc: "I throw myself down among the tall grass by the stream as I lie close to the earth NFT's.",
      link: "javascript:void(0)",
    },
  ];
  return (
    <div
      className="rn-service-area rn-section-gapTop"
      style={{ 
        backgroundColor: "rgba(19, 19, 29, 0.97)" 
      }}

    >
      <div className="container">
        <div className="row">
          <div className="col-12 mb--50">
            <h3
              className="title sal-animate"
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
              Create and sell your NFTs
            </h3>
          </div>
        </div>
        <StepCard steps={steps} />
      </div>
    </div>
  );
};

export default Steps;
