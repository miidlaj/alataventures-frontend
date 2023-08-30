/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="footer">
          <div className="container">
            <div className="row">
              {/*Start single footer widget*/}
              <div
                className="col-xl-3 col-lg-3 col-md-12 col-sm-12 wow animated fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="single-footer-widget">
                  <div className="our-company-info">
                    <div className="footer-logo">
                      <a href="index.html">
                        <img
                          src="assets/images/footer/footer-logo.png"
                          alt="Awesome Footer Logo"
                          title="Logo"
                        />
                      </a>
                    </div>
                    <div className="text">
                      <p>
                        Proin tempus, enim lobortis placerat porta, libero
                        mauris feugiat magna, ut lobortis justo tortor a ipsum.
                        Proin luctus posuere eros porttitor euismod. Praesent
                        pulvinar.
                      </p>
                    </div>
                    <div className="footer-social-links">
                      <ul className="social-links-style1">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-vimeo" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*End single footer widget*/}
              {/*Start single footer widget*/}
              <div
                className="col-xl-4 col-lg-4 col-md-9 col-sm-12 wow animated fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="single-footer-widget margin50-0">
                  <div className="title">
                    <h3>Information</h3>
                  </div>
                  <div className="pages-box">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <ul className="page-links">
                          <li>
                            <a href="#">Home</a>
                          </li>
                          <li>
                            <a href="#">About Us</a>
                          </li>
                          <li>
                            <a href="#">Services</a>
                          </li>
                          <li>
                            <a href="#">Projects</a>
                          </li>
                          <li>
                            <a href="#">Why Us</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <ul className="page-links">
                          <li>
                            <a href="#">Portfolio</a>
                          </li>
                          <li>
                            <a href="#">Ongoing Projects</a>
                          </li>
                          <li>
                            <a href="#">Our Clients</a>
                          </li>
                          <li>
                            <a href="#">Brands</a>
                          </li>
                          <li>
                            <a href="#">Contact Us</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End single footer widget*/}
              {/*Start single footer widget*/}
              <div
                className="col-xl-5 col-lg-5 col-md-12 col-sm-12 wow animated fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="single-footer-widget">
                  <div className="twitter-feed-box">
                    <h3>
                      <a href="#">Etiam sapien tortor, dictum</a>
                    </h3>
                    <span>July 21, 2018 10:00 AM</span>
                    <div className="border-box" />
                    <div className="text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elieiusmod tempor incididunt ut labore et dolore magn
                        aliqua. Ut enim ad minim veniam.
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="comments">
                        <a href="#">
                          <i
                            className="fa fa-commenting-o"
                            aria-hidden="true"
                          />
                          2 comments
                        </a>
                      </div>
                      <div className="twitter-icon">
                        <span className="flaticon-twitter-logo-shape" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End single footer widget*/}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="outer-box">
              <div className="copyright-text">
                <p>
                  Copyright© All Rights Reserved <a href="#">alata ventures.</a>
                </p>
              </div>
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="#">Career</a>
                  </li>
                  <li>
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <a href="#">Refund policy</a>
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
