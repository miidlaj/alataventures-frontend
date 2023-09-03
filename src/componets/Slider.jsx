import React from "react";

const Slider = () => {
  return (
    <>
      <section id="banner" className="main-slider style1">
        <div className="slider-box">
          {/* Banner Carousel */}
          <div className="banner-carousel owl-theme owl-carousel">
            {/* Slide */}
            <div className="slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage: "url(assets/images/slides/slide-v1-1.png)",
                }}
              />
              <div className="auto-container">
                <div className="content">
                  <h2>
                    Building <span> Tomorrow's</span>
                    <br /> Foundations Today
                  </h2>
                  {/* <h3><img src="assets/images/icon/slide-title-icon-1.png" alt="">Our Top Construction.</h3> */}
                  <div className="text">
                    <p>
                      {" "}
                      Welcome to Alata Ventures, where innovation meets
                      construction excellence. With a legacy of transforming
                      visions into reality, we're your partner for creating
                      iconic structures that shape the skyline.
                    </p>
                  </div>
                  <div className="btns-box">
                    <a className="btn-one" href="#contact">
                      Contact Us
                      <span className="fa fa-phone" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide */}
            <div className="slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage: "url(assets/images/slides/slide-v1-2.png)",
                }}
              />
              <div className="auto-container">
                <div className="content">
                  <h2>
                    Elevating <span>Urban</span>
                    <br />
                    Landscapes
                  </h2>
                  {/* <h3><img src="assets/images/icon/slide-title-icon-1.png" alt="">Our Top Construction.</h3> */}
                  <div className="text">
                    <p>
                      Explore our portfolio of successfully completed projects
                      that stand as testament to our dedication, craftsmanship,
                      and commitment to quality. We take pride in contributing
                      to vibrant urban landscapes..
                    </p>
                  </div>
                  <div className="btns-box">
                    <a className="btn-one" href="#contact">
                      Contact Us
                      <span className="fa fa-phone" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide */}
            <div className="slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage: "url(assets/images/slides/slide-v1-3.png)",
                }}
              />
              <div className="auto-container">
                <div className="content">
                  <h2>
                    Collaboration at its <span>Core</span>
                    <br />{" "}
                  </h2>
                  {/* <h3><img src="assets/images/icon/slide-title-icon-1.png" alt="">Our Top Construction.</h3> */}
                  <div className="text">
                    <p>
                      At Alata Ventures, collaboration fuels our success. Our
                      team of seasoned professionals combines expertise and
                      passion to bring dreams to life. From conception to
                      completion, we are united in our pursuit of excellence..
                    </p>
                  </div>
                  <div className="btns-box">
                    <a className="btn-one" href="#contact">
                      Contact Us
                      <span className="fa fa-phone" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
