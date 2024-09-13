import React from "react";
import CardC from "../components/Cards/Card";
import ExploreProduct from "../components/ExploreProduct";

const Author = () => {
  return (
    <div style={{ 
        backgroundColor: "rgba(19, 19, 29, 0.9)" 
      }}
>
      {/* /////////// */}
      <div className="rn-author-bg-area bg_image--9 bg_image ptb--150">
        <div className="container">
          <div className="row"></div>
        </div>
      </div>
      {/* ///////// */}
      <div className="rn-author-area mb--30 mt_dec--120">
        <div className="container">
          <div className="row padding-tb-50 align-items-center d-flex">
            <div className="col-lg-12">
              <div className="author-wrapper">
                <div className="author-inner">
                  <div className="user-thumbnail">
                    <img
                      src="https://rainbowit.net/html/nuron/assets/images/slider/banner-06.png"
                      alt=""
                    />
                  </div>
                  <div className="rn-author-info-content">
                    <h4
                      className="title"
                      style={{
                        color: "#ffffff",
                        fontSize: "24px",
                        fontFamily: "Roboto",
                        fontWeight: "bolder",
                      }}
                    >
                      MRS SUNAYRA AHSAN
                    </h4>
                    <a
                      href="#"
                      className="social-follw"
                      style={{
                        color: "#acacac",
                        fontSize: "18px",
                        fontFamily: "Roboto",
                        fontWeight: "bolder",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-twitter"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                      <span className="user-name">it0bsession</span>
                    </a>
                    <div className="follow-area">
                      <div className="follow followers">
                        <span>
                          186k{" "}
                          <a href="#" className="color-body">
                            followers
                          </a>
                        </span>
                      </div>
                      <div className="follow following">
                        <span>
                          156{" "}
                          <a href="#" className="color-body">
                            following
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="author-button-area">
                      <span className="btn at-follw follow-button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-user-plus"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="8.5" cy="7" r="4"></circle>
                          <line x1="20" y1="8" x2="20" y2="14"></line>
                          <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>{" "}
                        Follow
                      </span>
                      <span
                        className="btn at-follw share-button"
                        data-bs-toggle="modal"
                        data-bs-target="#shareModal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-share-2"
                        >
                          <circle cx="18" cy="5" r="3"></circle>
                          <circle cx="6" cy="12" r="3"></circle>
                          <circle cx="18" cy="19" r="3"></circle>
                          <line
                            x1="8.59"
                            y1="13.51"
                            x2="15.42"
                            y2="17.49"
                          ></line>
                          <line
                            x1="15.41"
                            y1="6.51"
                            x2="8.59"
                            y2="10.49"
                          ></line>
                        </svg>
                      </span>
                      <div className="count at-follw">
                        <div className="share-btn share-btn-activation dropdown">
                          <button
                            className="icon"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <svg
                              viewBox="0 0 14 4"
                              fill="none"
                              width="16"
                              height="16"
                              className="sc-bdnxRM sc-hKFxyN hOiKLt"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </button>

                          <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                            <button
                              type="button"
                              className="btn-setting-text report-text"
                              data-bs-toggle="modal"
                              data-bs-target="#reportModal"
                            >
                              Report
                            </button>
                            <button
                              type="button"
                              className="btn-setting-text report-text"
                            >
                              Claim Owenership
                            </button>
                          </div>
                        </div>
                      </div>
                      <a
                        href="edit-profile.html"
                        className="btn at-follw follow-button edit-btn"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-edit"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //////// */}
      <div className="rn-authore-profile-area">
        <div className="container">
          {/* ////////////////....NAV.START... */}
          <div className="row">
            <div className="col-12">
              <div className="tab-wrapper-one">
                <nav className="tab-button-one">
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      On Sale
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Owned
                    </button>
                    <button
                      className="nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Created
                    </button>
                    <button
                      className="nav-link"
                      id="nav-liked-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-liked"
                      type="button"
                      role="tab"
                      aria-controls="nav-liked"
                      aria-selected="false"
                    >
                      Liked
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          {/* ////////////////....NAV.ENDS... */}

          <div className="row g-5">
          <CardC />
          <CardC />
          <CardC />
          <CardC />
          <CardC />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
