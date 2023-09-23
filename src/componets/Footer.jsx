import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="footer">
          <div className="container">
            <div className="row justify-center">
              {/*Start single footer widget*/}
              <div
                className="col-xl-3 col-lg-3 col-md-12 col-sm-12 wow animated fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="single-footer-widget">
                  <div className="our-company-info">
                    <div className="footer-logo">
                      <Link to="/l">
                        <img
                          src="assets/images/logo/alata logo.png"
                          alt="Awesome Footer Logo"
                          title="Logo"
                          style={{ maxWidth: "200px" }}
                        />
                      </Link>
                    </div>
                    <div className="text">
                      <p>
                        Building Dreams, Crafting Excellence. Alata Ventures -
                        Your Trusted Construction Partner
                      </p>
                    </div>
                    {/* <div className="footer-social-links">
                      <ul className="social-links-style1">
                        <li>
                          <a href="www.facebook.com" target="_blank">
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="www.facebook.com" target="_blank">
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="www.facebook.com" target="_blank">
                            <i className="fa fa-pinterest" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="www.facebook.com" target="_blank">
                            <i className="fa fa-vimeo" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
              {/*End single footer widget*/}
              {/*Start single footer widget*/}
              {/* <div
                className="col-xl-4 col-lg-4 col-md-9 col-sm-12 wow animated fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="single-footer-widget margin50-0 pt-3">
                  <div className="title">
                    <h3>Information</h3>
                  </div>
                  <div className="pages-box">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <ul className="page-links">
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <a href="#about">About</a>
                          </li>
                          <li>
                            <a href="#contact">Contact</a>
                          </li>
                          <li>
                            <Link to="/company">Company</Link>
                          </li>
                          <li>
                            <Link to="/portfolio">Portfolio</Link>
                          </li>
                          <li>
                            <Link to="/gallery">Gallery</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <ul className="page-links">
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <a href="#about">About Us</a>
                          </li>
                          <li>
                            <Link to="/portfolio">Portfolio</Link>
                          </li>
                          <li>
                            <Link to="/gallery">Gallery</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*End single footer widget*/}
              {/*Start single footer widget*/}
              {/* <div
                className="col-xl-5 col-lg-5 col-md-12 col-sm-12 wow animated fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="single-footer-widget">
                  <div className="twitter-feed-box">
                    <h3>
                      <p>Alataventures</p>
                    </h3>
                    <span>Sep 7, 2023 10:00 AM</span>
                    <div className="border-box" />
                    <div className="text">
                      <p>
                        Building Dreams, Crafting Excellence. Alata Ventures -
                        Your Trusted Construction Partner
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="twitter-icon">
                        <span className="flaticon-twitter-logo-shape" />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*End single footer widget*/}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="outer-box">
              <div className="copyright-text">
                <p>
                  Copyright© All Rights Reserved <a href="/">Alataventures 2023.</a>
                </p>
              </div>
              <div className="footer-menu">
              <ul className="page-links flex justify-between">
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <a href="#about">About</a>
                          </li>
                          <li>
                            <a href="#contact">Contact</a>
                          </li>
                          <li>
                            <Link to="/company">Company</Link>
                          </li>
                          <li>
                            <Link to="/portfolio">Portfolio</Link>
                          </li>
                          <li>
                            <Link to="/gallery">Gallery</Link>
                          </li>
                        </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
