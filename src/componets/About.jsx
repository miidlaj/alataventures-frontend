import React from "react";
import "./About.css";

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
                ALATA VENTURES PVT LTD is a construction company founded by
                Mr.Mansoor vadakkethil, an experienced entrepreneur in the
                construction industry.The company operates in Kerala, India and
                specializes in undertaking various construction projects,
                particularly government works. Alata Ventures has gained a
                strong reputation for its high-quality construction services and
                has successfully completed numerous projects for prestigious
                clients..
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

      {/* <main className="out-team">
        <section>
          <h1 className="page-title">Alataventures</h1>
        </section>
        <div className="leadership">
          <div className="leader">
            <div className="leader__header">
              <div className="leader__exp">
                <span className="years">8</span>
                <span>years</span>
              </div>
              <a href="/" className="leader__bio">
                Bio
              </a>
            </div>
            <div className="leader__img">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                alt="Amanda Maynard"
              />
            </div>
            <div className="leader__name">
              <h2>MOHAMMED SANOOB</h2>
              <p>
                <em>President, STEM</em>
              </p>
            </div>
          </div>
          <div className="leader">
            <div className="leader__header">
              <div className="leader__exp">
                <span className="years">6</span>
                <span>years</span>
              </div>
              <a href="#" className="leader__bio">
                Bio
              </a>
            </div>
            <div className="leader__img">
              <img
                src="https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80"
                alt="Sammy Cotillard"
              />
            </div>
            <div className="leader__name">
              <h2>Sammy Cotillard</h2>
              <p>
                <em>Vice President, STEM</em>
              </p>
            </div>
          </div>
          <div className="leader">
            <div className="leader__header">
              <div className="leader__exp">
                <span className="years">5</span>
                <span>years</span>
              </div>
              <a href="#" className="leader__bio">
                Bio
              </a>
            </div>
            <div className="leader__img">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                alt="Todd Fletcher"
              />
            </div>
            <div className="leader__name">
              <h2>Todd Fletcher</h2>
              <p>
                <em>Chief Financial Officer</em>
              </p>
            </div>
          </div>
        </div>
      </main> */}
      
    </>
  );
};

export default About;
