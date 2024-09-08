import React from "react";

import "./css/404.css";

const PageNotFound = () => {
  return (
    <div className="section">
      <h1 className="error">404</h1>
      <div className="page">
        Ooops!!! The page you are looking for is not found
      </div>
      <a className="back-home" href="#!">
        Back to home
      </a>
    </div>
  );
};

export default PageNotFound;
