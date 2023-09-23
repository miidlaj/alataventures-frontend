import React from "react";

const OurTeam = () => {
  return (
    <>
      <main className="out-team">
        <section>
          <h1 className="page-title">Our Team</h1>
        </section>
        <div className="leadership">
          <div className="flex justify-end">
            <div className="leader">
              <div className="leader__header">
                <div className="leader__exp">
                  {/* <span className="years">8</span> */}
                  <span>Managing Director</span>
                </div>
                <p
                  data-toggle="modal"
                  data-target=".mansoor-modal"
                  className="leader__bio"
                >
                  +
                </p>

                <div
                  className="modal fade mansoor-modal"
                  tabIndex={-1}
                  style={{ paddingTop: "100px" }}
                  role="dialog"
                  aria-labelledby="myLargeModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-xl">
                    <div
                      className="modal-content"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0)",
                        border: "none",
                      }}
                    >
                      <div className="container">
                        <div className="row mt-5">
                          <div className="preview-card">
                            <div className="preview-card__wrp">
                              <div className="preview-card__item">
                                <div className="preview-card__img">
                                  <img src="about/mansoor.jpg" alt="" />
                                </div>
                                <div className="preview-card__content">
                                  <span className="preview-card__code">
                                    Managing Director of Alataventures
                                  </span>
                                  <div className="preview-card__title">
                                    MANSOOR VADAKKEDATHIL
                                  </div>
                                  <div className="preview-card__text">
                                    Mansoor is the visionary founder of Alata
                                    Ventures. He has a rich background in the
                                    construction sector and possesses extensive
                                    knowledge and experience in managing
                                    construction projects. Mansoor is known for
                                    his entrepreneurial spirit, leadership
                                    skills, and commitment to excellence, which
                                    have been instrumental in the growth and
                                    success of Alata Ventures Pvt Ltd.
                                  </div>
                                  <a
                                    href="mailto:mansoor@alataventures.com"
                                    target="_blank"
                                    className="preview-card__button"
                                    rel="noreferrer"
                                  >
                                    CONTACT
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
              </div>
              <div className="leader__img">
                <img src="about/mansoor.jpg" alt="Amanda Maynard" />
              </div>
              <div className="leader__name">
                <h2>MANSOOR VADAKKEDATHIL</h2>
                {/* <p>Managing Director</p> */}
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="leader">
              <div className="leader__header">
                <div className="leader__exp">
                  {/* <span className="years">6</span> */}
                  <span>Director</span>
                </div>
                <p
                  data-toggle="modal"
                  data-target=".sanoob-modal"
                  className="leader__bio"
                >
                  +
                </p>

                <div
                  className="modal fade sanoob-modal"
                  tabIndex={-1}
                  style={{ paddingTop: "100px" }}
                  role="dialog"
                  aria-labelledby="myLargeModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-xl">
                    <div
                      className="modal-content"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0)",
                        border: "none",
                      }}
                    >
                      <div className="container">
                        <div className="row mt-5">
                          <div className="preview-card">
                            <div className="preview-card__wrp">
                              <div className="preview-card__item">
                                <div className="preview-card__img">
                                  <img src="about/sanoob.jpg" alt="" />
                                </div>
                                <div className="preview-card__content">
                                  <span className="preview-card__code">
                                    Director of Alataventures
                                  </span>
                                  <div className="preview-card__title">
                                    MOHAMED SANOOB
                                  </div>
                                  <div className="preview-card__text">
                                    With 12 years of construction expertise,
                                    Mohamed Sanoob is a Director at Alata
                                    Ventures Pvt Ltd. His career spans 9 years
                                    in the UAE and 3 years in India, and he has
                                    contributed to prestigious projects with
                                    industry leaders like Damac. As a highly
                                    skilled draughtsman, he ensures precision
                                    and innovation in every project. Mohamed's
                                    international experience and commitment to
                                    excellence drive Alata Ventures' success and
                                    vision for future growth in the construction
                                    industry.
                                    <br />
                                    <br />
                                    <em>
                                      His portfolio of achievements includes:
                                    </em>
                                    <br />
                                    <br />
                                    <ul className="list-group list-group-flush">
                                      <li className="list-group-item">
                                        <b>
                                          Damac properties Executive bay (Tower)
                                          (Tower-A 20 floor, tower –B 18 floor,
                                          Behind business bay metro)
                                        </b>
                                        <br />
                                        <b>Client:</b> Damac star properties
                                        LLC.
                                        <br />
                                        <b>Consultant:</b> Engineering
                                        Consortium Consulting Engineers
                                        <br />
                                        <b>Position:</b> Project Draughtsman
                                      </li>
                                      <li className="list-group-item">
                                        <b>
                                          Niloofar Tower on Plot No:A004
                                          (230)Jadaf (4 Basement + 1 Ground
                                          floor + 12 Typical floors)
                                        </b>
                                        <br />
                                        <b>Client:</b> RMG LIMITED (CPM)
                                        <br />
                                        <b>Consultant:</b> ARENCO (Architectural
                                        Engineering Consultants)
                                        <br />
                                        <b>Position:</b> Project Draughtsman
                                      </li>
                                      <li className="list-group-item">
                                        <b>
                                          Manazel Al Khor (luxury apartments) (1
                                          Basement + L.G + G + 4 Floors)
                                        </b>
                                        <br />
                                        <b>Client:</b> DP (Dubai Properties)
                                        <br />
                                        <b>Consultant:</b> WSP
                                        <br />
                                        <b> Total Cost:</b> AED 200 Million
                                        <br />
                                        <b>Position:</b> Project Draughtsman
                                      </li>
                                      <li className="list-group-item">
                                        <b>
                                          G + 4P + 13F + R,Plot No 231-311 AL
                                          NAHDA 1st
                                        </b>
                                        <br />
                                        <b>Client:</b> ESSA AL MAIDOOR
                                        <br />
                                        <b>Consultant:</b> ACCESS ENGINEERING
                                        CONSULTANCY
                                        <br />
                                        <b>Position:</b> Project Draughtsman
                                      </li>
                                      <li className="list-group-item">
                                        <b>
                                          G + l3 + ROOF Residential Bldg at Plot
                                          No.231-259, Al Nahda 1, Dubai. & G+6
                                          CAR PARKING , Plot No. 231-350
                                        </b>
                                        <br />
                                        <b>Client:</b> AQIL AL ZAROONI
                                        <br />
                                        <b>Consultant:</b> INSPIRATION
                                        ENGINEERING CONSULTANCY
                                        <br />
                                        <b>Position:</b> Project Draughtsman
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="leader__img">
                <img src="about/sanoob.jpg" alt="Sammy Cotillard" />
              </div>
              <div className="leader__name">
                <h2>MOHAMED SANOOB</h2>
                {/* <p>
            Director
          </p> */}
              </div>
            </div>
          </div>
          {/* <div className="leader">
        <div className="leader__header">
          <div className="leader__exp">
            <span className="years">5</span>
            <span>years</span>
          </div>
          <p
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
            className="leader__bio"
          >
            +
          </p>

          <div
            class="modal fade bd-example-modal-lg "
            style={{ paddingTop: "100px" }}
            tabindex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Illum recusandae, suscipit magni necessitatibus quos soluta
                sed dolorem est aliquam corrupti vitae natus fugiat numquam
                corporis tempore sequi dignissimos nobis minima?
              </div>
            </div>
          </div>
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
      </div> */}
        </div>
      </main>
    </>
  );
};

export default OurTeam;
