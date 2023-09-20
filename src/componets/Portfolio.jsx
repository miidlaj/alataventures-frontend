import React, { useEffect, useState } from "react";
import { getLatestPortfolio } from "../api/Portfolio";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [portfoliosToShow, setPortfoliosToShow] = useState([]);

  const fetchPortfolios = async () => {
    await getLatestPortfolio().then((res) => {
      if (res?.status === 200) {
        const datas = res.data.portfolioData;
        setPortfolios(datas);
        setPortfoliosToShow(datas.slice(0, 6));
      }
    });
  };

  const [tab, setTab] = useState("ALL");

  const handleTabChange = (tabName) => {
    if (tabName === "ALL") {
      setPortfoliosToShow(portfolios.slice(0, 6));
    } else {
      setPortfoliosToShow(portfolios.filter((x) => x.status === tabName));
    }
    setTab(tabName);
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);

  return (
    <>
      <section
        id="portfolio"
        className="latest-portfolio-area onepage"
        style={{ marginTop: "200px" }}
      >
        <div className="container">
          <div className="sec-title text-center">
            <p>Our Work Industries!</p>
            <div className="big-title black-clr">
              <h1>Portfolio</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div
                className="project-menu-box wow fadeInUp"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <ul className="project-filter clearfix post-filter has-dynamic-filters-counter">
                  <li
                    onClick={() => handleTabChange("ALL")}
                    className={`${tab === "ALL" && "active"}`}
                  >
                    <span className="filter-text">
                      <i className="flaticon-menu" />
                      All
                    </span>
                  </li>
                  <li
                    onClick={() => handleTabChange("EXECUTED")}
                    className={`${tab === "EXECUTED" && "active"}`}
                  >
                    <span className="filter-text">
                      <i className="flaticon-menu" />
                      Executed
                    </span>
                  </li>
                  <li
                    onClick={() => handleTabChange("ONGOING")}
                    className={`${tab === "ONGOING" && "active"}`}
                  >
                    <span className="filter-text">
                      <i className="flaticon-building" />
                      Ongoing
                    </span>
                  </li>
                  <li
                    onClick={() => handleTabChange("YET_TO_COMMENCE")}
                    className={`${tab === "YET_TO_COMMENCE" && "active"}`}
                  >
                    <span className="filter-text">
                      <i className="flaticon-modern-bridge-road-symbol" />
                      Yet to Commence
                    </span>
                  </li>
                  <li
                    onClick={() => handleTabChange("UPCOMING")}
                    className={`${tab === "UPCOMING" && "active"}`}
                  >
                    <span className="filter-text">
                      <i className="flaticon-house" />
                      Upcoming
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row filter-layout masonary-layout">
            {portfoliosToShow.length !== 0 &&
              portfoliosToShow.map((item) => (
                <div key={item._id} className={`col-xl-4 col-lg-6 col-md-6`}>
                  <div className="single-portfolio-style1">
                    <div className="img-holder">
                      <div className="inner-box">
                        <div className="flex justify-center">
                          <img
                            src={item.imageUrl}
                            alt=""
                            style={{
                              maxWidth: "100%",
                              maxHeight: "500px",
                              width: "auto",
                              height: "auto",
                            }}
                          />
                        </div>
                        <div className="overlay-style-one">
                          <div className="box">
                            <div className="inner">
                              <div className="zoom-button">
                                <a
                                  className="lightbox-image"
                                  data-fancybox="gallery"
                                  href={item.imageUrl}
                                >
                                  <span className="flaticon-plus" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="title-holder">
                        <span className="tag">{item.company}</span>
                        <h5>
                          <p>{item.title}</p>
                        </h5>
                        <p>
                          <span className="flaticon-location-pin" />
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="all-portfolio-button text-center">
                <Link to="/portfolio" className="btn-one">
                  View More
                  <span className="flaticon-next" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
