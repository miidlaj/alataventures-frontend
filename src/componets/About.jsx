import React from "react";

const About = () => {
  return (
    <>
      <section className="service-style1-area">
        <div className="container">
          <div className="title">
            <div className="flex justify-center">
              <img
                src="assets/images/logo/alata logo 2.png"
                alt="logo"
                height={"200px"}
                width={"200px"}
              />
            </div>
            <h1>
              <br />
              ALATA VENTURES PVT LTD <br /> <br />
              <p style={{ fontSize: "x-large" }}>
                <p>
                  ALATA VENTURES PVT LTD is a construction company founded by
                  Mr.Mansoor vadakkethil, an experienced entrepreneur in the
                  construction industry.The company operates in Kerala,India,
                  and specializes in undertaking various construction
                  projects,particularly government works. Alata Ventures has
                  gained a strong reputation for its high-quality construction
                  services and has successfully completed numerous projects for
                  prestigious clients..
                </p>
              </p>
            </h1>
          </div>
        </div>
      </section>

      <section id="about" className="about-style1-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="about-style1-image-box clearfix">
                <div className="shape zoom-fade" />
                <div className="image-box1">
                  <img src="assets/images/about/about-1.jpg" alt="Awesome" />
                </div>
                <div className="image-box2">
                  <img src="assets/images/about/about-2.jpg" alt="Awesome" />
                </div>
                <div
                  className="video-holder-box"
                  style={{
                    backgroundImage:
                      "url(assets/images/about/video-gallery.jpg)",
                  }}
                >
                  <div className="icon">
                    {/* <div class="inner">
                          <a class="video-popup wow zoomIn" data-wow-delay="300ms" data-wow-duration="1500ms" title="RinBuild Video Gallery" href="https://www.youtube.com/watch?v=p25gICT63ek">
                              <span class="flaticon-play-button"></span>
                          </a>
                      </div>    */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12">
              <div className="about-style1-text-box">
                <div className="title">
                  {/* <p>WELCOME</p> */}
                  <h1>
                    About <b> Company</b>{" "}
                  </h1>
                </div>
                <div className="inner-contant">
                  <p>
                    In 2014, MR.Mansoor and his friend MR.Shafeeque co-founded a
                    company called Alif Gulf Group WLL in Qatar, marking the
                    beginning of their entrepreneurial journey.Alif Gulf Group
                    WLL quickly gained recognition and secured prominent clients
                    such as Ooredoo
                  </p>
                  <p>
                    Later, Mansoor decided to establish Alata Ventures in
                    Kerala, India, with a focus on government projects. The
                    company gained traction in the market and secured notable
                    clients, including Reliance Industries.Alata Ventures also
                    holds significant licenses, such as the Kerala Water
                    Authority (KWA) construction license and the Kerala Public
                    Works Department (PWD) contract license, further bolstering
                    its capabilities.
                  </p>
                  {/* <div class="signature-box">
                      <img src="assets/images/resources/signature.png" alt="Signature">    
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
