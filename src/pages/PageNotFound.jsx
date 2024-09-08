import React from "react";

import "./css/404.css";

const PageNotFound = () => {
  return (
    <div className="errorpage section">
      <h1 className="error">404</h1>
      <div className="page">
        Ooops!!! The page you are looking for is not found <br />
        Also ensure you connect your wallet
      </div>
      <a className="back-home" href="#!">
        Back to home
      </a>
    </div>
  );
};

export default PageNotFound;
