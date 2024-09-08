import React from "react";

const SubNav = ({ title = "" }) => {
  return (
    <div className="rn-breadcrumb-inner ptb--30">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-12">
            <h5
              className="title text-center text-md-start"
              style={{
                color: "#ffffff",
                fontSize: "22px",
                fontFamily: "Roboto",
              }}
            >
              {title}
            </h5>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <ul className="breadcrumb-list">
              <li className="item">
                <a href="/">Home</a>
              </li>
              <li className="separator">
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li className="item current">{title}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
