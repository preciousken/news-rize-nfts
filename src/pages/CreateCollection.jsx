import React from "react";
import SubNav from "../components/SubNav";

const CreateCollection = () => {
  return (
    <div style={{ 
        backgroundColor: "rgba(19, 19, 29, 0.9)" 
      }}
>
      <SubNav title="Create Collection" />
      <div className="creat-collection-area pt--80">
        <div className="container">
          <div className="row g-5 ">
            <div className="col-lg-3 offset-1 ml_md--0 ml_sm--0">
              <div className="collection-single-wized banner">
                <label
                  className="title required"
                  style={{ fontSize: "14px", color: "#acacac" }}
                >
                  Logo image
                </label>

                <div className="create-collection-input logo-image">
                  <div className="logo-c-image logo">
                    <img
                      id="rbtinput1"
                      // src="assets/images/profile/profile-01.jpg"
                      src="https://rainbowit.net/html/nuron/assets/images/profile/profile-01.jpg"
                      alt="Profile-NFT"
                    />
                    <label for="fatima" title="No File Choosen">
                      <span className="text-center color-white">
                        <i className="feather-edit"></i>
                      </span>
                    </label>
                  </div>
                  <div className="button-area">
                    <div className="brows-file-wrapper">
                      {/* <!-- actual upload which is hidden --> */}
                      <input name="fatima" id="fatima" type="file" />
                      {/* <!-- our custom upload button --> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="collection-single-wized banner">
                <label
                  className="title"
                  style={{ fontSize: "14px", color: "#acacac" }}
                >
                  Cover Image
                </label>
                <div className="create-collection-input feature-image">
                  <div className="logo-c-image feature">
                    <img
                      id="rbtinput2"
                      src="https://rainbowit.net/html/nuron/assets/images/profile/cover-04.png"
                      alt="Profile-NFT"
                    />
                    <label for="nipa" title="No File Choosen">
                      <span className="text-center color-white">
                        <i className="feather-edit"></i>
                      </span>
                    </label>
                  </div>
                  <div className="button-area">
                    <div className="brows-file-wrapper">
                      {/* <!-- actual upload which is hidden --> */}
                      <input name="nipa" id="nipa" type="file" />
                      {/* <!-- our custom upload button --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="create-collection-form-wrapper">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="collection-single-wized">
                      <label
                        for="name"
                        className="title required"
                        style={{ fontSize: "14px", color: "#acacac" }}
                      >
                        Name
                      </label>
                      <div className="create-collection-input">
                        <input
                          id="name"
                          className="name"
                          type="text"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="collection-single-wized">
                      <label
                        for="url"
                        className="title"
                        style={{ fontSize: "14px", color: "#acacac" }}
                      >
                        URL
                      </label>
                      <div className="create-collection-input">
                        <input
                          id="url"
                          className="url"
                          type="text"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="collection-single-wized">
                      <label
                        className="title"
                        style={{ fontSize: "14px", color: "#acacac" }}
                      >
                        Category
                      </label>
                      <div className="create-collection-input">
                        <div className="nice-select mb--30" tabindex="0">
                          <span
                            className="current"
                            style={{ fontSize: "14px", color: "#fff" }}
                          >
                            Sports
                          </span>
                          <ul className="list">
                            <li
                              data-value="Art"
                              data-display="Art"
                              className="option"
                            >
                              Art
                            </li>
                            <li data-value="1" className="option">
                              Collectibles
                            </li>
                            <li data-value="2" className="option focus">
                              Music
                            </li>
                            <li data-value="4" className="option selected">
                              Sports
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="collection-single-wized">
                      <label
                        for="description"
                        className="title"
                        style={{ fontSize: "14px", color: "#acacac" }}
                      >
                        Description
                      </label>
                      <div className="create-collection-input">
                        <textarea
                          id="description"
                          className="text-area"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="collection-single-wized">
                      <label
                        for="earning"
                        className="title"
                        style={{ fontSize: "14px", color: "#acacac" }}
                      >
                        Creator Earnings
                      </label>
                      <div className="create-collection-input">
                        <input id="earning" className="url" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="collection-single-wized">
                      <label
                        for="wallet"
                        className="title"
                        style={{ fontSize: "14px", color: "#acacac" }}
                      >
                        Your payout wallet address
                      </label>
                      <div className="create-collection-input">
                        <input id="wallet" className="url" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="nuron-information mb--30">
                      <div className="single-notice-setting">
                        <div className="input">
                          <input
                            type="checkbox"
                            id="themeSwitch"
                            name="theme-switch"
                            className="theme-switch__input"
                          />
                          <label
                            for="themeSwitch"
                            className="theme-switch__label"
                          >
                            <span></span>
                          </label>
                        </div>
                        <div className="content-text">
                          <p>Explicit &amp; sensitive content</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="button-wrapper">
                      {/* <!-- <a href="#" className="btn btn-primary btn-large mr--30" data-bs-toggle="modal" data-bs-target="#collectionModal">Preview</a> --> */}
                      <a href="#" className="btn btn-primary-alta btn-large">
                        Create
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCollection;
