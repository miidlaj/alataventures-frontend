import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  // Listen for scroll events and update the scroll position
  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const location = useLocation();
  return (
    <>
      <header className={`main-header ${scrollPosition >= 250 ? 'fixed-header' : ''}`}>
        {/*Start Header upper */}
        <div className="header-upper">
          <div className="container clearfix">
            <div className="outer-box clearfix">
              <div className="header-upper-left float-left clearfix">
                <div className="logo">
                  <Link to="/">
                    <img
                      src="assets/images/logo/alata logo.png"
                      alt="Awesome Logo"
                      title=""
                    />
                  </Link>
                </div>
              </div>
              <div className="header-upper-right float-right clearfix">
                <div className="header-contact-info">
                  <ul>
                    <li>
                      <div className="icon">
                        <span className="flaticon-call thm_clr1" />
                      </div>
                      <div className="title">
                        <span className="thm_clr1">Call us anytime</span>
                        <h6>
                          <a href="tel:+919946666636">(+91) 9946 66 6636</a>
                        </h6>
                      </div>
                    </li>
                    {/* <li>
                          <div class="icon">
                              <span class="flaticon-clock thm_clr1"></span>
                          </div>
                          <div class="title">
                              <span class="thm_clr1">Opening time</span>
                              <h6>Sat - Sun 08.00 to 14.00</h6>
                          </div>
                      </li> */}
                    <li>
                      <div className="icon">
                        <span className="flaticon-mail thm_clr1" />
                      </div>
                      <div className="title">
                        <span className="thm_clr1">Email us now</span>
                        <h6>
                          <a href="mailto:sales@alataventures.com">
                            sales@alataventures.com
                          </a>
                        </h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
        {/*Start header lawer */}
        <div className="header-lawer">
          <div className="container clearfix">
            <div className="outer-box clearfix">
              {/*Top Left*/}
              <div className="header-lawer-left float-left">
                <div className="nav-outer clearfix">
                  {/*Mobile Navigation Toggler*/}
                  <div className="mobile-nav-toggler">
                    <div className="inner">
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </div>
                  </div>
                  {/* Main Menu */}
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <div
                      className="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation clearfix mainmenu one-page-scroll-menu">
                        <li className="scrollToLink">
                          <Link to={"/"} className="home-icon" href="#banner">
                            <span className="hometext">Home</span>
                            <span className="flaticon-real-estate homeicon" />
                          </Link>
                        </li>
                        <li className="scrollToLink">
                          <Link to="/about">About</Link>
                        </li>
                        <li
                          className={`"scrollToLink " ${
                            location.pathname.includes("/portfolio") &&
                            " text-white"
                          }`}
                        >
                          <Link to="/portfolio">Portfolios</Link>
                        </li>
                        <li
                          className={`"scrollToLink " ${
                            location.pathname.includes("/gallery") &&
                            " text-white"
                          }`}
                        >
                          <Link to="/gallery">Gallery</Link>
                        </li>
                        {/* <li
                          className={`"scrollToLink " ${
                            location.pathname.includes("/admin") &&
                            " text-white"
                          }`}
                        >
                          <Link to="/admin">Settings</Link>
                        </li> */}
                      </ul>
                    </div>
                  </nav>
                  {/* Main Menu End*/}
                </div>
              </div>
              {/*Top Right*/}

              <div className="header-lawer-right clearfix float-right">
                <div className="quote-button">
                  <a href="#contact">
                    Contact US
                    <span className="fa fa-phone" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End header lawer */}
        {/*Sticky Header*/}
        <div className="sticky-header">
          <div className="container">
            <div className="clearfix">
              {/*Logo*/}
              <div className="logo float-left">
                <Link to="/" className="img-responsive">
                  <img
                    src="assets/images/logo/alata logo.png"
                    alt="Logo"
                    title=""
                  />
                </Link>
              </div>
              {/*Right Col*/}
              <div className="right-col float-right">
                {/* Main Menu */}
                <nav className="main-menu clearfix">
                <ul className="navigation clearfix mainmenu one-page-scroll-menu">
                        <li className="scrollToLink">
                          <Link to={"/"} className="home-icon" href="#banner">
                            <span className="hometext">Home</span>
                            <span className="flaticon-real-estate homeicon" />
                          </Link>
                        </li>
                        <li className="scrollToLink">
                          <Link to={"/about"}>About</Link>
                        </li>
                        <li
                          className={`"scrollToLink " ${
                            location.pathname.includes("/portfolio") &&
                            " text-white"
                          }`}
                        >
                          <Link to="/portfolio">Portfolios</Link>
                        </li>
                        <li
                          className={`"scrollToLink " ${
                            location.pathname.includes("/gallery") &&
                            " text-white"
                          }`}
                        >
                          <Link to="/gallery">Gallery</Link>
                        </li>
                        {/* <li
                          className={`"scrollToLink " ${
                            location.pathname.includes("/admin") &&
                            " text-white"
                          }`}
                        >
                          <Link to="/admin">Settings</Link>
                        </li> */}
                      </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/*End Sticky Header*/}
        {/* Mobile Menu  */}
        <div className="mobile-menu">
          <div className="menu-backdrop" />
          <div className="close-btn">
            <span className="icon flaticon-multiply" />
          </div>
          <nav className="menu-box">
            <div className="nav-logo">
              <a href="index.html">
                <img
                  src="assets/images/footer/footer-logo.png"
                  alt=""
                  title=""
                />
              </a>
            </div>
            <div className="menu-outer">
              {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
            </div>
            {/*Social Links*/}
            <div className="social-links">
              <ul className="clearfix">
                <li>
                  <a href="www.facebook.com" target="_blank">
                    <span className="fab fa fa-facebook-square" />
                  </a>
                </li>
                <li>
                  <a href="www.facebook.com" target="_blank">
                    <span className="fab fa fa-twitter-square" />
                  </a>
                </li>
                <li>
                  <a href="www.facebook.com" target="_blank">
                    <span className="fab fa fa-pinterest-square" />
                  </a>
                </li>
                <li>
                  <a href="www.facebook.com" target="_blank">
                    <span className="fab fa fa-google-plus-square" />
                  </a>
                </li>
                <li>
                  <a href="www.facebook.com" target="_blank">
                    <span className="fab fa fa-youtube-square" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* End Mobile Menu */}
      </header>
    </>
  );
};

export default Navbar;
