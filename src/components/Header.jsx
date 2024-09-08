import React from "react";
import { Link } from "react-router-dom";
import MobileHeader from "./MobileHeader";

// images

const Header = () => {
  return (
    <>
      <MobileHeader />
      <header
        className="rn-header haeder-default header--sticky"
        style={{ background: "#13131d" }}
      >
        <div className="container">
          <div className="header-inner">
            <div className="header-left">
              <div className="logo-thumbnail logo-custom-css">
                <a className="logo-light" href="/">
                  <img
                    src="https://stakecoreum.com/static/media/RizeLogo.554ff0543dc4e353cc17.png"
                    alt="nft-logo"
                  />
                </a>
                <a className="logo-dark" href="/">
                  <img
                    src="https://stakecoreum.com/static/media/RizeLogo.554ff0543dc4e353cc17.png"
                    alt="nft-logo"
                  />
                </a>
              </div>
              <div className="mainmenu-wrapper">
                <nav id="sideNav" className="mainmenu-nav d-none d-xl-block">
                  <ul className="mainmenu">
                    <li className="has-droupdown has-menu-child-item">
                      <a href="/">Home </a>
                    </li>

                    <li className="has-droupdown has-menu-child-item">
                      <a href="#">
                        Pages{" "}
                        <i
                          className="fa-solid fa-chevron-down"
                          style={{ fontSize: "8px" }}
                        ></i>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="createnft">
                            Create NFT
                            <i className="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a href="activity">
                            Activity
                            <i className="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a href="create-collection">
                            Create Collection
                            <i className="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a href="author">
                            Author
                            <i className="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a href="edit-profile">
                            Edit Profile
                            <i className="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a href="collection">
                            Collection
                            <i className="feather-fast-forward"></i>
                          </a>
                        </li>
                        <li>
                          <a href="product-details">
                            Product Details
                            <i className="feather-fast-forward"></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-right">
              <div className="setting-option d-none d-lg-block">
                <form className="search-form-wrapper" action="#">
                  <input
                    type="search"
                    placeholder="Search Here"
                    aria-label="Search"
                  />
                  <div className="search-icon">
                    <button>
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="setting-option rn-icon-list d-block d-lg-none">
                <div className="icon-box search-mobile-icon">
                  <button>
                    <i className="feather-search"></i>
                  </button>
                </div>
                <form
                  id="header-search-1"
                  action="#"
                  method="GET"
                  className="large-mobile-blog-search"
                >
                  <div className="rn-search-mobile form-group">
                    <button type="submit" className="search-button">
                      <i className="feather-search"></i>
                    </button>
                    <input type="text" placeholder="Search ..." />
                  </div>
                </form>
              </div>

              <div
                className="setting-option header-btn rbt-site-header"
                id="rbt-site-header"
                //   style={{ display: "none" }}
              >
                <div className="icon-box">
                  <a
                    id="connectbtn"
                    className="btn btn-primary-alta btn-small"
                    href="connect.html"
                  >
                    Wallet connect
                  </a>
                </div>
              </div>

              <div className="setting-option rn-icon-list notification-badge">
                <div className="icon-box">
                  <a href="activity.html">
                    <i className="feather-bell"></i>
                    <span className="badge">6</span>
                  </a>
                </div>
              </div>

              <div
                className="header_admin"
                id="header_admin"
                style={{ display: "block" }}
              >
                <div className="setting-option rn-icon-list user-account">
                  <div className="icon-box">
                    <a href="author.html">
                      <img
                        src="assets/images/icons/boy-avater.png"
                        alt="Images"
                      />
                    </a>
                    <div className="rn-dropdown">
                      <div className="rn-inner-top">
                        <h4 className="title">
                          <a href="product-details.html">Christopher William</a>
                        </h4>
                        <span>
                          <a href="#">Set Display Name</a>
                        </span>
                      </div>
                      <div className="rn-product-inner">
                        <ul className="product-list">
                          <li className="single-product-list">
                            <div className="thumbnail">
                              <a href="product-details.html">
                                <img
                                  src="assets/images/portfolio/portfolio-07.jpg"
                                  alt="Nft Product Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h6 className="title">
                                <a href="product-details.html">Balance</a>
                              </h6>
                              <span className="price">25 ETH</span>
                            </div>
                            <div className="button"></div>
                          </li>
                          <li className="single-product-list">
                            <div className="thumbnail">
                              <a href="product-details.html">
                                <img
                                  src="assets/images/portfolio/portfolio-01.jpg"
                                  alt="Nft Product Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h6 className="title">
                                <a href="product-details.html">Balance</a>
                              </h6>
                              <span className="price">25 ETH</span>
                            </div>
                            <div className="button"></div>
                          </li>
                        </ul>
                      </div>
                      <div className="add-fund-button mt--20 pb--20">
                        <a
                          className="btn btn-primary-alta w-100"
                          href="connect.html"
                        >
                          Add Your More Funds
                        </a>
                      </div>
                      <ul className="list-inner">
                        <li>
                          <a href="author.html">My Profile</a>
                        </li>
                        <li>
                          <a href="edit-profile.html">Edit Profile</a>
                        </li>
                        <li>
                          <a href="connect.html">Manage funds</a>
                        </li>
                        <li>
                          <a href="login.html">Sign Out</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="setting-option mobile-menu-bar d-block d-xl-none">
                <div className="hamberger">
                  <button className="hamberger-button">
                    <i className="feather-menu"></i>
                  </button>
                </div>
              </div>

              <div id="my_switcher" className="my_switcher setting-option">
                <ul>
                  <li>
                    <a
                      href="javascript: void(0);"
                      data-theme="light"
                      className="setColor light"
                    >
                      <img
                        className="sun-image"
                        src="assets/images/icons/sun-01.svg"
                        alt="Sun images"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript: void(0);"
                      data-theme="dark"
                      className="setColor dark"
                    >
                      <img
                        className="Victor Image"
                        src="assets/images/icons/vector.svg"
                        alt="Vector Images"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
